import React, { useEffect, useState } from "react";
import "./ListAllUsersExceptAdmin.css"
import { Card } from "../../../common/Card/Card";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringAllUsersExceptAdmin } from "../../../utils/apiCalls/usersCalls/usersGetAllExceptAdmin";
export const ListAllUsersExceptAdmin = () => {
    const [users, setUsers] = useState([]);

    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    useEffect(() => {
        if (users.length === 0) {
            bringAllUsersExceptAdmin(token)
                .then(users => setUsers(users))
                .catch(error => console.log(error))
        }
    }, []);
    return (
        <div className="listAllUsersExceptAdmin">
            <div className="viewTitle" >
                PACIENTES
            </div>

            {users.length > 0
                ? (
                    <div className="allUsers">
                        {
                            users.map(user => {
                                return (
                                    <div key={user.id} className="pattientCard">
                                        <Card
                                            name={user.name}
                                            surname={`Apellidos: ${user.surname}`}
                                            age={`Edad: ${user.age}`}
                                            mobile={`Móvil: ${user.mobile}`}
                                            email={`Correo: ${user.email}`}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : (
                    <div>CARGANDO ...</div>
                )
            }
        </div>
    )


}
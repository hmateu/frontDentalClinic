import React, { useState } from "react";
import "./Users.css"
import { bringAllUsers } from "../../utils/apiCalls/usersCalls/usersGetAll";
import { Card } from "../../common/Card/Card";
import { useSelector } from "react-redux";
import { userData } from "./userSlice";
export const Users = () => {
    const [users, setUsers] = useState([]);

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;

    if (users.length === 0) {
        bringAllUsers()
            .then(users => setUsers(users.data.data))
            .catch(error => console.log(error));
    }
    return (
        <div className="usersStyle">
            {role === 1
                ? (
                    <>
                        <div className="viewTitle">
                            USUARIOS
                        </div>
                        {
                            users.length > 0
                                ? (
                                    <div className="allUsers">
                                        {
                                            users.map(user => {
                                                return (
                                                    <div key={user.id} className="userCard">
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
                                )
                                : (<div>CARGANDO ...</div>)
                        }
                    </>
                )
                : (
                    <div>No puede acceder a esta información</div>
                )
            }
        </div>
    );
}
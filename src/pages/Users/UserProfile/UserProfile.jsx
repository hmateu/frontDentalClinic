import React, { useEffect, useState } from "react";
import "./UserProfile.css"
import { bringProfile } from "../../../utils/apiCalls/usersCalls/userGetOne";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Card } from "../../../common/Card/Card";
export const UserProfile = () => {
    const [user, setUser] = useState({});

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;
    const token = dataRedux?.credentials?.token;

    useEffect(() => {
        bringProfile(token)
            .then(user => setUser(user))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="userProfileStyle">
            < div className="viewTitle" >
                MI PERFIL
            </div >

            {user
                ? (
                    <div className="allUsers">
                        {
                            <div key={user.id} className="userCard">
                                <Card
                                    name={user.name}
                                    surname={`Apellidos: ${user.surname}`}
                                    age={`Edad: ${user.age}`}
                                    mobile={`Móvil: ${user.mobile}`}
                                    email={`Correo: ${user.email}`}
                                />
                            </div>

                        }
                    </div>
                ) : (
                    <div>CARGANDO ...</div>
                )
            }
        </div>
    )
}
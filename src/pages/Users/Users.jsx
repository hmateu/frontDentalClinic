import React, { useState } from "react";
import "./Users.css"
import { bringAllUsers } from "../../utils/apiCalls/usersCalls/usersGetAll";
import { Card } from "../../common/Card/Card";
export const Users = () => {
    const [users, setUsers] = useState([]);
    if(users.length === 0){
        bringAllUsers()
        .then(users => setUsers(users.data.data))
        .catch(error=>console.log(error));
    }
    return (
        <div className="usersStyle">
            <div className="titleForm">
                USUARIOS
            </div>
            {
                users.length > 0
                    ?(
                        <div className="allUsers">
                            {
                                users.map(user => {
                                    return (
                                        <div key={user.id}>
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
                    :(<div>CARGANDO ...</div>)
            }
        </div>
    );
}
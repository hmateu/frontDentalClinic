import React, { useState } from "react";
import "./Users.css"
import { bringAllUsers } from "../../utils/apiCalls/usersCalls/usersGetAll";
import { Card } from "../../common/Card/Card";
import { useSelector } from "react-redux";
import { userData } from "./userSlice";
import { bringProfile } from "../../utils/apiCalls/usersCalls/userGetOne";
export const Users = () => {

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;
    const token = dataRedux?.credentials?.token;

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    if (users.length === 0 && !user.name) {
        role === 1
            ? (
                bringAllUsers()
                    .then(users => setUsers(users.data.data))
                    .catch(error => console.log(error))

            )
            : (
                bringProfile(token)
                    .then(user => setUser(user))
                    .catch(error => console.log(error))
            )
    }
    return (
        <div className="usersStyle">
            {
                role === 1
                    ? (
                        <div className="viewTitle">
                            TODOS LOS USUARIOS
                        </div>
                    )
                    : (
                        <div className="viewTitle">
                            MI PERFIL
                        </div>
                    )
            }
            {
                role === 1
                    ? (
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
                    )
                    : (
                        user
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
                            )
                            : (<div>CARGANDO ...</div>)
                    )
            }
            {/* {
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
            } */}
        </div>
    );
}
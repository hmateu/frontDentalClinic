import React, { useEffect, useState } from "react";
import "./ListAllUsers.css"
import { bringAllUsers } from "../../../utils/apiCalls/usersCalls/usersGetAll";
import { Card } from "../../../common/Card/Card";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
export const ListAllUsers = () => {
    const [users, setUsers] = useState([]);

    const datos = useSelector(userData);
    const token = datos?.credentials?.token;

    useEffect(() => {
            bringAllUsers(token)
                .then(data => setUsers(data))
                .catch(error => console.log(error))
        
    }, []);
    return(<>
        < div className="viewTitle" >
            TODOS LOS USUARIOS
        </div >

   { users.length > 0
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
        ):(
        <div>CARGANDO ...</div>
        )
}
    </>)

    
}
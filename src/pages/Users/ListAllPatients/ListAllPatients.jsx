import React, { useEffect, useState } from "react";
import "./ListAllPatients.css"
import { Card } from "../../../common/Card/Card";
import { bringAllPatients } from "../../../utils/apiCalls/usersCalls/patientsGetAll";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
export const ListAllPatients = () => {
    const [patients, setPatients] = useState([]);

    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    useEffect(() => {
        if (patients.length === 0) {
            bringAllPatients(token)
                .then(patients => setPatients(patients))
                .catch(error => console.log(error))
        }
    }, []);
    return (
        <div className="listAllPatients">
            <div className="viewTitle" >
                PACIENTES
            </div>

            {patients.length > 0
                ? (
                    <div className="allPatients">
                        {
                            patients.map(user => {
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
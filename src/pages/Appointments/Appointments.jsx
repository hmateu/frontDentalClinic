import React, { useState } from "react";
import "./Appointments.css"
import { Card } from "../../common/Card/Card";
import { bringPatientAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentGetOnePatientController";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    const datos = useSelector(userData);
    console.log("DATOS: ", datos)
    const token = datos?.credentials?.token;

    if (appointments?.length === 0) {
        bringPatientAppointments(token)
            .then(appointments => {
                console.log(appointments)
                setAppointments(appointments.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="appointmentsStyle">
            <div className="viewTitle">
                MIS CITAS
            </div>
            {
                appointments?.length > 0
                    ? (
                        <div className="allAppointments">
                            {
                                appointments?.map(appointment => {
                                    console.log(appointment)
                                    return (
                                        <div key={appointment.id} className="appointmentCard">
                                            <Card
                                                date={`Fecha: ${appointment.fecha}`}
                                                price={`Precio: ${appointment.precio}€`}
                                                assessment={`Descripción: ${appointment.conclusion}`}
                                                dentist={`Dentista: ${appointment.dentista}`}
                                                patient={`Paciente: ${appointment.paciente}`}
                                                service={`Servicio: ${appointment.servicio}`}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                    : (<div>CARGANDO ...</div>)
            }
        </div>
    );
}
import React, { useState } from "react";
import "./Appointments.css"
import { Card } from "../../common/Card/Card";
import { bringPatientAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentGetOnePatientController";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentsGetAll";
export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    const datos = useSelector(userData);
    const role = datos.data.role;
    const token = datos?.credentials?.token;

    if (appointments?.length === 0) {
        role === 1
        ?(
            bringAllAppointments()
            .then(appointments => {
                setAppointments(appointments.data)
            })
            .catch(error => console.log(error))
        )
        :(
            bringPatientAppointments(token)
            .then(appointments => {
                setAppointments(appointments.data)
            })
            .catch(error => console.log(error))
        )
        
            
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
                                    return (
                                        <div key={appointment.id} className="appointmentCard">
                                            <Card
                                                date={`Fecha: ${appointment.date}`}
                                                price={`Precio: ${appointment.price}€`}
                                                assessment={`Descripción: ${appointment.assessment}`}
                                                dentist={`Dentista: ${appointment.dentist}`}
                                                patient={`Paciente: ${appointment.patient}`}
                                                service={`Servicio: ${appointment.service}`}
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
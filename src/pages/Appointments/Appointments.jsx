import React, { useState } from "react";
import "./Appointments.css"
import { bringAllAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentsGetAll";
import { Card } from "../../common/Card/Card";
export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    if(appointments.length === 0){
        bringAllAppointments()
        .then(
            // appointments => setAppointments(appointments.data.data)
            appointments => {
                console.log(appointments.data.data)
                setAppointments(appointments.data.data)
            }
        )
        .catch(error => console.log(error))
    }
    return (
        <div className="appointmentsStyle">
            <div className="titleForm">
                CITAS
            </div>
            {
                appointments.length > 0
                    ?(
                        <div className="allAppointments">
                            {
                                appointments.map(appointment => {
                                    return (
                                        <div key={appointment.id}>
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
                    :(<div>CARGANDO ...</div>)
            }
        </div>
    );
}
import React, { useEffect, useState } from "react";
import "./DentistAppointments.css";
import { useSelector } from "react-redux";
import { userData } from "../../Users/userSlice";
import { bringDentistAppointments } from "../../../utils/apiCalls/appointmentsCalls/appointmentGetOneDentistController";
import { Card } from "../../../common/Card/Card";

export const DentistAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;
    const token = dataRedux?.credentials?.token;

    useEffect(() => {
        bringDentistAppointments(token)
            .then(appointments => setAppointments(appointments))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="dentistAppointmentsStyle">
            < div className="viewTitle" >
                MIS CITAS
            </div >
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
    )
}
import React, { useState } from "react";
import "./Appointments.css"
import { Card } from "../../common/Card/Card";
import { bringPatientAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentGetOnePatientController";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentsGetAll";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { useNavigate } from "react-router-dom";
export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const datos = useSelector(userData);
    const role = datos.data.role;
    const token = datos?.credentials?.token;
    const navigate = useNavigate();

    if (appointments?.length === 0) {
        role === 1
            ? (
                bringAllAppointments(token)
                    .then(appointments => {
                        setAppointments(appointments.data)
                    })
                    .catch(error => console.log(error))
            )
            : (
                bringPatientAppointments(token)
                    .then(appointments => {
                        setAppointments(appointments.data)
                    })
                    .catch(error => console.log(error))
            )
    }
    return (
        <div className="appointmentsStyle">
            {
                role === 1
                    ? (
                        <div className="viewTitle">
                            TODAS LAS CITAS
                        </div>
                    )
                    : (
                        <div className="viewTitle">
                            MIS CITAS
                        </div>
                    )
            }
            {
                appointments?.length > 0
                    ? (
                        <>
                            <FormBtn className="newAppointmentBtn"
                                name={"Nueva cita"}
                                pathClick={() => navigate("/new-appointment")}
                            />
                            <div className="allAppointments">
                                {
                                    appointments?.map(appointment => {
                                        return (
                                            <div key={appointment.id} className="appointmentCard">
                                                <Card
                                                    date={`Fecha: ${appointment.date}`}
                                                    price={`Precio: ${appointment.price}€`}
                                                    assessment={`Descripción: ${appointment.assessment}`}
                                                    // dentist={`Dentista: ${appointment.dentist}`}
                                                    // patient={`Paciente: ${appointment.patient}`}
                                                    service={`Servicio: ${appointment.service}`}
                                                />
                                                {
                                                    role === 1
                                                        ? (<></>)
                                                        : (
                                                            <FormBtn
                                                                pathClick={() => navigate(`/update-appointment/${appointment.id}`)}
                                                                name={"Modificar"}
                                                            />
                                                        )
                                                }


                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </>
                    )
                    : (
                        <>
                            <FormBtn className="newAppointmentBtn"
                                name={"Nueva cita"}
                                pathClick={() => navigate("/new-appointment")}
                            />
                            <div>NO EXISTEN CITAS</div>
                        </>
                    )
            }
        </div>
    );
}
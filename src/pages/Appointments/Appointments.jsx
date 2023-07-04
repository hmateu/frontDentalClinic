import React, { useEffect, useState } from "react";
import "./Appointments.css"
import { Card } from "../../common/Card/Card";
import { bringPatientAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentGetOnePatientController";
import { useSelector } from "react-redux";
import { userData } from "../Users/userSlice";
import { bringAllAppointments } from "../../utils/apiCalls/appointmentsCalls/appointmentsGetAll";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../common/InputField/InputField";
import { filterByPatientAppointment } from "../../utils/apiCalls/appointmentsCalls/appointmentFilterByPatient";
export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const datos = useSelector(userData);
    const role = datos.data.role;
    const token = datos?.credentials?.token;
    const navigate = useNavigate();
    const [criteria, setCriteria] = useState({ filter: "" });


    const inputHandler = (e) => {
        setCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const nameCriteria = criteria.filter;

    useEffect(() => {
        const bring = setTimeout(() => {
            filterByPatientAppointment(token, nameCriteria)
                .then((res) => {
                    setAppointments(res.data);
                })
                .catch((error) => console.log(error))
        }, 500)

        return () => clearTimeout(bring);

    }, [nameCriteria]);

    return (
        <div className="appointmentsStyle">
            {
                role === 1
                    ? (
                        <>
                            <div className="viewTitle">
                                TODAS LAS CITAS
                            </div>
                            <InputField
                                type={"text"}
                                name={"filter"}
                                classDesign={"inputFieldStyle"}
                                placeholder={"Paciente"}
                                handlerFunction={inputHandler}
                                onBlurFunction={() => { }}
                            />
                        </>
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
                                                    patient={`Paciente: ${appointment.patient}`}
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
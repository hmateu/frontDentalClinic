import React, { useEffect, useState } from "react";
import "./AppointmentUpdate.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { bringOneAppointment } from "../../../utils/apiCalls/appointmentsCalls/appointmentGetOne";
import { useSelector } from "react-redux";
import { userData } from "../../Users/userSlice";
export const AppointmentUpdate = () => {
    let { id } = useParams();
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        bringOneAppointment(token, id)
            .then(res => { setAppointment(res[0]) })
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div className="viewTitle">
                MODIFICAR CITA
            </div>
            <div className="appointmentUpdateStyle">
                <div>Actualizar cita número {appointment.id}</div>
                <div>Fecha: {appointment.date}</div>
                <div>Precio: {appointment.price}</div>
                <div>Descripción:{appointment.assessment}</div>
                <div>Servicio: {appointment.service}</div>
            </div>
        </>
    )
}
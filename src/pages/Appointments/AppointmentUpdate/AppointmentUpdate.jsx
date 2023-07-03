import React, { useEffect, useState } from "react";
import "./AppointmentUpdate.css"
import { useNavigate, useParams } from "react-router-dom";
import { bringOneAppointment } from "../../../utils/apiCalls/appointmentsCalls/appointmentGetOne";
import { useSelector } from "react-redux";
import { userData } from "../../Users/userSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import useServices from "../../../Hooks/useServices";
import { updateAppointmentByPatient } from "../../../utils/apiCalls/appointmentsCalls/appointmentUpdate";
import { inputHandler } from "../../../utils/useful";
export const AppointmentUpdate = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;
    const [appointment, setAppointment] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [services] = useServices();
    const [selectedService, setSelectedService] = useState("");
    const [data, setData] = useState({});

    const selectHandler = (e) => {
        setSelectedService(e.target.value)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        setSelectedService(appointment.service)
        setSelectedDate(appointment.date)
  
    }, []);

    const handlerSubmit = () => {

        // console.log(token)
        const data = { service: selectedService, date: selectedDate };
        // console.log(data)
        updateAppointmentByPatient(data, token, id)
            .then(
                setTimeout(() => {
                    navigate("/appointments");
                }, 500)
            )
    }

    const isFutureDate = (date) => {
        const today = new Date();
        return date > today;
    };

    useEffect(() => {
        bringOneAppointment(token, id)
            .then(res => { setAppointment(res[0]) })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="appointmentUpdateStyle">
            <div className="viewTitle">
                MODIFICAR CITA
            </div>
            <div className="formStyleEditing">
                <div className="appointmentCard updateAppointment">

                    <div className="dataForm">
                        <div className="textForm">
                            Fecha:
                        </div>
                        <DatePicker
                            // className={"datePickerStyle"}
                            selected={selectedDate}
                            onChange={handleDateChange}
                            minDate={new Date()}
                            filterDate={isFutureDate}
                            dateFormat="dd/MM/yyyy"
                            placeholderText={appointment.date}
                            autoComplete="off"
                        />
                    </div>
                    <div className="dataForm">
                        <div className="textForm">
                            Precio:
                        </div>
                        {`${appointment.price}€`}
                    </div>
                    <div className="dataForm">
                        <div className="textForm">
                            Descripción:
                        </div>
                        {`${appointment.assessment}`}
                    </div>
                    <div className="dataForm">
                        <div className="textForm">
                            Servicio:
                        </div>
                        <select name="service" id="" onChange={selectHandler}>
                            <option value="">{appointment.service}</option>
                            {
                                services.map(service => {
                                    return (
                                        <option key={service.id} value={service.id}>{service.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <FormBtn
                        pathClick={() => { handlerSubmit(data, token) }}
                        name={"Confirmar"}
                    />
                </div>

            </div>
        </div>
    )
}
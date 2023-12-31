import React, { useEffect, useState } from "react";
import "./NewAppointment.css";
import { useNavigate } from "react-router-dom";
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useServices from "../../../Hooks/useServices";
import { createNewAppointment } from "../../../utils/apiCalls/appointmentsCalls/appointmentCreate";
import { useSelector } from "react-redux";
import { userData } from "../../Users/userSlice";
export const NewAppointment = () => {

    const navigate = useNavigate();

    const dataRedux = useSelector(userData);
    const token = dataRedux?.credentials?.token;

    const [services] = useServices();
    const [selectedService, setSelectedService] = useState("");

    const selectHandler = (e) => {
        setSelectedService(e.target.value)
    }

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const isFutureDate = (date) => {
        const today = new Date();
        return date > today;
    };

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        selectedService !== "" && selectedDate !== null
            ? setValidation(true)
            : setValidation(false)
    }, [selectedService, selectedDate]);

    const handlerSubmit = () => {
        const data = { service: selectedService, date: selectedDate };
        createNewAppointment(token,data);
        setTimeout(() => {
            navigate("/appointments");
        }, 500);
    }

    return (
        <div className="newAppointment">
            <div className="viewTitle">NUEVA CITA</div>
            <div className="newAppointmentFormStyle formStyle ">
                <div className="dataForm">
                    <select name="" id="" onChange={selectHandler}>
                        <option value="">Selecciona un servicio</option>
                        {
                            services.map(service => {
                                return (
                                    <option key={service.id} value={service.id}>{service.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="dataForm">
                    <DatePicker
                        // className={"datePickerStyle"}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        filterDate={isFutureDate}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                        autoComplete="off"
                    />
                </div>

                <div className={validation ? "btnForm" : "btnForm disabled"}>
                    <FormBtn
                        pathClick={handlerSubmit}
                        name={"Confirmar"}
                    />
                </div>
            </div>
        </div>
    );
}
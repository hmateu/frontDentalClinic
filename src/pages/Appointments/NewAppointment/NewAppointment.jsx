import React, { useEffect, useState } from "react";
import "./NewAppointment.css";
import { useNavigate } from "react-router-dom";
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectService from "../../../common/SelectService/SelectService";
export const NewAppointment = () => {

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);
    const currentDate = new Date();

    return (
        <div className="newAppointment">
            <div className="viewTitle">NUEVA CITA</div>
            <div className="newAppointmentFormStyle formStyle ">
                <div className="dataForm">
                    <SelectService />
                </div>

                <div className="dataForm">
                    <DatePicker
                        // className={"datePickerStyle"}
                        selected={selectedDate}
                        minDate={currentDate}
                        onChange={(date) => setSelectedDate(date)}
                    />
                </div>

                <div className={"btnForm"}>
                    <FormBtn
                        name={"Confirmar"}
                    />
                </div>
            </div>
        </div>
    );
}
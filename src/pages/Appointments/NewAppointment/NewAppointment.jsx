import React, { useEffect, useState } from "react";
import "./NewAppointment.css";
import { useNavigate } from "react-router-dom";
import { checkForm } from "../../../utils/validateForm";
import { InputField } from "../../../common/InputField/InputField";
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const NewAppointment = () => {

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

    const [credentials, setCredentials] = useState({
        treatment: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        treatmentError: ""
    });

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        credentials.treatment !== "" && credentialsError.treatmentError === ""
            ? setValidation(true)
            : setValidation(false)
    }, [credentials, credentialsError]);

    return (
        <div className="newAppointment">
            <div className="viewTitle">NUEVA CITA</div>
            <div className="formStyle">
                <div className={validation ? "btnForm" : "btnForm disabled"}>
                    <FormBtn
                        name={"Registrarme"}
                    />
                </div>
            </div>
        </div>
    );
}
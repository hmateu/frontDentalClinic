import React, { useState } from "react";
import "./Register.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { checkForm } from "../../utils/validateForm";
export const Register = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        dni: "",
        email: "",
        password: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        nameError: "",
        surnameError: "",
        dniError: "",
        emailError: "",
        passwordError: ""
    });

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const inputCheck = (e) => {
        let errorMessage = checkForm(e.target.name, e.target.value)
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

    return (
        <div className="registerStyle">
            <div className="titleForm">REGISTRO</div>
            <div className="formStyle">
                <div className="dataForm">
                    <div className="textForm">
                        Nombre:
                    </div>
                    <InputField
                        placeholder={"Name ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.nameError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"name"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.nameError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Apellidos:
                    </div>
                    <InputField
                        placeholder={"Surname ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.surnameError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"surname"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.surnameError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        DNI:
                    </div>
                    <InputField
                        placeholder={"Dni ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.dniError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"dni"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.dniError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Email:
                    </div>
                    <InputField
                        placeholder={"Email ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.emailError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"email"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.emailError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Contraseña:
                    </div>
                    <InputField
                        placeholder={"Password ..."}
                        type={"password"}
                        classDesign={
                            credentialsError.passwordError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"password"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.passwordError}</div>
                <div className="btnForm">
                    <FormBtn
                        name={"Register"}
                    />
                </div>
            </div>
        </div>
    );
}
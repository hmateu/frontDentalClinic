import React, { useEffect, useState } from "react";
import "./Register.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { checkForm } from "../../utils/validateForm";
import { registerMe } from "../../utils/apiCalls/authCalls/authRegister";
import { useNavigate } from "react-router-dom";
export const Register = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        dni: "",
        age: "",
        mobile:"",
        location:"",
        email: "",
        password: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        nameError: "",
        surnameError: "",
        dniError: "",
        ageError: "",
        mobileError:"",
        locationError:"",
        emailError: "",
        passwordError: ""
    });

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        credentials.name !== "" && credentials.surname !== "" && credentials.dni !== "" && credentials.age !== "" && credentials.mobile !== "" && credentials.location !== "" && credentials.email !== "" && credentials.password !== "" && credentialsError.nameError === "" && credentialsError.surnameError === "" && credentialsError.dniError === "" && credentialsError.ageError === "" && credentialsError.mobileError === "" && credentialsError.locationError === "" && credentialsError.emailError === "" && credentialsError.passwordError === ""
            ? setValidation(true)
            : setValidation(false)
    }, [credentials, credentialsError]);

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

    const registMe = () => {
        registerMe(credentials)
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(
                    "success:", false,
                    "error", error.message
                )
            });
    }

    return (
        <div className="registerStyle">
            {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
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
                        Edad:
                    </div>
                    <InputField
                        placeholder={"Edad ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.ageError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"age"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.ageError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Teléfono:
                    </div>
                    <InputField
                        placeholder={"Teléfono ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.mobileError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"mobile"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.mobileError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Dirección:
                    </div>
                    <InputField
                        placeholder={"Calle o Avenida ..."}
                        type={"text"}
                        classDesign={
                            credentialsError.locationError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        name={"location"}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.locationError}</div>
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
                <div className={validation ? "btnForm" : "btnForm disabled"}>
                {/* <div className="btnForm disabled"> */}
                    <FormBtn
                        name={"Registrarme"}
                        pathClick={registMe}
                    />
                </div>
            </div>
        </div>
    );
}
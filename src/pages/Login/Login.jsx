import React, { useEffect, useState } from "react";
import "./Login.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { checkForm } from "../../utils/validateForm";
import { loginMe } from "../../utils/apiCalls/authCalls/authLogin";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: ""
    });

    const [validation, setValidation] = useState(false);

    useEffect(() => {
        credentials.email !== "" && credentials.password !== "" && credentialsError.emailError === "" && credentialsError.passwordError === ""
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
        let errorMessage = checkForm(e.target.name, e.target.value);
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

    const logMe = () => {
        loginMe(credentials)
            .then((result) => {
                let decodedToken = jwt_decode(result.data.token);
                console.log("Bienvenido/a", decodedToken.name);
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
        <div className="loginStyle">
            {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
            <div className="titleForm">
                LOGIN
            </div>
            <div className="formStyle">
                <div className="dataForm">
                    <div className="textForm">
                        Usuario:
                    </div>
                    <InputField
                        type={"text"}
                        name={"email"}
                        classDesign={
                            credentialsError.emailError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Email ..."}
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
                        type={"password"}
                        name={"password"}
                        classDesign={
                            credentialsError.passwordError === ""
                                ? "inputFieldStyle"
                                : "inputFieldStyle errorInputFieldStyle"
                        }
                        placeholder={"Password ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.passwordError}</div>
                <div className={validation ? "btnForm" : "btnForm disabled"}>
                    {/* <div className="btnForm disabled"> */}
                    <FormBtn
                        name={"Login"}
                        pathClick={logMe}
                    />
                </div>
            </div>
        </div>
    );
}
import React, { useEffect, useState } from "react";
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { checkForm } from "../../utils/validateForm";
import { loginMe } from "../../utils/apiCalls/authCalls/authLogin";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { login } from "../Users/userSlice";
import { useDispatch } from "react-redux";
export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [token, setToken] = useState("");

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

    const logMe = (e, credentials) => {
        loginMe(credentials)
            .then((result) => {
                setToken(result);
            })
            .catch((error) => {
                console.log(
                    "success:", false,
                    "message", "Catch de la función loginMe en Login.jsx",
                    "error", error.message
                )
            });
    }
    useEffect(()=>{
        if(token){
            let decodedToken = jwtDecode(token);
                dispatch(
                    login({
                        token: token,
                        name: decodedToken.name,
                        role: decodedToken.roleId
                    })
                );
                navigate('/');
        }
    },[token]);

    return (
        <div className="loginStyle">
            <div className="viewTitle">
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
                    <FormBtn
                        name={"Login"}
                        pathClick={(e) => logMe(e, credentials)}
                    />
                </div>
            </div>
        </div>
    );
}
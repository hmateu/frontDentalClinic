import React, { useState } from "react";
import "./Login.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
import { checkForm } from "../../utils/validateForm";
export const Login = () => {
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    });

    const [credentialsError, setCredentialsError] = useState({
        emailError:"",
        passwordError:""
    });

    const inputHandler = (e) => {
        setCredentials((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    }

    const inputCheck = (e) => {
        let errorMessage = checkForm(e.target.name,e.target.value);
        setCredentialsError((prevState)=>({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
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
                        User:
                    </div>
                    <InputField
                        type={"text"}
                        name={"email"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Email ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.emailError}</div>
                <div className="dataForm">
                    <div className="textForm">
                        Password:
                    </div>
                    <InputField
                        type={"password"}
                        name={"password"}
                        classDesign={"inputFieldStyle"}
                        placeholder={"Password ..."}
                        handlerFunction={inputHandler}
                        onBlurFunction={inputCheck}
                    />
                </div>
                <div className="errorText">{credentialsError.passwordError}</div>
                <div className="btnForm">
                    <FormBtn
                        name={"Login"}
                    />
                </div>
            </div>
        </div>
    );
}
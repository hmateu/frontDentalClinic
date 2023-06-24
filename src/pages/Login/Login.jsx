import React, { useState } from "react";
import "./Login.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
export const Login = () => {
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    });
    const inputHandler = (e) => {
        setCredentials((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    }

    return (
        <div className="loginStyle">
            {<pre>{JSON.stringify(credentials, null, 2)}</pre>}
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
                    />
                </div>
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
                    />
                </div>
                <div className="btnForm">
                    <FormBtn
                        name={"Login"}
                    />
                </div>
            </div>
        </div>
    );
}
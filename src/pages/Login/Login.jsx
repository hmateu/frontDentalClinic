import React from "react";
import "./Login.css"
import { InputField } from "../../common/InputField/InputField";
import { FormBtn } from "../../common/FormBtn/FormBtn";
export const Login = () => {
    return (
        <div className="loginStyle">
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
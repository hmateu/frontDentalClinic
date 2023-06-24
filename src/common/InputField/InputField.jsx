import React from "react";
import "./InputField.css";

export const InputField = ({ type, name, classDesign, placeholder}) => {
    return (
        <input
        maxLength={28}
        type={type}
        name={name}
        className={classDesign}
        placeholder={placeholder}
        />
    );
}
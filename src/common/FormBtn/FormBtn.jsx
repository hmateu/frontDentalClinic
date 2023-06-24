import React from "react";
import "./FormBtn.css";
export const FormBtn = ({name,pathClick}) => {
    return (
        <div className="formBtnStyle" onClick={pathClick}>
            {name}
        </div>
    );
}
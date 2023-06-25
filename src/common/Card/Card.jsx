import React from "react";
import "./Card.css";
export const Card = ({name,surname,age,mobile,email}) => {
    return(
        <div className="cardStyle">
            <div className="commonCard cardName">{name}</div>
            <div className="commonCard"><span className="boldText">Apellidos:</span> {surname}</div>
            <div className="commonCard"><span className="boldText">Edad:</span> {age}</div>
            <div className="commonCard"><span className="boldText">Móvil:</span> {mobile}</div>
            <div className="commonCard"><span className="boldText">Correo:</span> {email}</div>
        </div>
    )
}
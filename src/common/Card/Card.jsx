import React from "react";
import "./Card.css";
export const Card = ({dni,name,surname,age,mobile,email,location,collegial,role,speciality,date,price,assessment,dentist,patient,service,payment}) => {
    return(
        <div className="cardStyle">
            <div className="commonCard">{dni}</div>
            <div className="commonCard cardName">{name}</div>
            <div className="commonCard">{surname}</div>
            <div className="commonCard">{age}</div>
            <div className="commonCard">{mobile}</div>
            <div className="commonCard">{email}</div>
            <div className="commonCard">{location}</div>
            <div className="commonCard">{collegial}</div>
            <div className="commonCard">{role}</div>
            <div className="commonCard">{speciality}</div>
            <div className="commonCard">{date}</div>
            <div className="commonCard">{price}</div>
            <div className="commonCard">{assessment}</div>
            <div className="commonCard">{dentist}</div>
            <div className="commonCard">{patient}</div>
            <div className="commonCard">{service}</div>
            <div className="commonCard">{payment}</div>
        </div>
    )
}
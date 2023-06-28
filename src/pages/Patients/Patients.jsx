import React from "react";
import "./Patients.css"
import { ListAllPatients } from "../Users/ListAllPatients/ListAllPatients";

export const Patients = () => {
    return (
        <div className="patientsStyle">
                <ListAllPatients />
        </div>
    );
}
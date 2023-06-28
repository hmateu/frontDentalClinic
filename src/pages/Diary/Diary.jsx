import React from "react";
import "./Diary.css";
import { DentistAppointments } from "../Appointments/DentistAppointments/DentistAppointments";

export const Diary = () => {
    return (
        <div className="diaryStyle">
            <DentistAppointments />
        </div>
    );
}
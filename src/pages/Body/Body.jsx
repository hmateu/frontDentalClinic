import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Services } from "../Services/Services";
import { Appointments } from "../Appointments/Appointments";
import { Users } from "../Users/Users";
import { About } from "../About/About";
import { Patients } from "../Patients/Patients";
import { Calendar } from "../Calendar/Calendar";
import { Profile } from "../Profile/Profile";
export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to = "/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users-profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/about" element={<About />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/calendar" element={<Calendar />} />
        </Routes>
    );
}
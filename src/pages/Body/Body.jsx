import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Services } from "../Services/Services";
import { Appointments } from "../Appointments/Appointments";
import { Users } from "../Users/Users";
export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to = "/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/treatments" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
        </Routes>
    );
}
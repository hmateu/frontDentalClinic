import React, { useState } from "react";
import "./Users.css"
import { useSelector } from "react-redux";
import { userData } from "./userSlice";
import { UserProfile } from "./userProfile/userProfile";
import { ListAllUsers } from "./ListAllUsers/ListAllUsers";
export const Users = () => {

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;
    const token = dataRedux?.credentials?.token;

    return (
        <div className="usersStyle">
            {
                role === 1
                    ? (
                        <ListAllUsers />
                    )
                    : (
                        <div>No tienes permisos</div>
                    )
            }
        </div>
    );
}
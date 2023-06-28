import React from "react";
import "./UsersExceptAdmin.css"
import { ListAllUsersExceptAdmin } from "../Users/ListAllUsersExceptAdmin/ListAllUsersExceptAdmin";

export const UsersExceptAdmin = () => {
    return (
        <div className="patientsStyle">
                <ListAllUsersExceptAdmin />
        </div>
    );
}
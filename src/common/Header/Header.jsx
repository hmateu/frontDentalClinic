import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
export const Header = () => {
    return (
        <div className="headerStyle">
            <div className="left">
                LOGO
            </div>
            <div className="right">
                <Navbar />
            </div>
        </div>
    );
}
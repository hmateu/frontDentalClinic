import React from "react";
import "./Header.css";
import banner from "../../img/banner.png";
import Navbar from "../Navbar/Navbar";
export const Header = () => {
    return (
        <div className="headerStyle">
            <div className="left">
                <img src={banner} />
            </div>
            <div className="right">
                <Navbar />
            </div>
        </div>
    );
}
import React from "react";
import "./Header.css";
import banner from "../../img/banner.png";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="headerStyle">
            <div className="left">
                <img src={banner} onClick={()=>{navigate("/")}}/>
            </div>
            <div className="right">
                <Navbar />
            </div>
        </div>
    );
}
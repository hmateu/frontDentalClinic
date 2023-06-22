import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cross from "../../img/cross.svg";
import "./Navbar.css"
const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        // console.log(isMobileMenuOpen)
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                {/* <div className="logo">Logo</div> */}

                {/* Menú hamburguesa */}
                <div
                    className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Barra de navegación */}
            </nav>
            <div className={`nav-menu ${isMobileMenuOpen ? 'mobile' : ''}`}>
                <div className="header">
                    <span onClick={toggleMobileMenu}>
                    <img src={cross} className="crossMenu"/>
                    </span>
                </div>
                <ul>
                    <li onClick={() => { toggleMobileMenu(); navigate("/"); }}>INICIO</li>
                    <li onClick={() => { toggleMobileMenu(); navigate("/login") }}>LOGIN</li>
                    <li onClick={() => { toggleMobileMenu(); navigate("/register") }}>REGISTRO</li>
                    <li onClick={() => { toggleMobileMenu(); navigate("/treatments") }}>SERVICIOS</li>
                    <li onClick={() => { toggleMobileMenu(); navigate("/appointments") }}>CITAS</li>
                </ul>
            </div>

        </>
    );
}
export default Navbar;
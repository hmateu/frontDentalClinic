import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile' : 'hidden'}`}>
                <li onClick={()=>navigate("/")}>INICIO</li>
                <li onClick={()=>navigate("/login")}>LOGIN</li>
                <li onClick={()=>navigate("/register")}>REGISTRO</li>
                <li onClick={()=>navigate("/treatments")}>SERVICIOS</li>
                <li onClick={()=>navigate("/appointments")}>CITAS</li>
            </ul>
        </>
    );
}
export default Navbar;
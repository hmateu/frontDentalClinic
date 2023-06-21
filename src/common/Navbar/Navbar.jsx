import React, { useState } from "react";
import "./Navbar.css"
const Navbar = () => {
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
                <li><a href="/">Inicio</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </>
    );
}
export default Navbar;
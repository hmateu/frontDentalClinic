import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cross from "../../img/cross.svg";
import "./Navbar.css"
import { logout, userData } from "../../pages/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataRedux = useSelector(userData);
    const role = dataRedux.data.role;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        // console.log(isMobileMenuOpen)
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navbar">

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
                        <img src={cross} className="crossMenu" />
                    </span>
                </div>
                <ul>
                    <div className="menuSection">
                        <li onClick={() => { toggleMobileMenu(); navigate("/"); }}>INICIO</li>
                        <li onClick={() => { toggleMobileMenu(); navigate("/services") }}>SERVICIOS</li>
                    {/* </div>
                    <div className="menuSection"> */}
                        {
                            !dataRedux?.credentials?.token
                                ? (
                                    <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/login") }}>LOGIN</li>
                                )
                                : (
                                    <>
                                        <li onClick={() => { toggleMobileMenu(); navigate("/appointments") }}>CITAS</li>
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); dispatch(logout()); navigate("/login") }}>LOGOUT</li>
                                        {
                                            role === 1
                                                ? (
                                                    <li onClick={() => { toggleMobileMenu(); navigate("/users"); }}>USUARIOS</li>
                                                )
                                                : (<></>)
                                        }
                                    </>
                                )
                        }
                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/register") }}>REGISTRO</li>
                    </div>
                </ul>
            </div>

        </>
    );
}
export default Navbar;
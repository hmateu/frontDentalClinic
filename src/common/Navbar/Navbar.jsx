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
    const token = dataRedux?.credentials?.token;

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
                        <li onClick={() => { toggleMobileMenu(); navigate("/about") }}>SOBRE NOSOTROS</li>
                        {token && (
                            <li onClick={() => { toggleMobileMenu(); navigate("/users-profile") }}>MI PERFIL</li>
                        )}
                        {
                            !dataRedux?.credentials?.token
                                ? (
                                    <>
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/login") }}>LOGIN</li>
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/register") }}>REGISTRO</li>
                                    </>
                                )
                                : (
                                    <>{
                                        // admin
                                        role === 1
                                            ? (
                                                <>
                                                    <li onClick={() => { toggleMobileMenu(); navigate("/users"); }}>USUARIOS</li>
                                                    <li onClick={() => { toggleMobileMenu(); navigate("/appointments"); }}>CITAS</li>
                                                </>
                                            )
                                            : (
                                                // Dentista
                                                role === 2
                                                    ? (
                                                        <>
                                                            <li onClick={() => { toggleMobileMenu(); navigate("/"); }}>MI AGENDA</li>
                                                            <li onClick={() => { toggleMobileMenu(); navigate("/patients"); }}>PACIENTES</li>
                                                        </>
                                                    )
                                                    : (
                                                        // Administrativo
                                                        role === 3
                                                            ? (
                                                                <>
                                                                    <li onClick={() => { toggleMobileMenu(); navigate("/calendar"); }}>CALENDARIO</li>
                                                                    <li onClick={() => { toggleMobileMenu(); navigate("/patients"); }}>PACIENTES</li>
                                                                </> 
                                                            )
                                                            : (
                                                                <>
                                                                    <li onClick={() => { toggleMobileMenu(); navigate("/appointments"); }}>MIS CITAS</li>
                                                                </>
                                                            )
                                                    )
                                            )
                                    }<li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); dispatch(logout()); navigate("/login") }}>LOGOUT</li></>
                                )
                        }
                    </div>
                </ul>
                {/* <ul>
                    <div className="menuSection">
                        <li onClick={() => { toggleMobileMenu(); navigate("/"); }}>INICIO</li>
                        <li onClick={() => { toggleMobileMenu(); navigate("/services") }}>SERVICIOS</li>
                        <li onClick={() => { toggleMobileMenu(); navigate("/") }}>SOBRE NOSOTROS</li>
                        {
                            !dataRedux?.credentials?.token
                                ? (
                                    <>
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/login") }}>LOGIN</li>
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); navigate("/register") }}>REGISTRO</li>
                                    </>
                                )
                                : (
                                    <>
                                        {
                                            role === 1
                                                ? (
                                                    <>
                                                        <li onClick={() => { toggleMobileMenu(); navigate("/users"); }}>USUARIOS</li>
                                                        <li onClick={() => { toggleMobileMenu(); navigate("/"); }}>CITAS</li>
                                                    </>
                                                )
                                                : (<></>)
                                        }
                                        
                                        <li className="loginRegisterBtn" onClick={() => { toggleMobileMenu(); dispatch(logout()); navigate("/login") }}>LOGOUT</li>
                                    </>
                                )
                        }
                    </div>
                </ul> */}
            </div>

        </>
    );
}
export default Navbar;
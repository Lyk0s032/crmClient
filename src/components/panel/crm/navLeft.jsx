import React from "react";
import { AiOutlineWindows } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdCalendarMonth, MdOutlineLibraryBooks, MdOutlineMailOutline, MdOutlinePeopleAlt } from "react-icons/md";
import { useNavigate, useNavigation } from "react-router-dom";

export default function NavLeftCrm(){
    const navigate = useNavigate();
    return (
        <div className="navLeftCRM">
            <div className="containerNavCRM">
                <div className="evolutionHeader">
                    <h1>Evolution</h1>
                </div>
                <div className="navList">
                    <div className="containerNav">
                        <nav>
                            <div className="title">
                                <strong>Plan</strong>
                            </div>
                            <ul>
                                <li onClick={() => {
                                    navigate('/e/b/')
                                }}>
                                    <div>
                                        <AiOutlineWindows className="icon" />
                                        <span>Inicio</span>
                                    </div>
                                </li>
                                <li onClick={() => {
                                    navigate('clients/')
                                }}>
                                    <div>
                                        <MdOutlinePeopleAlt className="icon" />
                                        <span>Clientes</span>
                                    </div>
                                </li>
                                <li onClick={() => {
                                    navigate('email/')
                                }}>
                                    <div>
                                        <MdOutlineMailOutline className="icon" />
                                        <span>Bandeja de mensajes</span>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                        <nav>
                            <div className="title">
                                <strong>Equipo</strong>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <BsPeople className="icon" />
                                        <span>Miembros</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <MdOutlineLibraryBooks className="icon" />
                                        <span>Tareas</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <MdCalendarMonth className="icon" />
                                        <span>Calendario</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <div className="title">
                                <strong>Recursos</strong>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <span>Contactos</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Lista de precios</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Vinculos</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
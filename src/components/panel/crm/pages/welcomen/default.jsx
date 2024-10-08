import React from 'react';
import { BsChevronLeft, BsChevronRight, BsEye, BsGraphUp, BsPlus, BsSend } from 'react-icons/bs';
import { MdChevronRight, MdFileDownloadDone, MdOutlineAutoGraph, MdOutlineFileDownload, MdOutlineHelpOutline, MdOutlinePeopleAlt } from 'react-icons/md';

export default function DefaultWelcomen(){
    return (
        <div className='containerWelcomen'>
            <div className='defaultContainer'>
                <div className='animationContainer'>
                    <div className='animations'>
                        <div className='animation'>
                            <div className='headerAnimation'>
                                <div className='op One'>
                                    <button className='one'>
                                        <MdOutlineHelpOutline className='icon'/>
                                    </button>
                                    <span>Ayuda</span>
                                </div>
                                <div className='op Two'>
                                    <button className='two'>
                                        <BsEye className='icon'/>
                                    </button>
                                    <span>Ver</span>
                                </div>
                                <div className='op Three'>
                                    <button className='three'>
                                        <BsPlus className='icon'/>
                                    </button>
                                    <span>Nuevo</span>
                                </div>
                                <div className='op Two'>
                                    <button className='two'>
                                        <MdOutlineAutoGraph className='icon'/>
                                    </button>
                                    <span>Analisis</span>
                                </div>
                                <div className='op One'>
                                    <button className='one'>
                                        <MdOutlineFileDownload className='icon'/>
                                    </button>
                                    <span>Descargar</span>
                                </div>
                            </div>
                            <div className='draw'>
                                <div className='img'>
                                    <img src="https://i.pinimg.com/originals/98/59/12/98591272861e66a02eecf5dae0450c73.gif" alt="" />
                                </div>
                                <button>
                                    <span>Visitar panel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='bottomNavAnimation'>
                        <div className='navAnimationContainer'>
                            <button className='left'>
                                <span>Left</span>
                            </button>
                            <button>
                                <span>Derecha</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='top'>
                    <div className='containerTop'>
                        <div className='text'>
                            <h1>Bienvenido, <strong>Kevin</strong></h1>
                            <h3>Tu centro de control comercial esta listo</h3>
                        </div>
                        <div className='img'>
                            <h1>Imagen</h1>
                        </div>
                    </div>
                </div>

                <div className='boxOptions'>
                    <div className='containersOptionsBox'>
                        <div className='box'>
                            <div className='containerBox'>
                                <div className='header'>
                                    <h3>Clientes</h3>
                                </div>
                                <div className='data'>
                                    <MdOutlinePeopleAlt className="icon" />
                                    <h1>32</h1>
                                </div>
                                <div className='text'>
                                    <span>Toda tu actividad comercial monitorizada</span>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='containerBox'>
                                <div className='header'>
                                    <h3>
                                        Tareas pendientes
                                    </h3>
                                </div>
                                <div className='data'>
                                    <MdOutlinePeopleAlt className="icon" />
                                    <h1>32</h1>
                                </div>
                                <div className='text'>
                                    <span>Toda tu actividad comercial monitorizada</span>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='containerBox'>
                                <div className='header'>
                                    Mi equipo
                                </div>
                                <div className='data'>
                                    <MdOutlinePeopleAlt className="icon" />
                                    <h1>32</h1>
                                </div>
                                <div className='text'>
                                    <span>Toda tu actividad comercial monitorizada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='containerRight'>
                    <div className="slideBox">
                        <div className='box'>
                            <BsSend className='icon' />
                            <h1>Invitar miembro</h1>
                            <h3>Envia solicitud a un amigo para colaborar en este proyecto.</h3>
                            <button>
                                <span>¡Vamos!</span>
                                <MdChevronRight className='icon' />
                            </button>
                        </div>
                        <div className='move'>
                            <button>
                                <BsChevronLeft className='icon' />
                            </button>
                            <button>
                                <BsChevronRight className='icon' />
                            </button>
                        </div>
                    </div>

                    <div className='newClient'>
                        <div className='containerNewClient'>
                            <div className='header'>
                                <h1>Nuevo cliente</h1>
                                <span>Agrega tu nuevo cliente al espacio comercial.</span>
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Nombre del cliente' />
                                <button>
                                    <span>
                                        Continuar
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
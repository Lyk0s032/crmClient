import React from 'react';
import { AiOutlineWindows } from 'react-icons/ai';
import { MdOutlineSettings } from 'react-icons/md';

export default function Projects(){
    return (
        <div className="projects">
            <div className='projectsContainer'>
                <div className='navTop'>
                    <nav>
                        <ul>
                            <li>
                                <div>
                                    <span>Contactos</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Actividades</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Calendario</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Mensajes</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='searchDiv'>
                    <div className='input'>
                        <input type="text" placeholder='Buscar proyecto' />
                    </div>
                </div>

                <div className='divDividerLarger'>
                    <div className='divDividerContainer'>
                        <div className="containerLefts">
                            <div className='projectsLists'>
                                <div className='listsContainer'>
                                    <div className='title'>
                                        <h3>Tus proyectos</h3>
                                    </div>
                                    <div className='lists'>
                                        <div className='item'>
                                            <div className='info'>
                                                <div className='icon'>
                                                    <h3>Nasur</h3>
                                                </div> 

                                            </div>
                                            <div className='desc'>
                                                <div className='members'>
                                                    <h3>Asesor</h3>
                                                </div>
                                                <div className='notifications'>
                                                    <button>
                                                        <span>3</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='navConfig'>
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <button>
                                                                <MdOutlineSettings className='icon' />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='boxOptions'>
                            <div className='containerBoxOptions'>
                                <div className='topBox'>
                                    <div className='divideText'>
                                        <AiOutlineWindows className="icon"/>
                                        <span>Comienza a configurar tu nuevo proyecto para tener tu sistema comercial al día.</span>
                                    </div>
                                    <button>
                                        <span>Crear proyecto</span>
                                    </button> 
                                </div>

                                <div className='questions'>
                                    <div className='containerQuestions'>
                                        <div className='title'>
                                            <h3>Algunas preguntas</h3>
                                        </div>
                                        <div className="listQuestions">
                                            <button>
                                                <span>¿CRM?</span>
                                            </button>
                                            <button>
                                                <span>Contactos</span>
                                            </button>
                                            <button>
                                                <span>Calendario</span>
                                            </button>
                                            <button>
                                                <span>¿Cuantos proyectos puedo tener?</span>
                                            </button>
                                            <button>
                                                <span>Mensajes</span>
                                            </button>
                                            <button>
                                                <span>¿que puedo hacer?</span>
                                            </button>
                                            <button>
                                                <span>¿Ingles?</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
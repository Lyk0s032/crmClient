import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function NavLeft(){
    const [params, setParams] = useSearchParams();

    return (
        <div className='leftNav'>
            <div className='containerNav'>
                <div className="topLogo">
                    <h3>Evolution</h3>
                </div>
                <div className='containerOptions'>
                    <div className='scrollNav'>
                        <nav>
                            <div className='title'>
                                <strong>
                                    General
                                </strong>
                            </div>
                            <ul>
                                <li className={!params.get('d') || params.get('d') == 'welcomen' ? 'active' : null}
                                onClick={() => {
                                    params.set('d', 'welcomen');
                                    setParams(params);
                                }}>
                                    <div>
                                        <span>Inicio</span>
                                    </div>
                                </li>
                                <li className={params.get('d') == 'projects' ? 'active' : null}
                                onClick={() => {
                                    params.set('d', 'projects');
                                    setParams(params);
                                }}>
                                    <div>
                                        <span>Mis proyectos</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Mis objetivos</span>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                        <nav>
                            <div className='title'>
                                <strong>Contactos</strong>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <span>Mis contactos</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Calendario</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Bandeja de mensajes</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <div className='title'>
                                <strong>
                                    Especifico
                                </strong>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <span>Ajustes generales</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Seguridad y privacidad</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Configuraciones</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='bottom-nav'>
                    <nav>
                        <ul>
                            <li>
                                <span>Privacidad</span>
                            </li>
                            <li>
                                <span>Ayuda</span>
                            </li>
                            <li>
                                <span>Idioma</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>      
    )
}
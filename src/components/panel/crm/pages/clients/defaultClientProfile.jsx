import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ListsProjects from './listProyects';
import Multimedia from './multimedia';
import { BsPlus } from 'react-icons/bs';
import NewProject from './proyect/newProject';

export default function DefaultClient(props){
    const client = props.client;
    const user = props.user;
    const [params, setParams] = useSearchParams();

    return (
        <div className="clientProfile">
            {
                params.get('w') == 'newClient' ?
                    <NewProject user={user} client={client} />
                : null
            }
            <div className='containerProfile'>
                <div className='PrincipalContainerProfile'>
                    <div className="topNavigationClient">
                        <div className="containerTopNav">
                            <div className='boxClient'>
                                <img src={client.photo} alt="" />
                            </div>
                            <div className='res'>
                                <h3>{client.name}</h3>
                                <span>{client.sector}</span>
                            </div>
                        </div>
                    </div>
                    <div className='pseudoTop'>
                        <div className='containerPseudoTop'>
                            <nav>
                                <ul>
                                    <li className={params.get('w') == 'projects' || !params.get('w') ? 'Active' : null}
                                    onClick={() => {
                                        params.set('w', 'projects');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>Proyectos</span>
                                        </div>
                                    </li>

                                    {/* <li  className={params.get('w') == 'media' ? 'Active' : null} onClick={() => {
                                        params.set('w', 'media');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>
                                                Multimedia
                                            </span>
                                        </div>
                                    </li> */}
                                    <li>
                                        <div>
                                            <span>
                                                Sobre {client.name}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                            <div className='newProject'>
                                <button onClick={() => {
                                    params.set('w', 'newClient');
                                    setParams(params);
                                }}>
                                    <BsPlus className='icon' />
                                    <span>Nuevo proyecto</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='resNavigation'>
                        <div className="containerResNavigation">
                            {
                                params.get('w') == 'projects' || !params.get('w') ?
                                    <ListsProjects client={client} />
                                : params.get('w') == 'media' ?
                                    <Multimedia />
                                :
                                    <h1>Otra cosa</h1>
                            }
                        </div>
                    </div>
                </div>
                <div className='rightDivContainer'>
                    <div className='containerR'>
                        <div className='newProject'>
                            <div className='header'>
                                <h1>¿Empezar un nuevo proyecto con Apple?</h1>
                                <span>No dejes pasar ningún tipo de registro comercial</span>
                            </div>
                            <div className='action'>
                                <button>
                                    <span>Crear proyecto</span>
                                </button>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='containerBox'>
                                <div className="headerBox">
                                    <h3>
                                        ¿Desea añadir nueva información a este cliente?
                                    </h3>
                                    
                                </div>
                                <div className='desc'>
                                    <span>
                                        Añade recursos que puedan mejor la relación y experiencia con Apple
                                    </span>
                                </div>
                                <div className='action'>
                                    <button>
                                        <span>
                                            Añadir recursos
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='containerBox'>
                                <div className="headerBox">
                                    <h3>
                                        ¿Necesitas ayuda?
                                    </h3>
                                    
                                </div>
                                <div className='desc'>
                                    <span>
                                        Accede a nuestra guia de uso, y resuelve todas tus dudas
                                    </span>
                                </div>
                                <div className='action'>
                                    <button>
                                        <span>
                                            Ver guia de uso
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
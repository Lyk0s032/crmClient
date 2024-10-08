import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ListClients(props){
    const user = props.user;
    const clients = props.data;
    const loading = useSelector(store => store.loadingClients);
    const navigate = useNavigate();
    return (
        loading ?
        <div> <h1>Cargando...</h1></div>
        :
        <div className="principalClient">
                       {/* <div className='pseudoTopNav'>
                            <div className="containerPseudo">
                                <div className="howMany">
                                    <h3>43 clientes</h3>
                                </div>
                                <div className='filters'>
                                    <div className='buttonsFilters'>
                                        <button className='Active'>
                                            <MdOutlineBorderAll className='icon' />
                                        </button>
                                        <button>
                                            <MdReorder className='icon' />
                                        </button>
                                    </div>
                                    <div className='search'>
                                        
                                        <button>
                                            <BsSearch className='icon' />
                                        </button>
                                        <input type="text" />

                                    </div>
                                </div>
                                <div className="orderBy">
                                    <div className='containerOrder'>
                                        <strong>Ordenar por:</strong>
                                        <div className="orderOptions">
                                            <button>
                                                <span>Nombre</span>
                                            </button>
                                            <button>
                                                <span>Actividades</span>
                                            </button>
                                            <button>
                                                <span>Proyectos</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */} 

                        <div className='titleHowManyClients'>
                            {console.log(clients)}
                            <div className='containerTitle'>
                                {
                                    user.businesses[0].person_business.range == 'lider' ?
                                        <h1>Clientes {clients.from == 'General' ? 'totales' : `de ${clients.clientes && clients.clientes.length? clients.clientes[0].user.name : clients.asesor.name}`}</h1>
                                    :
                                        <h1>Tus clientes {user.name}</h1>

                                }
                                <h3>{clients.clientes && clients.clientes.length ? clients.clientes.length : 0} Clientes</h3>
                            </div>
                        </div>
                        <div className="clientsLists">
                            <div className="listsContainer">
                                {
                                    clients.clientes && clients.clientes.length ?
                                        clients.clientes.map((res, i) => {
                                            return (
                                                <div className="client" key={i+1} onClick={() => navigate(`${res.id}`)}>
                                                    <div className='header'>
                                                        <div className="img">
                                                            <img src="https://imgr1.auto-motor-und-sport.de/Logo-Apple-169FullWidth-e24bab35-900791.jpg" alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h3>{res.name}</h3>
                                                            <span>{res.sector}</span>
                                                        </div>
                                                    </div>
                                                    <div className='dataClient'>
                                                        <div className='res'>
                                                            
                                                            <div className="title">
                                                                <span>Proyectos</span>
                                                            </div>
                                                            <div className="respuesta">
                                                                <strong>{res.projects.length}</strong>
                                                            </div>
                                                        </div>
                                                        <div className='res'>
                                                            
                                                            <div className="title">
                                                                <span>Proy. Activos</span>
                                                            </div>
                                                            <div className="respuesta">
                                                                <strong>{res.state == 'active' ? 'Habilitado' : 'Suspendido'}</strong>
                                                            </div>
                                                        </div>
                                                        <div className='res'>
                                                            
                                                            <div className="title">
                                                                <span>De: </span>
                                                            </div>
                                                            <div className="respuesta">
                                                                <strong>{res.user.name}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    : <span>No hay clientes</span>
                                }

                            </div>
                        </div>
        </div>
    )
}
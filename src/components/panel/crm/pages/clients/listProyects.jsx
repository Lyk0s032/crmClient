import React from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function ListsProjects(props){
    const client = props.client;
    const navigate = useNavigate();
    return (
        <div className='listProjects'>
            <div className='containerLists'>
                {/* <div className='search'>
                    <div className='containerSearch'>
                    <div className='orderBy'>

                        <select name="" id="">
                            <option value="">Finalizados</option>
                            <option value="">En proceso</option>
                            <option value="">Suspendidos</option>
                            <option value="">Cancelados</option>


                        </select>
                        </div>
                        <div className='searchInput'>
                            <div className='filters'>
                                <button>
                                    <span>Filtro</span>
                                </button>
                                <button>
                                    <span>Filtro</span>
                                </button>
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='Buscar aquí...' />
                            </div>
                        </div>
                        
                    </div>
                </div> */}
                <div className='lista'>
                    <div className='containerLista'>
                        {
                            client.projects && client.projects.length ?
                            client.projects.map((item, i) => {
                                return (
                                    <div className='project' onClick={() => {
                                        navigate(`project/${item.id}`)
                                    }}>
                                        <div className='header'>
                                            <div className='data'>
            
                                                <div className='res'>
                                                    <h3>{item.nameProject}</h3>
                                                    <span>{item.objetivo[0]}</span>
                                                </div>
                                            </div>
                                            <div className='state'>
                                                <button>
                                                    <MdOutlineCheckCircleOutline className='icon' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='desc'>
                                            <div className='optionDesc'>
                                                <strong>Empezó</strong>
                                                <span>{item.createdAt.split('T')[0]}</span>
                                            </div>
                                            <div className='optionDesc'>
                                                <strong>Estado</strong>
                                                <span>{item.state == 'active' ? 'En proceso' : item.state == 'stop' ? 'Suspendido' : 'Cancelado'}</span>
                                            </div>
                                            <span>
                                                {
                                                    item.objetivo.map((r,a) => {
                                                        return (
                                                            <span key={a+1}>{r}, </span>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </div>
                                        <div className='bottomActions'>
                                            <div className='containerActions'>
                                                <button className='go'>
                                                    <span>Visitar</span>
                                                </button>
                                                <button className='details'>
                                                    <span>Detalles</span>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div> 
                                )
                            })
                            :
                            <span>No hay proyecto por el momento</span>
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
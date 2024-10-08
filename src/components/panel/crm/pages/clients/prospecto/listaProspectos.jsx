import React from 'react';
import { BsMessenger, BsWhatsapp, BsWindow } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';


export default function ListaProspectos(props){
    const user = props.user;
    const data = props.data;
    const [params, setParams] = useSearchParams();

    return (
        <table className="styled-table">
        <thead>
            <tr>
                <th>Titulo</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Asesor</th>
                <th>Fecha</th>
                <th>Razón</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {   
                data.prospectos && data.prospectos.length ?
                !params.get('filter') ?

                    data.prospectos.map((item, i) => {
                        return (
                            item.state == 'new' ?
                            <tr className='t' key={i+1}>
                                <td>Contacto por fomulario</td>
                                <td>
                                    <div>
                                        <BsWhatsapp className='icon WhatsApp' />
                                        <span className='WhatsApp'>WhatsApp</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className='see'>
                                            Sin abrir
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='asesor'>
                                        <img src="" alt="" />
                                        <h3>{item.user.name}</h3>
                                    </div>
                                </td>
                                <td>26 de Sep 2024</td>
                                <td>Modulares Costa</td>
                                <td>
                                    <button onClick={() => {
                                        params.set('w', `${item.id}`);
                                        setParams(params);
                                    }}>
                                        <span>Ver</span>
                                    </button>
                                </td>
                            </tr>
                            :null
                        )
                    })
                : params.get('filter') == 'contactados' ?
                    data.prospectos.map((item, i) => {
                        return (
                            item.state == 'try' ?
                            <tr className='t'>
                                <td>Contacto por fomulario</td>
                                <td>
                                    <div>
                                        <BsWhatsapp className='icon WhatsApp' />
                                        <span className='WhatsApp'>WhatsApp</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className='see'>
                                            Con intentos
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='asesor'>
                                        <img src="" alt="" />
                                        <h3>{item.user.name}</h3>
                                    </div>
                                </td>
                                <td>26 de Sep 2024</td>
                                <td>Modulares Costa</td>
                                <td>
                                    <button onClick={() => {
                                        params.set('w', `${item.id}`);
                                        setParams(params);
                                    }}>
                                        <span>Ver</span>
                                    </button>
                                </td>
                            </tr>
                            :null
                        )
                    })
                :params.get('filter') == 'later' ?
                    data.prospectos.map((item, i) => {
                        return (
                            item.state == 'later' ?
                            <tr className='t'>
                                <td>Contacto por fomulario</td>
                                <td>
                                    <div>
                                        <BsWhatsapp className='icon WhatsApp' />
                                        <span className='WhatsApp'>WhatsApp</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className='see'>
                                            Para después
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='asesor'>
                                        <img src="" alt="" />
                                        <h3>{item.user.name}</h3>
                                    </div>
                                </td>
                                <td>{item.createdAt.split('T')[0]}</td>
                                <td>Modulares Costa</td>
                                <td>
                                    <button onClick={() => {
                                        params.set('w', `${item.id}`);
                                        setParams(params);
                                    }}>
                                        <span>Ver</span>
                                    </button>
                                </td>
                            </tr>
                            :null
                        )
                    })
                :params.get('filter') == 'lost' ?
                    data.prospectos.map((item, i) => {
                        return (
                            item.state == 'lost' ?
                            <tr className='t'>
                                <td>Contacto por fomulario</td>
                                <td>
                                    <div>
                                        <BsWhatsapp className='icon WhatsApp' />
                                        <span className='WhatsApp'>WhatsApp</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className='see'>
                                            Perdidos
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='asesor'>
                                        <img src="" alt="" />
                                        <h3>{item.user.name}</h3>
                                    </div>
                                </td>
                                <td>{item.createdAt.split('T')[0]}</td>
                                <td>Modulares Costa</td>
                                <td>
                                    <button onClick={() => {
                                        params.set('w', `${item.id}`);
                                        setParams(params);
                                    }}>
                                        <span>Ver</span>
                                    </button>
                                </td>
                            </tr>
                            :null
                        )
                    })
                :null
                :
                <div>
                    <span>No hay prospectos</span>
                </div>
            }   

        </tbody>
    </table>
    )
}
import {React, useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsMessenger, BsSearch, BsWhatsapp, BsWindow } from 'react-icons/bs';
import { MdOutlineBorderAll, MdOutlineFilterList, MdReorder, MdSearch } from 'react-icons/md';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ModalProspecto from './prospecto/modalProspecto';
import Prospectos from './prospectos';
import ListClients from './clients/listClients';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/action';
import ChangeAsesor from './changeAsesor';
import BigShow from './prospecto/bigShow';
import NewClient from './modalNewClient';

export default function ComponentClients(props){
    const user = props.user;
    const business = props.business;
    const navigate = useNavigate();
    const [data, setData] = useState('clients');
 
    const [params, setParams] = useSearchParams();
    const clients = useSelector(store => store.clients);
    const loadingClients = useSelector(store => store.loadingClients);
    // PROSPECTOS
    const prospectos = useSelector(store => store.prospects);
    const loadingProspectos = useSelector(store => store.loadingProspect);
    const dispatch = useDispatch();

    const [from, setFrom] = useState('general');

    const date = new Date();
    const month = date.getMonth()+1;

    useEffect(() => {
        if(user.businesses[0].person_business.range == 'admin' || user.businesses[0].person_business.range == 'lider'){

            dispatch(actions.AxioGetAllProspectAndClients(true, business.id, user.id, month, 'false'))
            // dispatch(actions.AxiosGetClients(true, business.id, user.id, 'false'))
            // dispatch(actions.AxiosGetProspects(business.id, user.id, date.getMonth('')+1, true, 'false'))
            
            setFrom('general');
            console.log('LIDER O ADMIN');
        }else{
            console.log('Lider o quiza asesor')
            dispatch(actions.AxioGetAllProspectAndClients(true, business.id, user.id, month, 'true'))
        }
    }, [])
    return (
        <div className='componentClients'>
            {console.log(user)}
            {
                params.get('w') ?
                    <ModalProspecto user={user} />
                : params.get('change', 'asesor') ?
                    <ChangeAsesor business={business} />
                :params.get('move') == 'show' ?
                    <BigShow />
                : params.get('move') == 'newClient' ?
                    <NewClient business={business} user={user} clients={clients} prospects={prospectos} />
                :null
            }
            <div className='containerClients'>
                <div className='topSelectorClients'>
                    <div className='containerSelector'>
                        <nav>
                            <ul>
                                <li className={data == 'clients' ? 'Active' : null}
                                onClick={() => setData('clients')}>
                                    <div>
                                        <span>Clientes</span>
                                    </div>
                                </li>
                                <li className={data == 'prospect' ? 'Active' : null} 
                                onClick={() => setData('prospect')}>
                                    <div>
                                        <span>Prospectos de cliente</span>
                                    </div>
                                </li>
                                
                            </ul>
                        </nav>
                        <div className='btn'>
                            <button onClick={() =>  {
                                params.set('move', 'newClient');
                                setParams(params);
                            }}>
                                <span>Nuevo Cliente</span>
                            </button>
                        </div>
                        <div className='asesor'>

                            {
                                user.businesses[0].person_business.range == 'lider' ?
                                    from == 'general' ?
                                    <div className='asesorDiv' onClick={() => {
                                        params.set('change', 'asesor');
                                        setParams(params);
                                    }}>
                                        <div className='wallpaper'>
                                            <img src="" alt="" />
                                        </div> 
                                        <div className='txt'>
                                            <h3>Todos</h3>
                                            <span>Informe general</span>
                                        </div>
                                    </div>
                                    : 
                                    <div className='asesorDiv'>
                                        <div className='wallpaper'>
                                            <img src="" alt="" />
                                        </div> 
                                        <div className='txt'>
                                            <h3>Elena Sanchez</h3>
                                            <span>Asesora</span>
                                        </div>
                                    </div>
                                :
                                <div className='asesorDiv'>
                                    <div className='wallpaper'>
                                        <img src="" alt="" />
                                    </div> 
                                    <div className='txt'>
                                        <h3>{user.name}</h3>
                                        <span>Asesor/a</span>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                {console.log(prospectos)}
                <div className="resFilterClients">
                    {
                        data == 'clients' ?
                            loadingClients || !clients ?
                                <div className="loading">
                                    <h3>Cargando...</h3>
                                </div>
                            : <ListClients data={clients} user={user} />
                    :
                            loadingProspectos || !prospectos ?  
                                <div className="loading">
                                    <h3>Cargando...</h3>
                                </div>
                            :<Prospectos business={business} data={prospectos} loading={loadingProspectos} user={user}/>
                            
                        }
                </div>
            </div>
        </div>
    )
}
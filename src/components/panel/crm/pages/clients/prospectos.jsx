import React, { useEffect } from 'react';
import { BsMessenger, BsWhatsapp, BsWindow } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as action from '../../../../store/actions/action';
import ListaProspectos from './prospecto/listaProspectos';
import BigShow from './prospecto/bigShow';
export default function Prospectos(props){

    const [params, setParams] = useSearchParams();
    const data = props.data;
    const loading = props.loading;
    const user = props.user;
    const dispatch = useDispatch();
    const business = props.business;
    const date = new Date() ;
    const month = date.getMonth() + 1;

    const changeMonth = async (val) => {
        const sendPetition =  dispatch(action.AxiosGetProspects(business.id, user.id, !params.get('time') ? month : params.get('time'), false, val));
        return sendPetition;
    }

    const showFilter = (filter) => {
        document.querySelector('#table').scrollIntoView({
            behavior: 'smooth'
        });
        if(!filter){
            params.delete('filter');
            setParams(params);
        }else{
            params.set('filter', filter)
            setParams(params);

        }
    }
    return (
        <div className="prospect">
                <div className="containerProspect">
                <div className='boxProspectData'>
                    <div className='headerBigSeccion'>
                        <div className='left'>
                            {
                                user.businesses[0].person_business.range == 'lider' ?
                                    <h1>Resultados {!data.asesor ? 'Generales' : `de ${data.asesor.name}`}</h1>
                                :
                                    <h1>Tus resultados {user.name}</h1>                             
                            }
                            <span>Todo el mes de {params.get('time') == '10' || !params.get('time') ? 'Octubre' : params.get('time') == '09' ? 'Septiembre' : params.get('time') == '08' ? 'Agosto' : null}</span>
                        </div>
                        <div className='right'>
                            <select name="" id="" onChange={(e) => {
                                params.set('time', e.target.value);
                                setParams(params);
                                user.businesses[0].person_business.range == 'admin' || user.businesses[0].person_business.range == 'lider' ?
                                    changeMonth(!data.asesor ? 'false' : 'true')
                                :
                                    changeMonth('true');
                            }}>
                                <option value="10">Octubre</option>
                                {/* <option value="09">Septiembre</option>
                                <option value="08">Agosto</option> */}


                            </select>
                        </div>
                    </div>
                    <div className='containerBoxs'>
                        <div className='box One' onClick={() => {
                            showFilter()
                        }}>
                            <div className='containerBox'>
                                <div className='topBox'>
                                    <BsWindow className='icon' />
                                    <span>Sin revisar</span>
                                </div>
                                <div className='boxContainer'>
                                    <h3>
                                        {
                                            data.new ? data.new : 0
                                        }
                                    </h3>
                                    <span>Prospectos de clientes</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Two' onClick={() => showFilter('contactados')}>
                            <div className='containerBox'>
                                <div className='topBox'>
                                    <BsWindow className='icon' />
                                    <span>Intentos</span>
                                </div>
                                <div className='boxContainer'>
                                    <h3>
                                        {
                                            data.try ? data.try : 0
                                        }
                                    </h3>
                                    <span>Prospectos sin contestar</span>
                                </div>
                            </div>
                        </div>
                        <div className='box Three' onClick={() => {
                            showFilter('lost')
                        }}>
                            <div className='containerBox'>
                                <div className='topBox'>
                                    <BsWindow className='icon' />
                                    <span>Perdidos</span>
                                </div>
                                <div className='boxContainer'>
                                    <h3>
                                        {
                                            data.lost ? data.lost : 0
                                        }
                                    </h3>
                                    <span>Prospectos de clientes</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='dividePanel'>
                    <div className='leftAnalytics'>
                        <div className='divide'>
                            <div className='moreAnalytics'>
                                <div className='Header'>
                                    <h3>Analisís profundo</h3>
                                    <span>Visualiza con más detalle</span>
                                </div>
                                <div className='containerFast'>

                                    <div className='buttons'>
                                        <button onClick={() => {
                                            // params.set('move', 'show');
                                            // setParams(params);
                                        }}>
                                            <span>Visualizar gráfica</span>
                                        </button>
                                        <button>
                                            <span>Opciones de descarga</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rightFastOptions'>
                        <div className='boxMessage'>
                            <div className='topIcon'>
                                <BsMessenger className='icon' />
                                <div className='messag'>
                                    <h3>Enviarle un mensaje a Andrés</h3>
                                    <span>Enviale información a tus usuarios.</span>
                                    <button>
                                        <span>Redactar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='headerTopNavigation' id="header">
                    <div className='containerNav'>
                        <div className='group'>
                            <nav>
                                <ul>
                                    <li className={!params.get('filter') ? 'Active' : null} onClick={() => {
                                        params.delete('filter');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>Sin revisar</span>
                                        </div>
                                    </li>
                                    <li  className={params.get('filter') == 'contactados' ? 'Active' : null} onClick={() => {
                                        params.set('filter', 'contactados');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>Contactados</span>
                                        </div>
                                    </li>
                                    <li className={params.get('filter') == 'lost' ? 'Active' : null} onClick={() => {
                                        params.set('filter', 'lost');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>Perdidos</span>
                                        </div>
                                    </li>
                                    <li className={params.get('filter') == 'later' ? 'Active' : null} onClick={() => {
                                        params.set('filter', 'later');
                                        setParams(params);
                                    }}>
                                        <div>
                                            <span>Para después</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='filterSelect'>
                            <div className='containerFilterSelect'>
                                {/* <div className='type'>
                                    <select name="" id="">
                                        <option value="">WhatsApp</option>
                                        <option value="">Sitio web</option>
                                        <option value="">Físico</option>
                                    </select>
                                </div>
                                <div className='razon'>
                                    <select name="" id="">
                                        <option value="">Modulares</option>
                                        <option value="">Metalicas</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="register">
                    <div className="containerRegister">
                        {
                            loading || !data ?
                                <h1>Cargando...</h1>
                            :
                            <div className="table-container" id="table">
                                    <ListaProspectos data={data} user={user} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
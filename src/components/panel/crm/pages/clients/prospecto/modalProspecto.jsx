import React, { useEffect, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { MdCancel, MdCheckCircle, MdClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import Prospecto from './prospecto';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../store/actions/action';
import axios from 'axios';

export default function ModalProspecto(props){
    const user = props.user;
    const [params, setParams] = useSearchParams();
    const [state, setState] = useState('question');
    const [question, setQuestion] = useState({
        step: 1,
        valor: true
    });
    const [action, setAction] = useState('ask');
    const prospect = useSelector(store => store.prospect);
    const loadingProspect = useSelector(store => store.loadingProspect);

    const [comunication, setComunication] = useState(false);
    const dispatch = useDispatch();

    // FUNCION PARA REGISTRAR QUE NO HUBO CONTACTO CON EL PROSPECTO
    const dontCall = async () => {
        axios.put(`/business/prospect/calls/${user.businesses[0].id}/${params.get('w')}`)
        .then((res) => {
            dispatch(actions.AxiosGetProspect(user.businesses[0].id, params.get('w'), false))
        })
        .catch(err => {
            console.log(err);
            return null;
        }) 
    }
    // FUNCIÓN PARA ENVIAR PROSPECTO A OTRA BANDEJA.
    const badProspect = async (response) => {
        axios.put(`/business/prospect/bandeja/${params.get('w')}/${response}`)
        .then(res => res.data)
        .then(data => {
            dispatch(actions.AxiosGetProspect(user.businesses[0].id, params.get('w'), false))
            console.log(data)
        })
        .catch(err => {
            console.log(err);
            return null
        });
    }
    useEffect(() => {
        dispatch(actions.AxiosGetProspect(user.businesses[0].id, params.get('w'), true))
    }, [params.get('w')])
    return (
        <div className='modalProspect'>
         

            {
                loadingProspect || !prospect ?
                    <div className='containerModal'>
                        <div className='loading'>
                            <h1>Cargando</h1>
                        </div> 
                    </div>
                :
                <div className='containerModal'>
                    <div className='headerBotton'>
                        <button onClick={() => {
                            params.delete('w');
                            setParams(params);
                        }}>
                            <MdClose className='icon' />
                        </button>
                    </div>
                    <div className='modalContainer'>
                        <div className='divideLeft'>
                            <div className='containerLeft'>
                                <div className='topProspect'>
                                    <div className='containerInfo'>
                                        <div className='dataInfo'>
                                            <span>Nombre</span>
                                            <h3>{prospect.name}</h3>
                                        </div>
                                        <div className='dataInfo'>
                                            <span>Teléfono</span>
                                            <h3>{prospect.phone}</h3>
                                        </div>
                                        <div className='dataInfo'>
                                            <span>Interesado en</span>
                                            <h3>Modulares</h3>
                                        </div>
                                        <div className='dataInfo'>
                                            <span>Forma de contacto</span>
                                            <h3>{prospect.razon}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='asesor'>
                                    <span>A cargo de</span>
                                    <h3>{prospect.user.name} {prospect.user.lastName}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='divRight'>
                            {
                                comunication ?
                                    <Prospecto prospect={prospect} user={user} />
                                :
                                prospect.state == 'try' && prospect.contact >= 3  ?
                                    
                                        action == 'later' ?
                                        <div className='containerRight'>
                                            <div className="bigText Question">
                                                <h1>¡Perfecto! Hemos enviado este prospecto de cliente a la bandeja "Para después"</h1>
                                                <h3>Intentalo de nuevo en la próximas semanas</h3>
                                            </div>
                                        </div>
                                        : action == 'lost' ?
                                        <div className='containerRight'>
                                            <div className="bigText Question">
                                                <h1>¡Ánimo! Ya vendrán otros clientes</h1>
                                                <h3>Hemos enviado este prospecto para a la bandeja de perdidos</h3>
                                            </div>
                                        </div>
                                        : 
                                        <div className='containerRight'>
                                            <div className="bigText Question">
                                                <h1>¡Vaya! Es una lastima. No has logrado contactar este prospecto de cliente</h1>
                                                <h3>¿Qué deseas hacer con este prospecto de cliente?</h3>
                                            </div>
                                            <div className='action'>
                                                <button onClick={() => {
                                                    badProspect('lost');
                                                    setAction('lost')
                                                }}>
                                                    <span>
                                                        Enviar a perdidos
                                                    </span>
                                                </button>
                                                <button onClick={() => {
                                                    badProspect('later');
                                                    setAction('later')
                                                }}>
                                                    <span>Enviar para después</span>
                                                </button>
                                            </div>
                                        </div>
                                    
                                :
                                <div className='containerRight'>
                                    <div className='bigText'>
                                        <h1>¿Has logrado comunicarte con este prospecto?</h1>
                                        <h3>Cuéntanos tu trayectoría con este posible cliente</h3>
                                    </div>
                                    <div className='progressOption'>
                                        <div className='barTry'>
                                            <div className={prospect.contact == 1 && prospect.state == 'called' ? 'button True' : prospect.contact ==  0 ? 'button Question' : prospect.contact >= 1  ? 'button Cancel' : 'button'}>
                                                    <div className='data'>
                                                        <button>
                                                            {   
                                                                prospect.contact == 1 && prospect.state == 'called' ?
                                                                    <MdCheckCircle className="icon" />
                                                                :
                                                                prospect.contact == 0 ?
                                                                    <BsFillQuestionCircleFill className='icon' />
                                                                : prospect.contact >= 1 ?
                                                                    <MdCancel className='icon' />
                                                                :
                                                                    <BsFillQuestionCircleFill className='icon' />

                                                            }
                                                        </button>
                                                        <span>Primer intento</span>
                                                    </div>

                                                    {
                                                    prospect.contact == 0 && prospect.state == 'new' ? 
                                                        <div className="OptionForResponse">
                                                            <button className='cancel' onClick={() => {
                                                                dontCall();
                                                            }}>
                                                                <span>No contesto</span>
                                                            </button><br />
                                                            <button className='ok' onClick={() => {
                                                                setComunication(true);
                                                            }}>
                                                                <span>Formulario</span>
                                                            </button>
                                                        </div>
                                                    :null
                                                    }
                                            </div>
                                            <div className='line'></div>
                                            <div className={prospect.contact == 2 && prospect.state == 'called' ? 'button True' : prospect.contact ==  1 && prospect.state == 'try' ? 'button Question' : prospect.contact >= 2  ? 'button Cancel' : 'button'}>
                                                <div className='data'>
                                                    <button>
                                                            {   
                                                                prospect.contact == 2 && prospect.state == 'called' ?
                                                                    <MdCheckCircle className="icon" />
                                                                :
                                                                prospect.contact == 1 ?
                                                                    <BsFillQuestionCircleFill className='icon' />
                                                                : prospect.contact >= 2 ?
                                                                    <MdCancel className='icon' />
                                                                :
                                                                    <BsFillQuestionCircleFill className='icon' />
                                                                    
                                                            }
                                                        </button>
                                                    <span>Segundo Intento</span>
                                                </div>
                                                    {
                                                        prospect.contact == 1 && prospect.state == 'try' ? 
                                                            <div className="OptionForResponse">
                                                            <button className='cancel' onClick={() => {
                                                                dontCall();
                                                            }}>
                                                                <span>No contesto</span>
                                                            </button><br />
                                                            <button className='ok' onClick={() => {
                                                                setComunication(true);
                                                            }}>
                                                                <span>Formulario</span>
                                                            </button>
                                                        </div>
                                                        :null
                                                    }
                                            </div>
                                            <div className='line'></div>
                                            <div className={prospect.contact == 3 && prospect.state == 'called' ? 'button True' : prospect.contact ==  2  && prospect.state == 'try' ? 'button Question' : prospect.contact >= 3  ? 'button Cancel' : 'button'}>
                                                <div className='data'>
                                                    <button>
                                                        {   
                                                            prospect.contact == 3 && prospect.state == 'called' ?
                                                                <MdCheckCircle className="icon" />
                                                            :
                                                            prospect.contact == 2 ?
                                                                <BsFillQuestionCircleFill className='icon' />
                                                            : prospect.contact >= 3 ?
                                                                <MdCancel className='icon' />
                                                            :
                                                                <BsFillQuestionCircleFill className='icon' />
                                                        }
                                                    </button>
                                                    <span>Tercer Intento</span>
                                                </div>
                                                    {
                                                    prospect.contact == 2 && prospect.state == 'try' ? 
                                                            <div className="OptionForResponse">
                                                            <button className='cancel' onClick={() => {
                                                                dontCall();
                                                            }}>
                                                                <span>No contesto</span>
                                                            </button><br />
                                                            <button className='ok' onClick={() => {
                                                                setState('true');
                                                            }}>
                                                                <span>Formulario</span>
                                                            </button>
                                                        </div>
                                                        :null
                                                    }
                                            </div>
                                        </div>
                                        {
                                            prospect.contact >= 3 && prospect.state != 'called' ?
                                            <div className='smallMessage'>
                                                <span>La comunicación con este prospecto no fue posible. Ha sido enviado a la bandeja de {prospect.state == 'lost' ? '"Perdidos."' : prospect.state == 'later' ? '"Para después"' : null}</span>
                                            </div>
                                            : prospect.state == 'called' ?
                                            <div className='smallMessage'>
                                                <span>La comunicación fue un éxito. Encuentra este prospecto en tu panel de clientes</span>
                                            </div>
                                            :null
                                        }
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}
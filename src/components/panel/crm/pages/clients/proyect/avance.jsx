import React, { useState } from 'react';
import { MdAddBusiness, MdDocumentScanner, MdOutlineAddBusiness, MdOutlinePhoneInTalk } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../../store/actions/action';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Avance(props){
    const project = props.project;
    const user = props.user
    const [state, setState] = useState('choose');
    const [choose, setChoose] = useState(null);
    const dispatch = useDispatch();
    const location = useParams();
    const [params, setParams] = useSearchParams();
    const avanceFirst = (type, state) => {
        
        if(type == 'avance'){
            setState(choose);
        }else{
            setState(state)
        }
        // let scrollSlide = document.querySelector('slide');
        document.querySelector("#"+state).scrollIntoView({
            behavior: 'smooth'
        })
    }
    const [tag, setTag] = useState({
        uno: false,
        dos:false,
        tres: false,
        cuatro: false,
        cinco: false,
        seis: false
    });


    const [tsk, setTsk] = useState([])
    
    const sendNote = async () => {
        let body = {
            type: state,
            titleNote: state == 'call' ? 'Realizó una llamada' : 'Realizó una visita',
            note: tsk.join(', '),
            projectId: project.id,
            asesorId: user.id
        }

        const a = await axios.post('/client/app/post/note', body)
        .then((res) => {
            console.log(res)
            console.log('Si paso')
            dispatch(actions.AxiosGetProject(false, location.nameProject));
            params.delete('m');
            setParams(params);
            return res
        })
        .catch(err  => {
            console.log(err);
            console.log('error');
            console.log(body)
        });
        return a;
    }
    return (
        <div className='avance'>
            <div className="containerAvance">
                <div className='slide' id="slider">
                    <div className='horizontal'>
                        <div className='firstOptions' id="choose">
                        <div className='headerFirst'>
                            <h1>¡Selecciona el tipo de avance que se hizo con el cliente!</h1>
                            <span>Sigamos una linea detallada de tu interacción con los clientes</span>
                        </div>
                        <div className='firstContainer'>
                            <div className={choose == 'call' ? 'box Active' : 'box'} 
                            onClick={() => {
                                setChoose(choose == 'call' ? null : 'call')
                            }}>
                                <div className='iconBox'>
                                    <MdOutlinePhoneInTalk className='icon' />
                                </div>
                                <div className='desc'>
                                    <h3>Llamada</h3>
                                    <span>
                                        Documenta el avance que tuviste con tu cliente, a través de la llamada teléfonica. <br /><br />
                                        Recuerda que puedes ser tan especifico como lo desees
                                    </span>
                                </div>
                            </div>
                            <div className={choose == 'go' ? 'box Active' : 'box'} 
                            onClick={() => {
                                setChoose(choose == 'go' ? null : 'go')
                            }}>
                                <div className='iconBox'>
                                    <MdOutlineAddBusiness className='icon' />
                                </div>
                                <div className='desc'>
                                    <h3>Visita</h3>
                                    <span>
                                        ¿Fuiste a ver a tu cliente o tu cliente te visitó? Cuentanos que paso. <br /><br />Capitalicemos esta oportunidad
                                        para ofrecer mejores experiencias en el futuro.
                                    </span>
                                </div>
                            </div>
                            <div className={choose == 'cotization' ? 'box Active' : 'box'} 
                            onClick={() => {
                                setChoose(choose == 'cotization' ? null : 'cotization')
                            }} >
                                <div className='iconBox'>
                                    <MdDocumentScanner className='icon' />
                                </div>
                                <div className='desc'>
                                    <h3>Cotización</h3>
                                    <span>
                                        ¡Tu cliente necesita una cotización! comencemos a construirla juntos. <br /><br />
                                        Recuerda que puedes adjuntar una lista de precios
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        <div className='twoOption' id="twoOption">
                            {
                                state == 'call' ?
                                <div className='containerTwoOption'>
                                    <div className='topTitle'>
                                        <h1>
                                            ¡Cuentanos! ¿Cómo fue la experiencia en esa llamada?
                                        </h1>
                                        <h3>
                                            Registra la escencia de la conversación
                                        </h3>
                                    </div>
                                    <div className='callRegister'>
                                        <div className="rightDivs">
                                            <div className="formRight"> 
                                                <div className="inputDivs">
                                                    <label htmlFor="">Detalles de la llamada</label><br />
                                                    <div className='tags'>
                                                        <button className={tsk.find(tg => tg == 'mobiliario') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'mobiliario')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'mobiliario');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'mobiliario'])
                                                                }
                                                               
                                                            }}>
                                                            <span>Interesado en Mobiliario</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'estanteria') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'estanteria')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'estanteria');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'estanteria'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Interesado en Estantería</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'consultoria') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'consultoria')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'consultoria');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'consultoria'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Interesado en consultoria</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'dudas') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'dudas')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'dudas');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'dudas'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Tiene dudas</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'proyectos') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'proyectos')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'proyectos');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'proyectos'])
                                                                }
                                                               
                                                        }} >
                                                            <span>Interesado en Proyectos</span>
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : state == 'go' ?
                                <div className='containerTwoOption'>
                                    <div className='topTitle'>
                                        <h1>
                                            ¡Wow, Hubo una visita! Cuentanos los detalles
                                        </h1>
                                        <h3>
                                            La experiencia física es increible
                                        </h3>
                                    </div>
                                    <div className='callRegister'> 
                                        <div className="rightDivs">
                                        <div className="formRight"> 
                                                <div className="inputDivs">
                                                    <label htmlFor="">Detalles de la llamada</label><br />
                                                    <div className='tags'>
                                                        <button className={tsk.find(tg => tg == 'mobiliario') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'mobiliario')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'mobiliario');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'mobiliario'])
                                                                }
                                                               
                                                            }}>
                                                            <span>Interesado en Mobiliario</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'estanteria') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'estanteria')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'estanteria');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'estanteria'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Interesado en Estantería</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'consultoria') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'consultoria')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'consultoria');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'consultoria'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Interesado en consultoria</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'dudas') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'dudas')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'dudas');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'dudas'])
                                                                }
                                                               
                                                        }}>
                                                            <span>Tiene dudas</span>
                                                        </button>
                                                        <button className={tsk.find(tg => tg == 'proyectos') ? 'tag Active' : 'tag'} onClick={() => {
                                                                if(tsk.find(tg => tg == 'proyectos')){
                                                                    console.log('Remover')
                                                                    let nuevo = tsk.filter(elemento => elemento != 'proyectos');
                                                                    setTsk(nuevo)
                                                                }else{
                                                                    setTsk(tsk => [...tsk, 'proyectos'])
                                                                }
                                                               
                                                        }} >
                                                            <span>Interesado en Proyectos</span>
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='containerTwoOption'>
                                    <div className='topTitle'>
                                        <h1>
                                            ¡Hola!, pronto habilitaremos la sección de cotizaciones 
                                            dentro de tu espacio comercial. 
                                        </h1>
                                        <h3>
                                            Estamos trabajando arduamente para hacer de tu actividad comercial
                                            un espacio entretenido, agíl y libre de ruido visual.
                                        </h3>
                                    </div>

                                </div>
                            }
                            
                        </div>


                    }
                   
                    
                    </div>
                </div>
                <div className='buttonDiv'>
                    {
                        state == 'choose' ?
                            !choose ?
                            <button className='off'>
                                <span>Continuar</span>
                            </button>
                            :
                            <button onClick={() => avanceFirst('avance', 'twoOption')}>
                                <span>Continuar</span>
                            </button> 
                        : 
                            <div className='others'>
                                <button className='left' onClick={() => avanceFirst('volver', 'choose')}>
                                    <span>Volver</span>
                                </button>
                                {
                                    choose == 'call' || choose == 'go' ?
                                    <button onClick={() => {
                                        console.log('Save Note');
                                        sendNote();
                                    }}>
                                        <span>Guardar</span>
                                    </button>
                                    :null
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
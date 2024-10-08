import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowLeft, BsCheck, BsCheckCircle, BsPlus } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { MdAutoGraph, MdCalendarMonth, MdClose, MdOutlineCalendarToday, MdOutlineDocumentScanner, MdOutlineFileDownload } from 'react-icons/md';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ModalProject from './modal';
import SeeNote from './seeNote';
import AnalisisProject from './analisis';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../store/actions/action';

export default function Proyect(props){
    const user = props.user;
    const client = props.client;
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);

    const openRightNote = () => {
        document.querySelector('#moveRight').classList.toggle('sliderBoxRightActive');
    }
    const location = useParams();
    const project = useSelector(store => store.project);
    const loadingProject = useSelector(store => store.loadingProject);

    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(actions.AxiosGetProject(true, location.nameProject))
    }, [])
    return (
        loadingProject || !project ?
            <div className='loading'>
                <h1>Loading</h1>
            </div>
        :
            <div className="proyect">
                {
                    params.get('m') == 'avance' || params.get('m') == 'note' ?
                        <ModalProject project={project} client={client} user={user}/>
                    : params.get('m') == 'analytics' ?
                        <AnalisisProject project={project} />
                    : null
                }
                <div className='containerProyect'>
                    <div className='back'>
                        <div className='leftTop'>
                            <button onClick={() => navigate(`/e/b/clients/${client.id}`)}>
                                <BsArrowLeft className='icon' />
                            </button>
                            <div className='nameProject'>
                                <h3>{project.nameProject} - {project.objetivo[0]}</h3>
                            </div>

                        </div>
                        <div className='clientName'>
                            <div className='logo'>
                                <img src="https://imgr1.auto-motor-und-sport.de/Logo-Apple-169FullWidth-e24bab35-900791.jpg" alt="" />
                            </div>
                            <div className='res'>
                                <h2>{client.name}</h2>
                                <span>{project.objetivo[0]}</span>
                            </div>
                        </div>
                    </div>

                    <div className='divideTop'>
                        <div className='containerDivide'>
                            <div className='leftContainer'>
                                <div className='containerLeft'>
                                    <div className='navTopFast'>
                                        <nav>
                                            <ul>
                                                <li onClick={() => {
                                                    params.set('m', 'note');
                                                    setParams(params);
                                                }}>
                                                    <div>
                                                        <BsPlus className='icon' />
                                                        <span>
                                                            Nueva nota
                                                        </span>
                                                    </div>
                                                </li>
                                                <li onClick={() => {
                                                    params.set('m', 'note');
                                                    setParams(params);
                                                }}>
                                                    <div>
                                                        <MdCalendarMonth className='icon' />
                                                        <span>Programar cita</span>
                                                    </div>
                                                </li>
                                                <li className='button' onClick={() => {
                                                    params.set('m', 'avance');
                                                    setParams(params);
                                                }}>
                                                    <div>
                                                        <BsPlus className='icon' />
                                                        <span>Nuevo avance</span>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='Objetivos'>
                                        <div className='title'>
                                            <h3>Enfoque del proyecto</h3>

                                            <button>
                                                <AiOutlineClose className='icon' />
                                            </button>
                                        </div>
                                        <div className='res'>
                                            <span>
                                                {project.objetivo.map((item, i) => {
                                                    return (
                                                        <span key={i+1}>{item}, </span>
                                                    )
                                                })}
                                            </span><br />

                                        </div>
                                    </div>
                                    <div className='progress'>
                                        <div className='containerProgress'>
                                            <div className='header'>
                                                <h3>
                                                    Linea de progreso
                                                </h3>
                                            </div>
                                            <div className='resultados'>
                                                <div className='containerResultados'>
                                                    
                                                    <div className='principalItem'>

                                                    {
                                                        project.progresses && project.progresses.length ?
                                                            project.progresses.map((res, i) => {
                                                                return (
                                                                    <div className='item'>
                                                                        <div className='progressAndNotes'>
                                                                                {
                                                                                    res.type == 'note' ?
                                                                                    <div className='move' onClick={() => {
                                                                                        dispatch(actions.showNote(res))
                                                                                        openRightNote()
                                                                                    }}>
                                                                                        <div className='leftI'>
                                                                                            <BsCheckCircle className='icon' />
                                                                                        </div>
                                                                                        <div className='moveDesc'>
                                                                                            <h3>Se registro una nota</h3>
                                                                                            <span>{res.createdAt.split('T')[0]}</span><br />
                                                                                            <span>
                                                                                                {res.note.substring(0, 50)+ '...'} 
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    :null
                                                                                }
                                                                                

                                                                            </div>
                                                                            {
                                                                                res.type == 'call' || res.type == 'go' ?
                                                                                <div className='flex'>
                                                                                    <div className='leftIcon'>
                                                                                        <button>
                                                                                            <BsCheck className='icon' />
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className='accion'>
                                                                                        <div className='asesor'>
                                                                                            <div className='nomenclatura'>
                                                                                                <h3>{res.user.name.split('')[0]}</h3>
                                                                                            </div>
                                                                                            <div className='name'>
                                                                                                <h3>{res.user.name}</h3>
                                                                                            </div>
                                                                                        </div> 
                                                                                        <div className='type'>
                                                                                            <h3>Realizó {res.type == 'call' ? 'una Llamada' : 'una visita'} a {client.name}</h3>
                                                                                        </div>
                                                                                        <div className='time'>
                                                                                            <span>{res.createdAt.split('T')[0]}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                : null
                                                                            }
                                                                            
                                                                            
                                                                    </div>
                                                                )
                                                            })
                                                        : <h1> No hay avances registrados.</h1>
                                                    }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rightContainer'>
                                <div className='navigationFast'>
                                    <nav>
                                        <div className='boxText'>
                                            <h3>Opciones rápidas</h3>
                                        </div>
                                        <ul>
                                            <li onClick={() => {
                                                params.set('m', 'analytics');
                                                setParams(params);
                                            }}>
                                                <div className='div'>
                                                    <div className='leftDivIcon'>
                                                        <MdAutoGraph className='icon' />
                                                        <span>Resumen del momento</span>
                                                    </div>
                                                    <FaArrowRight className='icon' />
                                                </div>
                                            </li>
                                            <li>
                                                <div className='div'>
                                                    <div className='leftDivIcon'>
                                                        <MdOutlineCalendarToday className='icon' />
                                                        <span>Actividades</span>
                                                    </div>
                                                    <FaArrowRight className='icon' />
                                                </div>
                                            </li>
                                            <li>
                                                <div className='div'>
                                                    <div className='leftDivIcon'>
                                                        <MdOutlineDocumentScanner className='icon' />
                                                        <span>Nueva Cotización</span>
                                                    </div>
                                                    <FaArrowRight className='icon' />
                                                </div>
                                            </li>
                                            <li>
                                                <div className='div'>
                                                    <div className='leftDivIcon'>
                                                        <MdOutlineFileDownload className='icon' />
                                                        <span>Descargar ficha del proyecto</span>
                                                    </div>
                                                    <FaArrowRight className='icon' />
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* Delizante a la derecha... */}
                <div className='slideBoxRight' id="moveRight">
                        <div className='containerRightMove'>
                            <div className='header'>
                                <button onClick={() => {
                                     dispatch(actions.showNote(null))
                                     openRightNote()
                                 }} >
                                    <MdClose className='icon' />
                                </button>
                            </div>
                            <div className='everithing'>
                                <SeeNote note={note}/>
                            </div>
                        </div>
                    </div>
            </div>
        
    
    )
}
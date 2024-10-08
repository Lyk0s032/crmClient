import axios from 'axios';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function NewProject(props){
    const client = props.client;
    const user = props.user;

    const [parte, setParte] = useState('name');
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: null,
        description: null,
        asesor: null
    });

    const [tsk, setTsk] = useState([])

    const createProject = async () => {
        let body = {
            nameProject: form.name,
            tags: tsk,
            businessId: user.businesses[0].id,
            clientId: client.id
        }
        let send = await axios.post('/client/app/post/newProject', body)
        .then((res) => {
            console.log(res);
            return res.data
        })
        .then((data) => {
            console.log(data);
            return data
        })
        .catch(err => {
            console.log(err);
            console.log(body)
            return null;
        });
        send ? navigate(`project/${send.id}`) : null
    }
    return (
        <div className="newProjectNodal">
            <div className='containerNewProject'>
                <div className='headerClose'>
                    <button onClick={() => {
                        params.delete('w');
                        setParams(params);
                    }}>
                        <MdClose className="icon" />
                    </button>
                </div>       
                <div className='containerForm'>
                    {
                        parte == 'name' ?
                        <div className='divContainerForm'>
                            <div className='inputDivs'>
                                <div className='messageInput'>
                                    <h1>Nombre y áreas de interés</h1>
                                    <span>Intenta ser lo más breve y especfíco posible</span>
                                </div>
                                <div className='inputContainer'>
                                    <label htmlFor="">Nombre del proyecto</label>
                                    <input type="text" placeholder='Nueva oficina' onChange={(e) => setForm({...form, name:e.target.value})} />
                                </div>
                            </div> 
                        </div>
                        : parte == 'description' ?
                        <div className="containerDescriptionProject">
                            <div className='boxContainer'>
                                <div className='messageInput'>
                                    <h1>Describe el proyecto</h1>
                                    <span>Describe brevemente la necesidad del cliente. Por favor, intenta ser lo más breve y especifíco posible.</span>
                                </div>
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
                        : <h1>nada</h1>
                    }
                    
                </div>  
                <div className='btnDiv'>
                    {
                        parte == 'name' ?
                        <div className='containerBtn'>
                            <button onClick={() => setParte('description')}>
                                <span>Avanzar</span>
                            </button>
                        </div>
                        : parte == 'description' ?
                        <div className='containerBtn'>
                            <button onClick={() => setParte('name')} className='back'>
                                <span>Atras</span>
                            </button>
                            <button onClick={() => createProject() }>
                                <span>Avanzar</span>
                            </button>
                        </div>
                        :null
                    }
                </div>
            </div>
        </div>
    )
}
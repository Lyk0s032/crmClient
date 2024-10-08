import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import * as actions from '../../../../../store/actions/action';
import { useDispatch } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function NoteProject(props){
    const user = props.user;
    const client = props.client;
    const project = props.project;
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const date = new Date();
    const [form, setForm] = useState({
        title: null,
        describe: null
    });
    const [mistake, setMistake] = useState(null);
    const location = useParams();
    // Enviamos POST
    const sendNote = async () => {
        let body = {
            type: 'note',
            titleNote: form.title,
            note: form.describe,
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
        });
        return a;
    }
    return (
        <div className="note">
            <div className='containerNote'>
                <div className='divide'>
                    <div className='left'>
                        <div className='containerLeft'>
                            <div className='form'>
                                <div className='txtBig'>
                                    <div className='icono'>
                                        <AiOutlineLink className='icon' />
                                    </div>
                                    <div className='textBig'>
                                        <h1>Adjunta tu nueva nota de progreso</h1>
                                        <span>Puedes adjuntar cuantas notas desees, y ser tan especifico como te lo puedas imaginar.</span>
                                    </div>
                                </div>
                                <div className='boxInputs'>
                                    <div className='inputDiv'>
                                        <label htmlFor="">Nombre de la nota</label><br />
                                        <input type="text" placeholder='Escribe aquí...' onChange={(e) => {
                                            setMistake(null)
                                            setForm({
                                                ...form,
                                                title:e.target.value
                                            });
                                        }} />
                                    </div>

                                    <div className='inputDiv'>
                                        <label htmlFor="">Escribe tu nota</label><br />
                                        <textarea name="" id="" onChange={(e) => {
                                            setMistake(null)
                                            setForm({
                                                ...form,
                                                describe:e.target.value
                                            });
                                        }} ></textarea>
                                    </div>
                                </div>

                                <div className='setImg'>
                                    {mistake ? mistake : null}
                                </div>
                            </div>
                            <div className='btn'>
                                <button onClick={() => {
                                    form.title && form.describe ?
                                        sendNote()
                                    : setMistake('No puedes dejar campos vacios');
                                }}>
                                    <span>Guardar nota</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='created'>
                            <div className='title'>
                                <strong>
                                    Creado por
                                </strong>
                            </div>
                            <div className='img'>
                                <img src="" alt="" />
                                <div>
                                    <h3>{user.name}</h3>
                                    <span>Miembro del equipo</span>
                                </div>
                            </div>
                        </div>

                        <div className='time'>
                            <div className='title'>
                                <strong>Fecha</strong>
                            </div>
                            <div className='inputDate'>
                                <span>{date.getFullYear()} {date.getMonth() + 1} {date.getDay()} </span>
                            </div>
                        </div>

                        <div className='aviso'>
                            <span>
                                Esta nota seguirá la linea de tiempo de este proyecto. Lo que significa que, aparecera
                                dentro de los movimientos después de la llamada de Kevin
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
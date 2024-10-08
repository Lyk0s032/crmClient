import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Prospecto(props){
    const user = props.user;
    const prospect = props.prospect;
    const navigate = useNavigate();
    const [response, setResponse] = useState('question');

    const [form, setForm] = useState({
        step:1,
        nameBusiness: null,
        sector: 'tecnologia',
        nameProspect: null,
        phoneProspect: prospect.user.phone,
        cargo: null,
        photo: null 
    })
    const newClient = async () => {
        let body = {
            nameBusiness: form.nameBusiness,
            nameProspect: form.nameProspect,
            phoneProspect: form.phoneProspect,
            photo: form.photo,
            cargo: form.cargo,
            sector: form.sector,
            asesorId:user.id,
            BId:user.businesses[0].id

        }
        console.log(body)
        const send = await axios.post('/business/clientes/new', body)
        .then(res => {
            console.log(res);
            return res.data
        })
        .catch(err => {
            console.log(err);
            console.log('error aca');
        })

        if(!send){
            console.log('No avanza');
        }else{
            let a = await axios.put(`/business/prospect/called/${prospect.id}`)
            .then((r) => {
                console.log('actualizado');
                navigate(`${send.id}`)
            })
            .catch(e => {
                console.log(e);
                console.log('Error en la consulta');
            })
            return send
        }
        

    }


    return (
        <div className='prospecto'>
            {
                response == 'question' ?
                <div className='form'>
                    <div className='headerTitle'>
                        <h1>¿Que sucedio...? ¿Esta interesado?</h1>
                        <span>Es importante!</span>
                    </div>
                    <div className='options'>
                        <button className='positive' onClick={() => setResponse('true')}>
                            <span>Esta interesado</span>
                        </button>
                        <button className='negative' onClick={() => setResponse('negative')}>
                            <span>No esta interesado</span>
                        </button>
                    </div>
                </div>
                : response == 'true' ?
                <div className='form'>
                    <div className='headerTitle'>
                        <h1>¡Perfecto! Registremos este nuevo cliente</h1>
                        <span>Estamos a un paso de comenzar esta nueva experiencia</span>
                    </div>
                    {
                        form.step == 1 ?
                        <div className='containerInputs'>
                            <div className='inputDiv'>
                                <label htmlFor="">Nombre de la empresa {form.nameBusiness}</label><br />
                                <input type="text" placeholder='Escribe aquí...' onChange={(e) => {
                                    setForm({
                                        ...form,
                                        nameBusiness: e.target.value
                                    })
                                }} />
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor="" defaultValue={'tecnologia'}>Sector {form.sector}</label><br />
                                <select name="" id="" onChange={(e) => {
                                    setForm({
                                        ...form,
                                        sector: e.target.value
                                    })
                                }}>
                                    <option value="tecnologia">Tecnología</option>
                                    <option value="manufactura">Manufactura</option>
                                    <option value="desarrollo software">Desarrollo de Software</option>
                                    <option value="servicios generales">Servicios generales</option>

                                </select>
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor="">Nombre del encargado</label><br />
                                <input type="text" placeholder='Escribe aquí...' onChange={(e) => {
                                    setForm({
                                        ...form,
                                        nameProspect: e.target.value
                                    })
                                }} defaultValue={prospect.user.name} />
                            </div>
                            <div className='inputDiv'>
                                <label htmlFor="">Número de contacto</label><br />
                                <input type="text" placeholder='Escribe aquí...' onChange={(e) => {
                                    setForm({
                                        ...form,
                                        phoneProspect: e.target.value
                                    })
                                }} defaultValue={prospect.user.phone}/>
                            </div>
                        </div>
                        : null
                        }




                        {
                            form.step == 2 ?
                            <div className='containerInputs'>
                                <div className='inputDiv'>
                                    <label htmlFor="">Cargo del asesor</label><br />
                                    <input type="text" placeholder='Escribe aquí...' onChange={(e) => {
                                        setForm({
                                            ...form,
                                            cargo: e.target.value
                                        })
                                    }} />
                                </div>
                            </div>
                            : null
                            }





                            {
                            form.step == 3 ?
                            <div className='containerInputs'>
                                <div className='inputDiv'>
                                    <label htmlFor="">Logo de la empresa * Opcional</label><br />
                                    <input type="text" placeholder='Pega la url de la imagen' onChange={(e) => {
                                        setForm({
                                            ...form,
                                            photo: e.target.value
                                        })
                                    }} />
                                </div>
                            </div>
                            :null
                        }
                    
                    <div className="containerButton">
                        { form.step > 1 ? 
                            <button onClick={() => setForm({...form, step:form.step-1})}>
                                <span>Volver</span>
                            </button>
                        :null}
                        <button onClick={() => {
                                    form.step == 1 ?
                                        setForm({
                                            ...form,
                                            step: 2
                                        })
                                    :form.step == 2 ?
                                    setForm({
                                        ...form,
                                        step: 3
                                    })
                                    :
                                        newClient()
                                }
                            }
                            >
                            <span>{form.step == 1 ? 'Avanzar' : form.step == 2 ? 'Continuar' : 'Guardar'}</span>
                        </button>
                    </div>
                </div>
                : 
                <div className='form'>
                    <div className='headerTitle'>
                        <h1>Podemos intentarlo después, ¿Por qué no esta interesado?</h1>
                        <span>¡Con esta información, trabajaremos en equipo para mejorar en un futuro próximo!</span>
                    </div>
                    <div className='options'>
                        <div className='listTags'>
                            <div className='scrollTags'>
                                <button><span>Se equivocó</span></button>
                                <button><span>No estaba interesado</span></button>
                                <button><span>Otro</span></button>
                            </div>
                        </div>
                        <button className='positive' onClick={() => setResponse('true')}>
                            <span>Finalizar</span>
                        </button>
                    </div>
                </div>
                
            }
            
        </div>
    )
}
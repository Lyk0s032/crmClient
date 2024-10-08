import axios from "axios";
import React, { useEffect, useState } from "react";
import { signIn, auth } from "../js/movimientos";

export default function SignIn(){
    const [form, setForm] = useState('email');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: null,
        messageEmail: null,
        emailAvance: false,
        loadingEmail: false,
        password: null,
        messagePassword: null,
        passwordAvanced: null,
        loadingPassword: false,
        nick:null
    });

    const [mistake, setMistake] = useState(null);


    const validateEmail = () => {
        setData({
            ...data,
            loadingEmail: true
        })
        axios.get(`/user/sign/v/${data.email}`)
        .then((res) => {
            if(res.status == 200){
                setData({
                    ...data,
                    messageEmail:null,
                    emailAvance: true,
                    loadingEmail: false,
                    name: res.data.nick
                });
            }
            return true
        }).catch(err => {
            setData({
                ...data,
                loadingEmail: false,
                messageEmail: 'No existe un usuario vinculado con este número.'
            })
            return null;
        })
    }

    const onSubmit = async () => {
        setLoading(true);
        setData({
            ...data,
            loadingPassword:true
        });
        const sign = await signIn(data)
        .then(async result => {
            setData({
                ...data,
                loadingPassword:false
            })
            console.log(result);
            if(result.status){
                if( result.status == 200){
                    setMistake(null);
                    // const token = await SecureStore.getItemAsync('token');
                    window.localStorage.setItem("loggedPeople", JSON.stringify(result.data.data));
                    // return validateToken()
                    return 'Logueado'
                }


            }else if(result == 404){
                return setMistake('No hemos encontrado este usuario')
            }else if(result == 401){
                return setMistake('Contraseña incorrecta')
            }else{
                return setMistake('Ha ocurrido un contra tiempo, intentalo más tarde.')
            }
        })
        .catch(err => {
            setData({
                ...data,
                loadingPassword:false
            })
            console.log(err);
            return null
        });
        return sign
        
    }

    return (
        <div className="in">
            <div className="containerIn">
                <div className="form">
                    <div className="containerForm">
                        <div className="signH1">
                            <h1>Iniciar sesion</h1>
                        </div>
                        <div className="topForm">
                            {
                                !data.emailAvance ?
                                    <div className="divInput">
                                        <label htmlFor="email">Correo o telefono</label><br />
                                        <input type="text" id="email" placeholder="Escribe aqui..." 
                                        defaultValue={data.email} 
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }}  />
                                        <br /><br />
                                        <span className="mistake">{data.messageEmail}</span>
                                    </div>
                                :
                                null
                            }
                            {
                                data.emailAvance ?
                                <div className="divInput">
                                    <label htmlFor="pass">ingresa tu Contraseña</label><br />
                                    <input type="password" id="pass" placeholder="Escribe aqui..."
                                    defaultValue={data.password} 
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            messagePassword:null,
                                            password: e.target.value,
                                        })
                                    }}  />
                                    <br /><br />
                                    <span className="mistake">{data.messagePassword}</span>
                                </div>
                                :null
                            }
                            

                            

                            <div className="btn">
                                {
                                    !data.emailAvance ?
                                        <button onClick={() => {
                                            data.loadingEmail ? null
                                            :validateEmail(data.email)
                                        }}>
                                            <span>{data.loadingEmail ? 'Validando...' : 'Siguiente'}</span>
                                        </button>
                                    :
                                    <div>
                                        <button className="back" onClick={() => {
                                            setData({
                                                ...data,
                                                password:null,
                                                messagePassword:null,
                                                emailAvance:false
                                            })
                                        }}>
                                            <span>Regresar</span>
                                        </button>
                                        <button onClick={() => {
                                            {
                                                !data.password ?
                                                setData({
                                                    ...data,
                                                    messagePassword: 'Ingresa una contraseña valida, por favor'
                                                })
                                                :
                                                onSubmit()
                                            }
                                        }}>
                                            <span>{data.loadingPassword ? 'Accediendo...' : 'Acceder'}</span>
                                        </button>
                                    </div>
                                }
                            </div>

                            <div className="message">
                                <span>¿Quieres saber de que se trata?</span>
                            </div>
                        </div>

                        <div className="or">
                            <div className="line"></div>
                            <span> O </span>
                            <div className="line"></div>

                        </div>

                        <div className="bottom">
                            <button>
                                <span>Crear una cuenta</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
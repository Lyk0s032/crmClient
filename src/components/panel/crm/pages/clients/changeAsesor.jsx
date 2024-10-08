import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as actions from '../../../../store/actions/action';

export default function ChangeAsesor(props){
    const [params, setParams] = useSearchParams();
    const business = props.business;
    const dispatch = useDispatch();
    const date = new Date();
    const month = date.getMonth()+1;
    const changeUser = async (user, asesor) => {
        dispatch(actions.AxioGetAllProspectAndClients(true, business.id, user, !params.get('time') ? month : params.get('time'), asesor))
    }
    return (
        <div className='changeAsesor'>
            <div className='containerChange'>
                <div className='header'>
                    <button onClick={() => {
                        params.delete('change');
                        setParams(params);
                    }}><MdClose className='icon' /></button>
                </div>
                <div className='listAsesors'>
                    <div className='containerList'>
                        <div className='asesor' onClick={() => changeUser(2, 'true')}>
                            <div className='containerAsesor' >
                                <div className='img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='data'>
                                    <h3>Bryan Franco</h3>
                                    <span>Asesor</span>
                                </div>
                            </div>
                        </div>
                        <div className='asesor' onClick={() => changeUser(4, 'true')}>
                            <div className='containerAsesor'>
                                <div className='img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='data'>
                                    <h3>Adriana</h3>
                                    <span>Asesor</span>
                                </div>
                            </div>
                        </div>
                        <div className='asesor' onClick={() => changeUser(3, 'true')}>
                            <div className='containerAsesor'>
                                <div className='img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='data'>
                                    <h3>Maicol</h3>
                                    <span>Asesor</span>
                                </div>
                            </div>
                        </div>
                        <div className='asesor' onClick={() => changeUser(1, 'false')}>
                            <div className='containerAsesor'>
                                <div className='img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='data'>
                                    <h3>Todos</h3>
                                    <span>Generales</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
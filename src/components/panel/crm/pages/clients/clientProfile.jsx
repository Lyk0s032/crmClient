import React, { useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import ListsProjects from './listProyects';
import Multimedia from './multimedia';
import DefaultClient from './defaultClientProfile';
import Proyect from './proyect/proyect';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/action';

export default function ClientProfile(props){
    const user = props.user;
    const client = useSelector(store => store.client);
    const loading = useSelector(store => store.gettingClient);
    const dispatch = useDispatch();
    const location = useParams();

    useEffect(() => {
        dispatch(actions.AxiosGetClient(true, location.cl))
    }, [])
    return (
        <div className='cl'>
            {
                loading || !client ?
                    <div>
                        <h1>Cargando...</h1>
                    </div>
                :
                <Routes>
                    <Route path="/*" element={<DefaultClient user={user} client={client} />} />
                    <Route path="/project/:nameProject" element={<Proyect client={client} user={user} />} />
                </Routes>
            }
        </div>
    )
}
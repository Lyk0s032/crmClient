import React, { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import WelcomenCRM from './pages/welcomen';
import NavLeftCrm from './navLeft';
import TopNav from './topNav';
import WelcomenPanel from './pages/welcomen/welcomen';
import PanelClients from './pages/clients/clientsPanel';
import EmailPanel from './pages/email/emailPanel';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/action';

export default function PanelCRM(props){
    const user = props.user;
    const [params, setParams] = useSearchParams();

    const business = useSelector(store => store.business);
    const loadingBuss = useSelector(store => store.loadingBusiness);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.AxiosGetBusiness(true, user.businesses[0].id, user.id))
    }, [])

    return (
        <div className='panelCrm'>
            {console.log(user)}
            {
                loadingBuss || !business ?
                <div className='loading'>
                    <h1>Adecuando tu entorno de trabajo...</h1>
                </div>
                :
                <div className='containerPanel'>
                    <div className='navLeft'>
                        <NavLeftCrm />
                    </div>
                    <div className='containerDataPanel'>
                        <div className='topNav'>
                            <TopNav user={user} />
                        </div>
                        <div className='divPanel'>
                            <div className="containerScroll">
                                <Routes>
                                    <Route path='/*' element={<WelcomenPanel />} />
                                    <Route path='/clients/*' element={<PanelClients user={user} business={business}/>} />
                                    <Route path='/email/*' element={<EmailPanel />} />
                            
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
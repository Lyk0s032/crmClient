import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PanelUser from './user/panelUser';
import PanelCRM from './crm/panelCrm';
import { useSelector } from 'react-redux';

export default function Panel(){
    const user = useSelector(store => store.usuario);
    const business = useSelector(store => store.business);
    const loadingBusiness = useSelector(store => store.loadingBusiness);


    return (
        <div className='panel'>

            <Routes>
                <Route path="/*" element={<PanelUser user={user}/>} />
                <Route path="/b/*" element={<PanelCRM user={user.user}/>} />

            </Routes>
        </div>
    )
}
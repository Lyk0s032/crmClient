import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentClients from './clients';
import ClientProfile from './clientProfile';
import { useSelector } from 'react-redux';

export default function PanelClients(props){
    const user = props.user;
    const business = props.business;

    return (
        <div className='clients'>
            <Routes> 
                <Route path="/*" element={<ComponentClients user={user} business={business} />} />
                <Route path="/:cl/*" element={<ClientProfile user={user}/>} />

            </Routes>
        </div>
    )
}
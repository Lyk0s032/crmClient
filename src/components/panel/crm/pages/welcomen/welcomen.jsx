import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultWelcomen from './default';

export default function WelcomenPanel(){
    return (
        <div className='welcomen'>
            <Routes>
                <Route path="/*" element={<DefaultWelcomen />} />
            </Routes>
        </div>
    )
}
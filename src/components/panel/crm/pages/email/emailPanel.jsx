import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Email from './email';

export default function EmailPanel(){
    return (
        <div className='emailPanel'>
            <Routes>
                <Route path="/*" element={<Email />} />
            </Routes>
        </div>
    )
}
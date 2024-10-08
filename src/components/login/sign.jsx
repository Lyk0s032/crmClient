import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';
import NavHome from '../welcomen/nav';

export default function Sign(){
    return (
        <div className='sign'>
            <NavHome />
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/up' element={<SignUp />} />
            </Routes>
        </div>
    )
}
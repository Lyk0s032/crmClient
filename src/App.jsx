import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sign from './components/login/sign'
import Welcomen from './components/welcomen/welcomen'
import Panel from './components/panel/panel'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './components/store/actions/action';
function App() {
  const user = useSelector(store => store.usuario);
  const loadingUsuario = useSelector(store => store.loadingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const log = JSON.parse(window.localStorage.getItem("loggedPeople"));
    if(log && !user){
        dispatch(actions.AxiosAuthUser(log));
    }else{

    }
}, []);
  return (
    <div className='app'>

      {
        loadingUsuario ?
          <div className='loading'>
            <h1>Cargando...</h1>
          </div>
        :
        <Router>
          <Routes>
            <Route path="/*" element={<Welcomen />} />
            <Route path="/sign/*" element={user ? <Navigate to="/e/b" /> : <Sign />} />
            <Route path="/e/*" element={!user ? <Navigate to="/sign" /> : <Panel />} />
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App

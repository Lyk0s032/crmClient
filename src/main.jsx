import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './components/store/store.js';
import React from 'react';

const server = false;
// const url = 'http://192.168.1.155:3000/';
// const url = 'http://192.168.20.43:3000/';
const url = 'https://crmapi-production-9241.up.railway.app';


axios.defaults.baseURL = !server ? url : 'server';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider> ,
)

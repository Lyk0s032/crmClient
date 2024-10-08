import axios from "axios";
import { useActionData } from "react-router-dom";


export function GET_USER(user){
    return {
        type: 'GET_USER',
        payload: user
    }
}
export function GETTING_USER(){
    return {
        type: 'GETTING_USER',
        payload: true
    }
}
export function AxiosAuthUser(token){
    return function(dispatch){
        dispatch(GETTING_USER());
        axios.get('/app/signIn', {
            headers:{
                'authorization': `Bearer ${token}`
            }
        } )
        .then((res) => {
            return res.data;    
        })
        .then((data) => {
            dispatch(GET_USER(data.user))
        })
        .catch(err => {
            console.log(err);
            console.log('no trae registro');
            window.localStorage.removeItem('loggedPeople');
        })
    }
    
}

// BUSINESS
export function GET_BUSINESS(business){
    return {
        type: 'GET_BUSINESS',
        payload: business
    }
}
export function GETTING_BUSINESS(carga){
    return {
        type: 'GETTING_BUSINESS',
        payload: carga
    }
}
export function AxiosGetBusiness(carga, BId, UId){
    return function(dispatch){
        dispatch(GETTING_BUSINESS(carga))
        axios.get(`/business/app/general/${BId}/${UId}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            dispatch(GETTING_BUSINESS(false));
            return dispatch(GET_BUSINESS(inf));
        })
        .catch(e => {
            dispatch(GETTING_BUSINESS(false));
            if(e.response.status == 404){
                return dispatch(GET_BUSINESS(404))
            }else{
                return dispatch(GET_BUSINESS('request'));
            }
        })
    }
}


// CLIENTES
export function GET_CLIENTS(client){
    return {
        type: 'GET_CLIENTS',
        payload: client
    } 
}

export function GETTING_CLIENTS(carga){
    return {
        type: 'GETTING_CLIENTS',
        payload: carga
    }
}
export function AxiosGetClients(carga, BId, UId, asesor){
    return function(dispatch){
        dispatch(GETTING_CLIENTS(carga))
        axios.get(`/business/app/clients/${BId}/${UId}/${asesor}`)
        .then((info) => info.data)
        .then(inf => {
            dispatch(GETTING_CLIENTS(false));
            return dispatch(GET_CLIENTS(inf));
        })
        .catch(e => {
            dispatch(GETTING_CLIENTS(false));
            if(e.response.status == 404){
                return dispatch(GET_CLIENTS(404))
            }else{
                return dispatch(GET_CLIENTS('request'));
            }
        })
    }
}
// FUNCIÓN PARA OBTENER CLIENTES Y PROSPECTOS - GENERALES
export function AxioGetAllProspectAndClients(carga, BId, UId, month, asesor){
    return function(dispatch){
        dispatch(AxiosGetClients(carga, BId, UId, asesor));
        dispatch(AxiosGetProspects(BId, UId, month, true, asesor ))
        // dispatch(AxiosGetProspects(BId, ))
    }
}
// PROSPECTOS
export function GET_PROSPECTS(data){
    return {
        type: 'GET_PROSPECTS',
        payload: data
    }
}
export function GETTING_PROSPECTS(carga){
    return {
        type: 'GETTING_PROSPECTS',
        payload: carga
    }
}

export function AxiosGetProspects(business,UId, month, carga, asesor){
    return function(dispatch){
        dispatch(GETTING_PROSPECTS(carga));
        axios.get(`/business/app/prospect/${business}/${UId}/${month}/${asesor}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            dispatch(GETTING_PROSPECTS(false));
            return dispatch(GET_PROSPECTS(inf));
        })
        .catch(e => {
            dispatch(GETTING_PROSPECTS(false));
            if(e.response.status == 404){
                return dispatch(GET_PROSPECTS(404))
            }else{
                return dispatch(GET_PROSPECTS('request'));
            }
        })
    }

}

export function GET_PROSPECT(data){
    return {
        type: 'GET_PROSPECT',
        payload: data
    }
}
export function GETTING_PROSPECT(carga){
    return {
        type: 'GETTING_PROSPECT',
        payload: carga
    }
}

export function AxiosGetProspect(business,prospect, carga){
    return function(dispatch){
        dispatch(GETTING_PROSPECT(carga));
        axios.get(`/business/g/prospect/${business}/${prospect}`)
        .then((info) => info.data)
        .then(inf => {
            dispatch(GETTING_PROSPECT(false));
            return dispatch(GET_PROSPECT(inf));
        })
        .catch(e => {
            dispatch(GETTING_PROSPECT(false));
            if(e.response.status == 404){
                return dispatch(GET_PROSPECT(404))
            }else{
                return dispatch(GET_PROSPECT('request'));
            }
        })
    }

}

export function GETTING_CLIENT(carga){
    return {
        type: 'GETTING_CLIENT',
        payload: carga
    }
}

export function GET_CLIENT(client){
    return {
        type: 'GET_CLIENT',
        payload: client
    }
}

export function AxiosGetClient(carga, id){
    // Función Axios
    return function(dispatch){
        dispatch(GETTING_CLIENT(carga));
        axios.get(`/cliente/app/get/${id}`)
        .then((info) => info.data)
        .then(inf => {
            dispatch(GETTING_CLIENT(false));
            return dispatch(GET_CLIENT(inf));
        })
        .catch(e => {
            dispatch(GETTING_CLIENT(false));
            if(e.response.status == 404){
                return dispatch(GET_CLIENT(404))
            }else{
                return dispatch(GET_CLIENT('request'));
            }
        })
    }
}

// PROJECTOS
export function GETTING_PROJECT(carga){
    return {
        type: 'GETTING_PROJECT',
        payload: carga
    }
}
export function GET_PROJECT(project){
    return {
        type: 'GET_PROJECT',
        payload: project
    }
}
export function AxiosGetProject(carga, id){
    // Get Projects.
    // Función Axios
    return function(dispatch){
        dispatch(GETTING_PROJECT(carga));
        axios.get(`/cliente/app/project/get/${id}`)
        .then((info) => info.data)
        .then(inf => {
            dispatch(GETTING_PROJECT(false));
            return dispatch(GET_PROJECT(inf));
        })
        .catch(e => {
            dispatch(GETTING_PROJECT(false));
            if(e.response.status == 404){
                return dispatch(GET_PROJECT(404))
            }else{
                return dispatch(GET_PROJECT('request'));
            }
        })
    }
}

export function showNote(note){
    return {
        type: 'GET_NOTE',
        payload: note
    }
}
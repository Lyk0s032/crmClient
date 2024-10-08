import { createStore } from "redux";

const initialState = {
    // Usuario
    usuario: null,
    loadingUser:false,
    
    // Business
    business: null,
    loadingBusiness: false,
    
    // asesor
    asesor: null,
    // Clientes
    clients: null,
    loadingClients: false,
    // Cliente individual
    client: null,
    gettingClient: false,
    // Prospectos
    prospects:null,
    loadingProspect: false,

    // Prospect
    prospect: null,
    loadingProspect: false,

    // Project
    project: null,
    loadingProject: false,

    note: null,
}
export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                usuario: action.payload,
                loadingUser: false,
            }
        case 'GETTING_USER':
            return {
                ...state,
                loadingUser: true
            }
        
        case 'GETTING_BUSINESS':
            return {
                ...state,
                loadingBusiness:action.payload
            }
        case 'GET_BUSINESS':
            return {
                ...state,
                business:action.payload,
                loadingBusiness: false
            }
        case 'GET_CLIENTS':
            return {
                ...state,
                clients: action.payload,
                loadingClient:false
            }

        case 'GETTING_CLIENTS':
            return {
                ...state,
                loadingClient: action.payload
            }

        // CLIENTES INDIVIDUAL
        case 'GETTING_CLIENT':
            return {
                ...state,
                gettingClients: action.payload,
            }
        case 'GET_CLIENT':
            return {
                ...state,
                client: action.payload
            }

        // Projecto
        case 'GET_PROJECT':
            return {
                ...state,
                project:action.payload,
                loadingProject: false
            }
        case 'GETTING_PROJECT':
            return {
                ...state,
                loadingProject:action.payload
            }
        case 'GET_PROSPECTS':
            return {
                ...state,
                prospects: action.payload,
                loadingProspect:false
            }
        case 'GETTING_PROSPECTS':
            return {
                ...state,
                loadingProspect:action.payload
            }
        // Prospecto
        case 'GET_PROSPECT':
            return {
                ...state,
                prospect: action.payload,
                loadingProspect: false
            }
        case 'GETTING_PROSPECT':
            return {
                ...state,
                loadingProspect:action.payload
            }
        case 'GET_NOTE':
            return {
                ...state,
                note: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
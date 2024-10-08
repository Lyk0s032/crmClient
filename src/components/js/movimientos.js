// Validemos que el movil este disponible

import axios from "axios";

const signIn = async (data) => {
    let body = {
        phone: data.email,
        password: data.password
    }

     
    const login = await axios.post('/user/signIn/', body)
    .then(async res => {
        // const token = await SecureStore.setItemAsync('token', res.data.data);
        // console.log(token);
        return res;
    })
    .catch((err) => { 
        console.log(err);

        if(err.request.status == 404){
            return 404
        }else if(err.request.status == 401){
            return 401
        }else if(err.request.status == 500) {
            return 500
        }else {
            return 500
        }
    })

    return login;
}

const auth = async (token) => {
    axios.get('/app/signIn', {
        headers:{
            'authorization': `Bearer ${token}`
        }
    } )
    .then((res) => {
        return res
    })
    .catch(err => {
        console.log(err)
        console.log('no trae registro')

    })
}

export { signIn, auth }
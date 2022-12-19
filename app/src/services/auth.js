import axios from 'axios';

const login  = async (email, password) => {
    return await axios({
        method: "post",
        url: `http://localhost:3001/auth/login`,
        data: { email, password },
        headers: { 'Content-Type': 'application/json' }
    });
}

const register  = async (email, password) => {
    return await axios({
        method: "post",
        url: `http://localhost:3001/auth/register`,
        data: { email, password },
        headers: { 'Content-Type': 'application/json' }
    });
}

export {
    login, register
}
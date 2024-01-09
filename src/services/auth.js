import { AUTH } from "../utility/constants";

const headers = { 'Content-Type': 'application/json', }
async function authenticateUser(username, password) {
    return fetch(AUTH.LOGIN, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers,
    }).then(res => res.json())
}

async function registerUser({ username, email, password, access }, accessToken) {
    return fetch(AUTH.REGISTER, {
        method: 'POST',
        body: JSON.stringify({ username, email, password, access }),
        headers: {
            ...headers,
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then(res => res.json())
}

async function validateUser(accessToken) {
    return fetch(AUTH.VALIDATE, {
        method: 'POST',
        headers: {
            ...headers,
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then(res => res.json())
}

export {
    authenticateUser,
    validateUser,
    registerUser
}
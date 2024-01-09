const AUTH = {
    LOGIN: 'https://vitesse-backend.onrender.com:10000/v1/auth/login',
    REGISTER: 'https://vitesse-backend.onrender.com:10000/v1/auth/register',
    VALIDATE: 'https://vitesse-backend.onrender.com:10000/v1/auth/validate',
}

const EMPLOYEE = {
    LIST: 'https://vitesse-backend.onrender.com:10000/v1/employee/list',
    CREATE: 'https://vitesse-backend.onrender.com:10000/v1/employee/create',
    BULK: 'https://vitesse-backend.onrender.com:10000/v1/employee/bulk',
    UPDATE: 'https://vitesse-backend.onrender.com:10000/v1/employee/',
}

const VENDOR = {
    LIST: 'https://vitesse-backend.onrender.com:10000/v1/vendor/list',
    CREATE: 'https://vitesse-backend.onrender.com:10000/v1/vendor/create',
    BULK: 'https://vitesse-backend.onrender.com:10000/v1/vendor/bulk',
    UPDATE: 'https://vitesse-backend.onrender.com:10000/v1/vendor/',
}

const IMMIGRATION = {
    LIST: 'https://vitesse-backend.onrender.com:10000/v1/employee/immigration/list',
    BULK: 'https://vitesse-backend.onrender.com:10000/v1/employee/immigration/bulk',

}
const ROLES = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    ACCOUNTS: 'ACCOUNTS',
    IMMIGRATION: 'IMMIGRATION',
    HR: 'HR',
}
export {
    AUTH,
    EMPLOYEE,
    IMMIGRATION,
    VENDOR,
    ROLES,
}


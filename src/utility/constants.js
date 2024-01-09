const AUTH = {
    LOGIN: 'http://localhost:5000/v1/auth/login',
    REGISTER: 'http://localhost:5000/v1/auth/register',
    VALIDATE: 'http://localhost:5000/v1/auth/validate',
}

const EMPLOYEE = {
    LIST: 'http://localhost:5000/v1/employee/list',
    CREATE: 'http://localhost:5000/v1/employee/create',
    BULK: 'http://localhost:5000/v1/employee/bulk',
    UPDATE: 'http://localhost:5000/v1/employee/',
}

const VENDOR = {
    LIST: 'http://localhost:5000/v1/vendor/list',
    CREATE: 'http://localhost:5000/v1/vendor/create',
    BULK: 'http://localhost:5000/v1/vendor/bulk',
    UPDATE: 'http://localhost:5000/v1/vendor/',
}

const IMMIGRATION = {
    LIST: 'http://localhost:5000/v1/employee/immigration/list',
    BULK: 'http://localhost:5000/v1/employee/immigration/bulk',

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


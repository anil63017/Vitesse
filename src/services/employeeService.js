import { EMPLOYEE, IMMIGRATION } from "../utility/constants"
const headers = {
    'Content-Type': 'application/json'
}
async function getEmployeeList(accessToken) {
    const response = await fetch(EMPLOYEE.LIST, {
        headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response.json();
}

async function getImmigrationEntries(accessToken) {
    const response = await fetch(IMMIGRATION.LIST, {
        headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }
    })
    return await response.json()
}

async function bulkUpdateEmployee(updates, accessToken) {
    const response = await fetch(EMPLOYEE.BULK, {
        method: 'PUT', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }, body: JSON.stringify(updates)
    })
    return await response.json()
}

async function createEmployee(newEmployee, accessToken) {
    const response = await fetch(EMPLOYEE.CREATE, {
        method: 'POST', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }, body: JSON.stringify(newEmployee)
    })
    return response.json()
}

async function updateEmployee(employeeId, updates, accessToken) {
    const response = await fetch(`${EMPLOYEE.UPDATE}${employeeId}`, {
        method: 'PUT', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }, body: JSON.stringify(updates)
    })
    return response.json()
}

async function bulkUpdateImmigration(updates, accessToken) {
    const response = await fetch(IMMIGRATION.BULK, {
        method: 'PUT', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(updates)
    })
    return await response.json()
}


export {
    getEmployeeList,
    getImmigrationEntries,
    bulkUpdateEmployee,
    bulkUpdateImmigration,
    createEmployee,
    updateEmployee,
}
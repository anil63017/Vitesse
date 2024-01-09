import { VENDOR } from "../utility/constants";

const headers = {
    'Content-Type': 'application/json'
}
async function getVendorList(accessToken) {
    const response = await fetch(VENDOR.LIST, {
        headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response.json();
}

async function createVendor(vendorPayload, accessToken) {
    const response = await fetch(VENDOR.CREATE, {
        method: 'POST', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }, body: JSON.stringify(vendorPayload)
    })
    return response.json()
}

async function updateVendor(vendorId, updates, accessToken) {
    const response = await fetch(`${VENDOR.UPDATE}${vendorId}`, {
        method: 'PUT', headers: {
            ...headers,
            Authorization: `Bearer ${accessToken}`
        }, body: JSON.stringify(updates)
    })
    return response.json()
}

export {
    getVendorList,
    createVendor,
    updateVendor
}
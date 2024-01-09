import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { createEmployee, getEmployeeList, getImmigrationEntries, updateEmployee } from "../../services/employeeService";
import { createVendor, getVendorList, updateVendor } from "../../services/vendorService";
import { ROLES } from "../constants";

const DataContext = createContext();

export function useCoreData() {
    return useContext(DataContext);
}

function DataProvider({ children }) {
    const [employeeList, setEmployeeList] = useState({});
    const [immigrationList, setImmigrationList] = useState([]);
    const [vendorList, setVendorList] = useState([]);
    const [clientList, setClientList] = useState([]);
    const [workingList, setWorkingList] = useState([]);
    const [isDataLoading, setisDataLoading] = useState(true);
    const { userAccessToken , getUserRole } = useAuth();

    useEffect(() => {
        (async () => {
            const userRole = getUserRole()
            const employeeData = await getEmployeeList(userAccessToken);
            setEmployeeList(employeeData.reduce((prev, curr) => {
                prev[curr.employeeId] = { ...curr, entryDate: new Date(curr.entryDate).toISOString().split('T')[0] }
                return prev
            }, {}));
            //changes
            if (userRole !== ROLES.HR ){

            const immigrationData = await getImmigrationEntries(userAccessToken);
            setImmigrationList(immigrationData.map((i) => {
                return { ...i, visaValidity: new Date(i.visaValidity).toISOString().split('T')[0], entryDate: new Date(i.entryDate).toLocaleDateString() }
            }));
            const vendorData = await getVendorList(userAccessToken);
            setVendorList(vendorData.map((v) => {
                return { ...v, entryDate: new Date(v.entryDate).toISOString().split('T')[0] }
            }))
            setisDataLoading(false);
        }
//changes
        else{

            setisDataLoading(false);
        }
        })();
    }, [])

    const getEmployeeById = (employeeId) => {
        return employeeList[employeeId];
    }

    const addEmployeeData = async (employeePayload) => {
        try {
            const createdEmployee = await createEmployee(
                employeePayload,
                userAccessToken
            )
            if (createdEmployee.employeeId) {
                setEmployeeList((employeeData) => ({ ...employeeData, [createdEmployee.employeeId]: createdEmployee }));
            }
            return createdEmployee;
        } catch (err) {
            console.log(err);
        }
        return null
    }

    const updateEmployeeData = async (employeeId, employeePayload) => {
        try {
            const updatedEmployee = await updateEmployee(employeeId,
                employeePayload,
                userAccessToken
            )
            if (updatedEmployee.employeeId) {
                setEmployeeList((employeeData) => {
                    const updatedEmployeeList = { ...employeeData, [updatedEmployee.employeeId]: updatedEmployee }
                    if (employeeId !== updatedEmployee.employeeId) {
                        delete updatedEmployeeList[employeeId]
                    }
                    return updatedEmployeeList
                });
            }
            return updatedEmployee;
        } catch (err) {
            console.log(err);
        }
        return null
    }

    const addVendorData = async (vendorPayload) => {
        const newVendor = await createVendor(vendorPayload, userAccessToken);
        if (newVendor._id) {
            setVendorList((vendorList) => {
                return [...vendorList, newVendor]
            })
            return newVendor;
        }
        return null
    }

    const updateVendorData = async (vendorId, vendorPayload) => {
        const updatedVendor = await updateVendor(vendorId, vendorPayload, userAccessToken);
        if (updatedVendor._id) {
            setVendorList((vendorList) => {
                let updatedVendorList = vendorList.filter((vendor) => vendor._id !== vendorId)
                updatedVendorList.push(updatedVendor);
                updatedVendorList.sort((a, b) => a.name - b.name);
                return updatedVendorList
            })
            return updatedVendor;
        }
        return null
    }

    const coreData = {
        employeeMap: employeeList,
        employeeList: Object.values(employeeList).sort((a, b) => a.employeeId - b.employeeId),
        immigrationList,
        vendorList,
        clientList,
        workingList,
        getEmployeeById,
        addEmployeeData,
        updateEmployeeData,
        addVendorData,
        updateVendorData,
    }
    return <DataContext.Provider value={coreData}>
        {!isDataLoading && children}
    </DataContext.Provider>
}

export default DataProvider;
import { useEffect, useState } from "react";
import { useAuth } from "../../../../utility/context/AuthContext";
import { Navigate } from "react-router-dom";
import { Plus } from "react-feather";
// ** Reactstrap Imports
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
} from "reactstrap";
import EmployeeModal from "./modal/EmployeeModal";
import EmployeeTable from "./EmployeeTable";

const Employeedirectory = () => {
  const { getUserRole } = useAuth();
  const [modal, setModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal);
  // ** Function to handle filter

  useEffect(() => {
    if (!modal) {
      setSelectedEmployee(null);
    }
  }, [modal]);

  return !["ADMIN", "HR", "IMMIGRATION", "MANAGER"].includes(getUserRole()) ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Employee Directory</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Button className="ms-2" color="primary" onClick={handleModal}>
              <Plus size={15} />
              <span className="align-middle ms-50">Add Record</span>
            </Button>
          </div>
        </CardHeader>
        <EmployeeTable editEmployee={(employee) => {
          setSelectedEmployee(employee);
          setModal(true);
        }} />
      </Card>

      <EmployeeModal
        closeModal={() => setModal(false)}
        open={modal}
        handleModal={handleModal}
        selectedEmployee={selectedEmployee}
      />
    </>
  );
};

export default Employeedirectory;

import { Fragment, useState, forwardRef } from "react";
import TableExpandable from "./TableExpandable";
import { useAuth } from "../../../../utility/context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  ChevronDown,
  Share,
  Printer,
  FileText,
  File,
  Grid,
  Copy,
  Plus,
} from "react-feather";

// ** Reactstrap Imports

import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import CreateAppExample from "./modal/CreateApp";
import VendorModal from "./modal/EmployeeModal";

const Workassignmentsdirectory = () => {
  const { getUserRole } = useAuth();
  const [modal, setModal] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal);
  // ** Function to handle filter
  return !["ADMIN", "HR", "IMMIGRATION", "MANAGER"].includes(getUserRole()) ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Work Assignments</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Button className="ms-2" color="primary" onClick={handleModal}>
              <Plus size={15} />
              <span className="align-middle ms-50">Add Record</span>
            </Button>
          </div>
        </CardHeader>
        {/* <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='me-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
            />
          </Col>
        </Row> */}
        <TableExpandable />
      </Card>
      <CreateAppExample 
        setEmployeeList={setEmployeeList}
        open={modal}
        handleModal={handleModal}/>
        
      {/* <VendorModal
      
      /> */}
    </>
  );
};

export default Workassignmentsdirectory;

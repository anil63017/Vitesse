import { Fragment, useState, forwardRef, useEffect } from "react";
import TableExpandable from "./VendorTable";
import { useAuth } from "../../../../utility/context/AuthContext";
import { Navigate } from "react-router-dom";

import {
  Plus,
} from "react-feather";
// ** Reactstrap Imports
import {
  Card,
  Button,
  CardTitle,
  CardHeader,
  Input,Col,Label,
} from "reactstrap";
import VendorModal from "./modal/VendorModal";
import VendorTable from "./VendorTable";

const Vendordirectory = () => {

  const { getUserRole } = useAuth();
  const [modal, setModal] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);
  // ** Function to handle Modal toggle

  const handleModal = () => setModal(!modal);
  // ** Function to handle filter


  useEffect(() => {
    if (!modal) {
      setSelectedVendor(null);
    }
  }, [modal]);


  return !["ADMIN", "HR", "IMMIGRATION", "MANAGER"].includes(getUserRole()) ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-center border-bottom">
          <CardTitle tag="h4">Vendor Directory</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Button className="ms-2" color="primary" onClick={handleModal}>
              <Plus size={15} />
              <span className="align-middle ms-50">Add Record</span>
            </Button>
    
          </div>
        </CardHeader>
        <VendorTable editVendor={(vendor) => {
          setSelectedVendor(vendor);
          setModal(true);
        }} />
      </Card>

      <VendorModal
        closeModal={() => setModal(false)}
        open={modal}
        handleModal={handleModal}
        selectedVendor={selectedVendor}
      />
    </>
  );
};

export default Vendordirectory;

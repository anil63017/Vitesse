// ** React Imports
import { Fragment, useRef, useState } from "react";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Form,
  Input,
  Modal,
  Button,
  CardBody,
  CardText,
  InputGroup,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
import Cleave from "cleave.js/react";
import classnames from "classnames";
// ** Third Party Components
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Home, Check, X, Briefcase } from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { getDateRefValue, getDropdownRefValue, getRefValue } from "../../../../../utility/Utils";
import { useAuth } from "../../../../../utility/context/AuthContext";
import { createEmployee } from "../../../../../services/employeeService";
import { useCoreData } from "../../../../../utility/context/DataContext";

const defaultValues = {
  lastName: "",
  firstName: "",
};

const statusOptions = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "daily", label: "Daily" },
];

const VendorModal = ({ open, handleModal, selectedVendor, closeModal }) => {
  // ** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={handleModal} />
  );

  const [show, setShow] = useState(false);
  const entryDateRef = useRef(null);
  const nameRef = useRef(null);
  // const addressRef = useRef(null);
  // const streetRef = useRef(null);
  // const cityRef = useRef(null);
  const stateRef = useRef(null);
  // const zipRef = useRef(null);
  const pocEmailRef = useRef(null);
  const pocNameRef = useRef(null);
  const pocContactRef = useRef(null);
  const invoiceEmailRef = useRef(null);
  const pmtTermsRef = useRef(null);
  const invoiceTermsRef = useRef(null);
  const timeSheetsRef = useRef(null);

  const { addVendorData, updateVendorData } = useCoreData();
  // ** Hooks

  const [paymentMethod, setPaymentMethod] = useState("onboard-yes");

  const [cardType, setCardType] = useState("");
  const [selected, setSelected] = useState(null);
  const [modalCardType, setModalCardType] = useState("");
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const isEdit = selectedVendor !== null

    // ** Function to handle filter


  const onSubmit = () => {
    const entryDate = getDateRefValue(entryDateRef);
    const name = getRefValue(nameRef);
    // const address = getRefValue(addressRef);
    // const street = getRefValue(streetRef);
    // const city = getRefValue(cityRef);
    const state = getRefValue(stateRef);
    // const zip = getRefValue(zipRef);
    const pocEmail = getRefValue(pocEmailRef);
    const pocName = getRefValue(pocNameRef);
    const pocContact = getRefValue(pocContactRef);
    const invoiceEmail = getRefValue(invoiceEmailRef);
    const pmtTerms = getDropdownRefValue(pmtTermsRef);
    const invoiceTerms = getDropdownRefValue(invoiceTermsRef);
    const timeSheets = getDropdownRefValue(timeSheetsRef);


    const vendorPayload = {
      entryDate, name, state, pocEmail, pocName, pocContact, invoiceEmail, pmtTerms, invoiceTerms, timeSheets
    }
    if (isEdit) {
      updateVendorData(selectedVendor._id, vendorPayload).then(data => {
        if (data) {
          closeModal();
        }
      })
    } else {
      addVendorData(vendorPayload).then(data => {
        if (data) {
          closeModal();
        }
      });
    }

  };

  const selectedCondition = selected !== null;

  const onDiscard = () => {
    clearErrors();
    setShow(false);
    reset();
    handleModal();
  };
  const [opend, setOpend] = useState("");

  const toggle = (id) => {
    opend === id ? setOpend() : setOpend(id);
  };


  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className="modal-dialog-centered modal-lg"
      contentClassName="pt-0"
    >
      <ModalHeader
        className="mb-1"
        toggle={handleModal}
        close={CloseBtn}
        tag="div"
      ></ModalHeader>

      <ModalBody className="pb-5 px-sm-4 mx-50">
        <h1 className="address-title text-center mb-1">{`${isEdit ? 'Update' : 'Add New'} Vendor`}</h1>
        <Row tag="form" className="gy-1 gx-2">
          <Col xs={12} md={6}>
            <Label className="form-label" for="entrydate">
              Entry Date
            </Label>
            <Input
              id="entrydate"
              innerRef={entryDateRef}
              type="date"
              placeholder="Select Date"
              defaultValue={isEdit ? selectedVendor.entryDate : ''}
            />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="VendorName">
              Vendor Name
            </Label>
            <Input id="VendorName" placeholder="Insight Global" innerRef={nameRef} defaultValue={isEdit ? selectedVendor.name : ''} />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="contactperson">
              Contact Person
            </Label>
            <Input
              id="contactperson"
              placeholder="John"
              innerRef={pocNameRef}
              defaultValue={isEdit ? selectedVendor.pocName : ''}
            />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="email">
              Contact Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Id"
              innerRef={pocEmailRef}
              defaultValue={isEdit ? selectedVendor.pocEmail : ''}
            />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="Phone">
              Phone
            </Label>
            <Input id="Phone" placeholder="Enter Phone" innerRef={pocContactRef} defaultValue={isEdit ? selectedVendor.pocContact : ''} />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="state">
              State
            </Label>
            <Input id="state" placeholder="State" innerRef={stateRef}
              defaultValue={isEdit ? selectedVendor.state : ''} />
          </Col>
          <Col xs={12} md={6}>
            <Label className="form-label" for="invoiceemail">
              Invoice Email
            </Label>
            <Input
              id="invoiceemail"
              type="email"
              placeholder="Invoice Email Id"
              innerRef={invoiceEmailRef}
              defaultValue={isEdit ? selectedVendor.invoiceEmail : ''}
            />
          </Col>

          <Col xs={12} md="6">
            <Label className="form-label" for="paymentterms">
              Payment Terms
            </Label>
            <Select
              id="paymentterms"
              isClearable={false}
              className="react-select"
              classNamePrefix="select"
              options={statusOptions}
              theme={selectThemeColors}
              defaultValue={isEdit ? statusOptions.find((option) => option.value === selectedVendor.pmtTerms) : statusOptions[0]}
              ref={pmtTermsRef}
            />
          </Col>

          <Col xs={12} md="6">
            <Label className="form-label" for="invoiceterms">
              Invoice Terms
            </Label>
            <Select
              id="invoiceterms"
              isClearable={false}
              className="react-select"
              classNamePrefix="select"
              options={statusOptions}
              theme={selectThemeColors}
              defaultValue={isEdit ? statusOptions.find((option) => option.value === selectedVendor.invoiceTerms) : statusOptions[0]}
              ref={invoiceTermsRef}
            />
          </Col>
          <Col xs={12} md="6">
            <Label className="form-label" for="timesheetstovendor">
              Time Sheets to Vendor
            </Label>
            <Select
              id="timesheetstovendor"
              isClearable={false}
              className="react-select"
              classNamePrefix="select"
              options={statusOptions}
              theme={selectThemeColors}
              defaultValue={isEdit ? statusOptions.find((option) => option.value === selectedVendor.timeSheets) : statusOptions[0]}
              ref={timeSheetsRef}
            />
          </Col>

          <Col className="text-center" xs={12}>
            <Button onClick={onSubmit} className="me-1 mt-2" color="primary">
              Submit
            </Button>
            <Button
              type="reset"
              className="mt-2"
              color="secondary"
              outline
              onClick={onDiscard}
            >
              Discard
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default VendorModal;

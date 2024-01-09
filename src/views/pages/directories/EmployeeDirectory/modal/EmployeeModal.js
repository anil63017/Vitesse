// ** React Imports
import { Fragment, useEffect, useRef, useState } from "react";

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
import { getDropdownRefValue, getRefValue } from "../../../../../utility/Utils";
import { useAuth } from "../../../../../utility/context/AuthContext";
import { createEmployee } from "../../../../../services/employeeService";
import { useCoreData } from "../../../../../utility/context/DataContext";

const defaultValues = {
  lastName: "",
  firstName: "",
};

const statusOptions = [
  { value: "ACTIVE", label: "Active" },
  { value: "IN_ACTIVE", label: "In Active" },
];

const verifiedOptions = [
  { value: "VERIFIED", label: "Verified" },
  { value: "NOT_VERIFIED", label: "Not Verified" },
];

const EmployeeModal = ({ open, handleModal, closeModal, selectedEmployee }) => {
  // ** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={handleModal} />
  );

  const [show, setShow] = useState(false);
  const entryDateRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const statusRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressOneRef = useRef(null);
  const addressTwoRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipRef = useRef(null);
  const eVerifyStatusRef = useRef(null);
  const eVerifyDocsRef = useRef(null);
  const i9StatusRef = useRef(null);
  const i9DocsRef = useRef(null);

  const isEdit = selectedEmployee !== null;

  const { addEmployeeData, updateEmployeeData } = useCoreData();
  // ** Hooks

  const [onboarding, setOnboarding] = useState('onboard-no');
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = () => {
    const entryDate = getRefValue(entryDateRef);
    const firstName = getRefValue(firstNameRef);
    const lastName = getRefValue(lastNameRef);
    const status = (getDropdownRefValue(statusRef) || 'ACTIVE').toUpperCase()
    const email = getRefValue(emailRef);
    const phone = getRefValue(phoneRef);
    const address = getRefValue(addressOneRef);
    const street = getRefValue(addressTwoRef);
    const city = getRefValue(cityRef);
    const state = getRefValue(stateRef);
    const zip = getRefValue(zipRef);
    const eVerifyStatus = getDropdownRefValue(eVerifyStatusRef).toUpperCase()
    const eVerifyDocs = getRefValue(eVerifyDocsRef).toUpperCase()
    const i9Status = getDropdownRefValue(i9StatusRef).toUpperCase()
    const i9Docs = getRefValue(i9DocsRef).toUpperCase();
    const employeePayload = {
      entryDate,
      firstName,
      lastName,
      status,
      email,
      phone,
      address,
      street,
      city,
      state,
      zip,
    }

    if (onboarding === 'onboard-yes') {
      employeePayload.onBoarding = true
      employeePayload.eVerifyStatus = eVerifyStatus;
      employeePayload.eVerifyDocs = eVerifyDocs;
      employeePayload.i9Status = i9Status;
      employeePayload.i9Docs = i9Docs;
    } else {
      employeePayload.onBoarding = false
    }
    if (isEdit) {
      updateEmployeeData(selectedEmployee.employeeId, employeePayload).then((data) => {
        if (data) {
          closeModal();
        }
      });
    } else {
      addEmployeeData(employeePayload).then((data) => {
        if (data) {
          closeModal();
        }
      });
    }
  };

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

  useEffect(() => {
    if (selectedEmployee?.onBoarding) {
      setOnboarding('onboard-yes');
    } else {
      setOnboarding('onboard-no');
    }
  }, [selectedEmployee])

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
        <h1 className="address-title text-center mb-1">{`${isEdit ? 'Update' : 'Add New'} Candidate`}</h1>
        <Row tag="form" className="gy-1 gx-2">
          <UncontrolledAccordion defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">Personal Details</AccordionHeader>
              <AccordionBody accordionId="1">
                <Row className="gy-1 gx-2">
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="entrydate">
                      Entry Date
                    </Label>
                    <Input
                      id="entrydate"
                      innerRef={entryDateRef}
                      type="date"
                      placeholder="Select Date"
                      defaultValue={isEdit ? selectedEmployee.entryDate : ''}
                    />
                  </Col>
                  <Col xs={12} md="6">
                    <Label className="form-label" for="status">
                      Status
                    </Label>
                    <Select
                      id="status"
                      isClearable={false}
                      className="react-select"
                      classNamePrefix="select"
                      options={statusOptions}
                      theme={selectThemeColors}
                      defaultValue={isEdit ? statusOptions.find((status) => selectedEmployee.status === status.value) : statusOptions[0]}
                      ref={statusRef}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="lastName">
                      Last Name
                    </Label>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          innerRef={lastNameRef}
                          invalid={errors.lastName && true}
                          {...field}
                          value={undefined}
                          defaultValue={isEdit ? selectedEmployee.lastName : ''}
                        />
                      )}
                    />
                    {errors.lastName && (
                      <FormFeedback>
                        Please enter a valid Last Name
                      </FormFeedback>
                    )}
                  </Col>
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="firstName">
                      First Name
                    </Label>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="firstName"
                          placeholder="John"
                          innerRef={firstNameRef}
                          invalid={errors.firstName && true}
                          {...field}
                          value={undefined}
                          defaultValue={isEdit ? selectedEmployee.firstName : ''}
                        />
                      )}
                    />
                    {errors.firstName && (
                      <FormFeedback>
                        Please enter a valid First Name
                      </FormFeedback>
                    )}
                  </Col>

                  <Col xs={12} md={6}>
                    <Label className="form-label" for="email">
                      Email Id
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Id"
                      innerRef={emailRef}
                      defaultValue={isEdit ? selectedEmployee.email : ''}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="Phone">
                      Phone
                    </Label>
                    <Input
                      id="Phone"
                      placeholder="Enter Phone"
                      innerRef={phoneRef}
                      defaultValue={isEdit ? selectedEmployee.phone : ''}
                    />
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Location Information
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <Row className="form">
                  <Col xs={12}>
                    <Label className="form-label" for="addressLine1">
                      Address Line 1
                    </Label>
                    <Input
                      id="addressLine1"
                      innerRef={addressOneRef}
                      placeholder="12, Business Park"
                      defaultValue={isEdit ? selectedEmployee.address : ''}
                    />
                  </Col>
                  <Col xs={12}>
                    <Label className="form-label" for="addressLine2">
                      Address Line 2
                    </Label>
                    <Input
                      id="addressLine2"
                      innerRef={addressTwoRef}
                      placeholder="Mall Road"
                      defaultValue={isEdit ? selectedEmployee.street : ''}
                    />
                  </Col>
                  <Col xs={12}>
                    <Label className="form-label" for="city">
                      City
                    </Label>
                    <Input
                      id="city"
                      innerRef={cityRef}
                      placeholder="Ex : Los Angeles"
                      defaultValue={isEdit ? selectedEmployee.city : ''}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="state-province">
                      State / Province
                    </Label>
                    <Input
                      id="state-province"
                      innerRef={stateRef}
                      placeholder="California"
                      defaultValue={isEdit ? selectedEmployee.state : ''}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Label className="form-label" for="zip-code">
                      Zip Code
                    </Label>
                    <Input
                      id="zip-code"
                      innerRef={zipRef}
                      placeholder="99950"
                      defaultValue={isEdit ? selectedEmployee.zip : ''}
                    />
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Onboarding</AccordionHeader>
              <AccordionBody accordionId="3">
                <Row className="gx-4">
                  <Col lg="12">
                    <Row className="gx-2 gy-1">
                      <Col xs={12} style={{"display":"flex"}}>
                        <div className="form-check mb-1">
                          <Input
                            type="radio"
                            value="onboard-yes"
                            id="onboardyes-radio"
                            name="payment-method-radio"
                            checked={onboarding === "onboard-yes"}
                            onChange={() => setOnboarding("onboard-yes")}
                          />
                          <Label
                            className="form-check-label"
                            for="onboardyes-radio"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check mb-1" style={{"marginLeft":"30px"}}>
                          <Input
                            type="radio"
                            value="onboard-no"
                            id="onboardno-radio"
                            name="payment-method-radio"
                            checked={onboarding === "onboard-no"}
                            onChange={() => setOnboarding("onboard-no")}
                            disabled={isEdit && selectedEmployee.onBoarding === true}
                          />
                          <Label
                            className="form-check-label"
                            for="onboardno-radio"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      {onboarding === "onboard-yes" && (
                        <Row className="form">
                          <Col xs={12} md="6">
                            <Label className="form-label" for="status">
                              E-VerifyStatus
                            </Label>
                            <Select
                              id="e-verifyStatus"
                              isClearable={false}
                              className="react-select"
                              classNamePrefix="select"
                              options={verifiedOptions}
                              theme={selectThemeColors}
                              defaultValue={isEdit ? verifiedOptions.find((status) => selectedEmployee.eVerifyStatus === status.value) : verifiedOptions[0]}
                              ref={eVerifyStatusRef}
                            />
                          </Col>
                          <Col xs={12} md="6">
                            <Label className="form-label" for="addressLine2">
                              Everify Documents
                            </Label>
                            <Input
                              id="addressLine2"
                              innerRef={eVerifyDocsRef}
                              placeholder="Documents: (Ex. passport, driving license.,)"
                              defaultValue={isEdit ? selectedEmployee.eVerifyDocs : ''}
                            />
                          </Col>
                          <Col xs={12} md="6">
                            <Label className="form-label" for="status">
                              I9 Status
                            </Label>
                            <Select
                              id="i9-status"
                              isClearable={false}
                              className="react-select"
                              classNamePrefix="select"
                              options={verifiedOptions}
                              theme={selectThemeColors}
                              defaultValue={isEdit ? verifiedOptions.find((status) => selectedEmployee.i9Status === status.value) : verifiedOptions[0]}
                              ref={i9StatusRef}
                            />
                          </Col>
                          <Col xs={12} md={6}>
                            <Label className="form-label" for="state-province">
                              I9 Documents
                            </Label>
                            <Input
                              id="i9-documents"
                              innerRef={i9DocsRef}
                              placeholder="i9 Documents"
                              defaultValue={isEdit ? selectedEmployee.i9Docs : ''}
                            />
                          </Col>


                        </Row>
                      )}
                    </Row>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
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

export default EmployeeModal;

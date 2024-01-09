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
import { getRefValue } from "../../../../../utility/Utils";
import { useAuth } from "../../../../../utility/context/AuthContext";
import { createEmployee } from "../../../../../services/employeeService";

const defaultValues = {
  lastName: "",
  firstName: "",
};

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const VendorModal = ({ open, handleModal, setEmployeeList }) => {
  // ** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={15} onClick={handleModal} />
  );

  const [show, setShow] = useState(false);
  const entryDateRef = useRef(null);
  const employeeIdRef = useRef(null);
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

  const { userAccessToken } = useAuth();
  // ** Hooks

  const [paymentMethod, setPaymentMethod] = useState("card");

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

  const onSubmit = () => {
    const entryDate = getRefValue(entryDateRef);
    const employeeId = getRefValue(employeeIdRef);
    const firstName = getRefValue(firstNameRef);
    const lastName = getRefValue(lastNameRef);
    const status = getRefValue(statusRef);
    const email = getRefValue(emailRef);
    const phone = getRefValue(phoneRef);
    const address = getRefValue(addressOneRef);
    const street = getRefValue(addressTwoRef);
    const city = getRefValue(cityRef);
    const state = getRefValue(stateRef);
    const zip = getRefValue(zipRef);

    createEmployee(
      {
        entryDate,
        employeeId,
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
      },
      userAccessToken
    ).then((data) => {
      setEmployeeList((employeedetails) => {
        return [...employeedetails, data];
      }).catch((err) => {
        console.log(err);
      });
    });
  };

  const selectedCondition = selected !== null;

  const onDiscard = () => {
    clearErrors();
    setShow(false);
    reset();
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
        <h1 className="address-title text-center mb-1">Add New Candidate</h1>
        <Row tag="form" className="gy-1 gx-2">
          <Accordion className="accordion-margin" acti open={opend} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Personal Details</AccordionHeader>
              <AccordionBody accordionId="1">
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
                      defaultValue={statusOptions[0]}
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
                    />
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Address</AccordionHeader>
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
                    />
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          {/* <Col xs={12}>
          <label
                className="form-check-label fw-bolder"
                htmlFor="billing-switch"
              >
                Is candidate is e-verified ?
              </label>
          <input type="radio" name="billing-switch" /> yes 
          <input type="radio" name="billing-switch"/> No 
          </Col> */}
          <Row className="gx-4">
            <Col lg="6">
              <Row className="gx-2 gy-1">
                <Col xs={12}>
                  <div className="form-check mb-1">
                    
                    <Input
                      type="radio"
                      value="paypal"
                      id="paypal-radio"
                      name="payment-method-radio"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    <Label className="form-check-label" for="paypal-radio">
                      Yes
                    </Label>
                  </div>
                  <div className="form-check mb-1">
                    <Input
                      type="radio"
                      value="card"
                      id="card-radio"
                      name="payment-method-radio"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <Label className="form-check-label" for="card-radio">
                      No
                    </Label>
                  </div>
                </Col>
                {paymentMethod === "card" && (
                  <Fragment>
                    <Col xs={12}>
                      <Label className="form-label" for="credit-card">
                        Card Number
                      </Label>
                      <InputGroup>
                        <Controller
                          id="credit-card"
                          name="cardInput"
                          control={control}
                          placeholder="1356 3215 6548 7898"
                          render={({ field }) => (
                            <Cleave
                              {...field}
                              name="cardInput"
                              className={classnames("form-control", {
                                "is-invalid": errors.cardInput,
                              })}
                              options={{
                                creditCard: true,
                                onCreditCardTypeChanged: (type) =>
                                  setCardType(type),
                              }}
                            />
                          )}
                        />
                        {cardType !== "" && cardType !== "unknown" ? (
                          <InputGroupText>
                            <img
                              height="24"
                              alt="card-type"
                              src={cardsObj[cardType]}
                            />
                          </InputGroupText>
                        ) : null}
                      </InputGroup>
                      {errors.cardInput ? (
                        <FormFeedback className="d-block">
                          {errors.cardInput.message}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="form-label" for="card-name">
                        Name On Card
                      </Label>
                      <Input id="card-name" placeholder="John Doe" />
                    </Col>
                    <Col xs={6} md={3}>
                      <Label className="form-label" for="exp-date">
                        Exp. Date
                      </Label>
                      <Cleave
                        id="exp-date"
                        placeholder="MM/YY"
                        className="form-control"
                        options={{ delimiter: "/", blocks: [2, 2] }}
                      />
                    </Col>
                    <Col xs={6} md={3}>
                      <Label className="form-label" for="cvv">
                        CVV
                      </Label>
                      <Cleave
                        id="cvv"
                        placeholder="654"
                        className="form-control"
                        options={{ blocks: [3] }}
                      />
                    </Col>
                    <Col xs={12}>
                      <div className="d-flex align-items-center">
                        <div className="form-switch w-100">
                          <Input
                            defaultChecked
                            type="switch"
                            name="save-card"
                            id="save-card"
                          />
                          <Label className="form-check-label" for="save-card">
                            <span className="switch-icon-left">
                              <Check size={14} />
                            </span>
                            <span className="switch-icon-right">
                              <X size={14} />
                            </span>
                          </Label>
                          <Label
                            className="form-check-label fw-bolder ms-1"
                            for="save-card"
                          >
                            Save Card for future billing?
                          </Label>
                        </div>
                      </div>
                    </Col>
                    <Col className="mt-2 pt-1" xs={12}>
                      <Button type="submit" className="me-1" color="primary">
                        Submit
                      </Button>
                      <Button color="secondary" outline>
                        Cancel
                      </Button>
                    </Col>
                  </Fragment>
                )}
              </Row>
            </Col>
          </Row>
          <Modal
            isOpen={show}
            toggle={() => setShow(!show)}
            className="modal-dialog-centered"
            onClosed={() => setModalCardType("")}
          >
            {/* <ModalHeader
              className="bg-transparent"
              toggle={() => setShow(!show)}
            ></ModalHeader>
            <ModalBody className="px-sm-5 mx-50 pb-5">
              <h1 className="text-center mb-1">
                {selectedCondition ? "Edit" : "Add New"} Card
              </h1>
              <p className="text-center">
                {selectedCondition
                  ? "Edit your saved card details"
                  : "Add card for future billing"}
              </p>
              <Form tag={Row} className="gy-1 gx-2 mt-75">
                <Col xs={12}>
                  <Label className="form-label" for="credit-card">
                    Card Number
                  </Label>
                  <InputGroup>
                    <Cleave
                      id="credit-card"
                      className="form-control"
                      value={selectedCondition ? selected.cardNumber : ""}
                      placeholder="1356 3215 6548 7898"
                      options={{
                        creditCard: true,
                        onCreditCardTypeChanged: (type) => {
                          setModalCardType(type);
                        },
                      }}
                    />
                    {cardType !== "" && cardType !== "unknown" ? (
                      <InputGroupText>
                        <img
                          height="24"
                          alt="card-type"
                          src={cardsObj[modalCardType]}
                        />
                      </InputGroupText>
                    ) : null}
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Label className="form-label" for="card-name">
                    Name On Card
                  </Label>
                  <Input
                    id="card-name"
                    placeholder="John Doe"
                    defaultValue={selectedCondition ? selected.name : ""}
                  />
                </Col>
                <Col xs={6} md={3}>
                  <Label className="form-label" for="exp-date">
                    Exp. Date
                  </Label>
                  <Cleave
                    id="exp-date"
                    placeholder="MM/YY"
                    className="form-control"
                    options={{ delimiter: "/", blocks: [2, 2] }}
                    value={selectedCondition ? selected.expiryDate : ""}
                  />
                </Col>
                <Col xs={6} md={3}>
                  <Label className="form-label" for="cvv">
                    CVV
                  </Label>
                  <Cleave
                    id="cvv"
                    placeholder="654"
                    className="form-control"
                    options={{ blocks: [3] }}
                    value={selectedCondition ? selected.cardCvc : ""}
                  />
                </Col>
                <Col xs={12}>
                  <div className="d-flex align-items-center">
                    <div className="form-switch w-100">
                      <Input
                        defaultChecked
                        type="switch"
                        name="save-card"
                        id="save-card"
                      />
                      <Label className="form-check-label" for="save-card">
                        <span className="switch-icon-left">
                          <Check size={14} />
                        </span>
                        <span className="switch-icon-right">
                          <X size={14} />
                        </span>
                      </Label>
                      <Label
                        className="form-check-label fw-bolder ms-1"
                        for="save-card"
                      >
                        Save Card for future billing?
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col className="text-center mt-1" xs={12}>
                  <Button
                    className="me-1"
                    color="primary"
                    onClick={() => setShow(!show)}
                  >
                    Submit
                  </Button>
                  <Button
                    color="secondary"
                    outline
                    onClick={() => setShow(!show)}
                  >
                    Cancel
                  </Button>
                </Col>
              </Form>
            </ModalBody> */}
          </Modal>

          {/* <Col xs={12}>
            <div className="d-flex align-items-center">
              <div className="form-check form-switch form-check-primary me-25">
                <Input
                  type="switch"
                  defaultChecked
                  id="billing-switch"
                  name="billing-switch"
                />
                <Label className="form-check-label" htmlFor="billing-switch">
                  <span className="switch-icon-left">
                    <Check size={14} />
                  </span>
                  <span className="switch-icon-right">
                    <X size={14} />
                  </span>
                </Label>
              </div>
              <label
                className="form-check-label fw-bolder"
                htmlFor="billing-switch"
              >
                Is candidate is e-verified ?
              </label>
            
            </div>
          </Col> */}
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

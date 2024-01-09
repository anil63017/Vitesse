// ** React Imports
import { Link, Navigate, useNavigate } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/register-v2.svg";
import illustrationsDark from "@src/assets/images/pages/register-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { useRef } from "react";
import { useAuth } from "../utility/context/AuthContext";
import { getDropdownRefValue, getRefValue, selectThemeColors } from "../utility/Utils";
import { ROLES } from "../utility/constants";
import Select from "react-select";

const Register = () => {
  // ** Hooks
  const { skin } = useSkin();
  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const roleRef = useRef();
  const navigate = useNavigate();
  const { register, getUserRole } = useAuth();

  const roleOptions = Object.values(ROLES).map((role) => ({ label: role, value: role }))

  const handleRegister = async () => {
    const username = getRefValue(userRef);
    const email = getRefValue(emailRef);
    const password = getRefValue(passRef);
    const access = getDropdownRefValue(roleRef);
    if (email && password) {
      const auth = await register({ username, email, password, access })
      if (auth.status) {
        navigate('/dashboard');
      }
    }
  }

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return !['ADMIN'].includes(getUserRole()) ? <Navigate to='/dashboard' /> : (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img
            style={{ height: '30px' }}
            src={"src/assets/images/logo/logo.png"}
            alt="avatarImg"

          />
          <h2 className="brand-text text-primary ms-1">Vitesse</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2">
              Make your app management easy and fun!
            </CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Role
                </Label>
                <Select
                  id="role"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={roleOptions}
                  theme={selectThemeColors}
                  defaultValue={roleOptions[0]}
                  ref={roleRef}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  Username
                </Label>
                <Input
                  type="text"
                  id="register-username"
                  placeholder="johndoe"
                  autoFocus
                  innerRef={userRef}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="john@example.com"
                  innerRef={emailRef}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  Password
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                  innerRef={passRef}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="terms" />
                <Label className="form-check-label" for="terms">
                  I agree to
                  <a
                    className="ms-25"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Button onClick={handleRegister} color="primary" block>
                Sign up
              </Button>
            </Form>



          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Register;

// ** React Imports
import { useSkin } from "@hooks/useSkin";
import { Link, Navigate } from "react-router-dom";

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
import illustrationsLight from "@src/assets/images/pages/login-v2.svg";
import illustrationsDark from "@src/assets/images/pages/login-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getRefValue } from "../utility/Utils";
import { useAuth } from "../utility/context/AuthContext";

const Login = () => {
  const { skin } = useSkin();
  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  const handleLogin = async () => {
    const username = getRefValue(userRef);
    const password = getRefValue(passRef);
    if (username && password) {
      const auth = await login(username, password)
      if (auth.status) {
        navigate('/dashboard');
      }
    }
  }

  return isLoggedIn ? <Navigate to='/dashboard' /> : (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img
            style={{ height: '30px' }}
            src={"https://vitesse-group.com/wp-content/uploads/2019/09/cropped-VLogoNewBlue-192x192.png"}
            alt="avatarImg"

          />
          <h2 className="brand-text text-primary ms-1">Vitesse Internal</h2>
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
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to Vitesse-Internal! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin();
              }}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="john@example.com"
                  autoFocus
                  innerRef={userRef}
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  {/* <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link> */}
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                  innerRef={passRef}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button color="primary" block>
                Sign in
              </Button>
            </Form>
            {/* <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p> */}
            {/* <div className="divider my-2">
              <div className="divider-text">or</div>
            </div> */}
            {/* <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div> */}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

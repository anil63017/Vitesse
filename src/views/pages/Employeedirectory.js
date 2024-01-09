import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import Employeetable from "./pages/employeetable/Employeetable";
import { useAuth } from "../../utility/context/AuthContext";
import { Navigate } from "react-router-dom";

const Employeedirectory = () => {
  const { getUserRole } = useAuth();
  return !['ADMIN', 'HR', 'IMMIGRATION', 'MANAGER'].includes(getUserRole()) ? <Navigate to='/dashboard' /> : (
    <Card>
      <CardBody>
        <Employeetable />
      </CardBody>
    </Card>
  );
};

export default Employeedirectory;

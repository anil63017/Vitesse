
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import Immigrationtable from "./pages/immigrationtable/Immigrationtable";
import { useAuth } from "../../utility/context/AuthContext";
import { Navigate } from "react-router-dom";

const Immigrationdirectory = () => {
  const { getUserRole } = useAuth();
  return !['ADMIN', 'MANAGER', 'IMMIGRATION'].includes(getUserRole()) ? <Navigate to='/dashboard' /> : (
    <Card>

      <CardBody>
        <Immigrationtable />
      </CardBody>
    </Card>
  );
};

export default Immigrationdirectory;

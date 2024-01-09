import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import Vendortable from "./pages/vendortable/Vendortable";

const Vendordirectory = () => {
  return (
    <Card>
      <CardBody>
        <Vendortable />
      </CardBody>
    </Card>
  );
};

export default Vendordirectory;

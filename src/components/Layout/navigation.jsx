import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="navbar-brand" as={Link} to="#">
          <span className="font-weight-bold">K. I. E. I.</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;

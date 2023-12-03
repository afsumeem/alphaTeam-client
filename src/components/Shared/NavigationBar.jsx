import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const NavigationBar = ({ handleShow }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="#home"
          className="text-primary fw-bold text-uppercase"
        >
          Alpha Team
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="mx-2 text-dark">
              Add New User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="primary"
          className="d-block ms-auto"
          onClick={handleShow}
        >
          Teams
        </Button>
      </Container>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default NavigationBar;

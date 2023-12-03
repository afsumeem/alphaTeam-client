import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" className="mx-2 text-dark">
              Home
            </NavLink>
            <NavLink to="/add-new-user" className="mx-2 text-dark">
              Add New User
            </NavLink>
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

import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = ({ handleShow }) => {
  return (
    <div className="d-block m-auto">
      <h4
        className="fw-bold text-uppercase text-center"
        style={{ color: "blue", fontSize: "25px" }}
      >
        Alpha Team
      </h4>
      <h2
        className="fw-semibold text-uppercase mb-3 text-center"
        style={{ fontSize: "17px" }}
      >
        Alpha Team members
      </h2>

      <Button variant="primary" className="d-block m-auto" onClick={handleShow}>
        Teams
      </Button>
    </div>
  );
};

Header.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default Header;

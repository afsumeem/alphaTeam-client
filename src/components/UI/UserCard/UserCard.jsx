import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({ user, handleAddToTeam }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <div className="userCard">
        <div className="coverBox">
          <div className="userCover">
            <img src={user.avatar} alt="" />
          </div>
        </div>
        <div className="userDetails">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <h4>{user.email}</h4>
        </div>
        <div className="boxLine"></div>
        <div className="boxLine"></div>

        <div className="userProfile">
          <p className="m-0">Gender: {user.gender}</p>
          <p>Domain: {user.domain}</p>
        </div>
        <button
          className="border-0 p-2 mb-2 fw-bold"
          onClick={() => handleAddToTeam(user)}
        >
          Add To Team
        </button>
      </div>
    </Col>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  handleAddToTeam: PropTypes.func.isRequired,
};

export default UserCard;

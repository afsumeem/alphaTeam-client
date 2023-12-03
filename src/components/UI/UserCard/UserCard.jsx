import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  return (
    <Col sm={12} md={4} lg={3}>
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
          <p>Gender: {user.gender}</p>
          <p>Domain: {user.domain}</p>
          <br />
          <p>{user.available}</p>
        </div>
      </div>
    </Col>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;

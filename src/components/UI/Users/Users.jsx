import { useEffect, useState } from "react";
import "./Users.css";
import { Col, Row } from "react-bootstrap";

const Users = () => {
  // fetch users data

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  // console.log(userData);

  return (
    <div className="mt-5 ">
      <div className="mb-5 mx-5">
        <h4
          className="fw-bold text-uppercase"
          style={{ color: "blue", fontSize: "25px" }}
        >
          Alpha Team
        </h4>
        <h2
          className="fw-semibold text-uppercase mb-5"
          style={{ fontSize: "17px" }}
        >
          Alpha Team members
        </h2>
        <hr />
      </div>
      <Row>
        {userData.map((user, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
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
        ))}
      </Row>
    </div>
  );
};

export default Users;

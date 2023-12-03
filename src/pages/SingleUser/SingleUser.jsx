import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  //
  useEffect(() => {
    const url = `https://alpha-team-backend.vercel.app/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }, [id]);

  return (
    <Col sm={12} md={6} lg={6} xl={6} className="d-block m-auto">
      <div className="userCard">
        <div className="coverBox">
          <div className="userCover">
            <img src={userDetails.avatar} alt="" />
          </div>
        </div>
        <div className="userDetails">
          <h2>
            {userDetails.first_name} {userDetails.last_name}
          </h2>
          <h4>{userDetails.email}</h4>
        </div>
        <div className="boxLine"></div>
        <div className="boxLine"></div>

        <div className="userProfile">
          <p className="m-0">Gender: {userDetails.gender}</p>
          <p>Domain: {userDetails.domain}</p>
        </div>

        <NavLink to="/">
          <button className="border-0 p-2 mb-2 fw-bold">See All Users</button>
        </NavLink>
      </div>
    </Col>
  );
};

export default SingleUser;

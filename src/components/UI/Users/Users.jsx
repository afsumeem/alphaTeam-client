import { useEffect, useState } from "react";

const Users = () => {
  // fetch users data

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  // console.log(userData);

  return <div></div>;
};

export default Users;

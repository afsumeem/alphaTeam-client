import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GenderFilter = ({ setSelectGender, selectGender }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://alpha-team-backend.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  // Filter unique genders
  const uniqueGenders = Array.from(
    new Set(userData?.map((user) => user.gender))
  );
  return (
    <div>
      <h6 className="my-2">Select a gender</h6>
      <button
        onClick={() => {
          setSelectGender("");
        }}
        className="bg-warning border-0 p-2 fw-bold mb-2"
      >
        Reset Gender
      </button>

      {/* gender */}

      {uniqueGenders?.map((gender, i) => (
        <div key={i}>
          <input
            onChange={() => setSelectGender(gender)}
            className="h-3 w-3"
            id={gender}
            type="radio"
            name={gender}
            checked={selectGender === gender}
          />{" "}
          {""}
          <label htmlFor={gender}>{gender}</label>
        </div>
      ))}
    </div>
  );
};

GenderFilter.propTypes = {
  setSelectGender: PropTypes.func.isRequired,
  selectGender: PropTypes.string.isRequired,
};

export default GenderFilter;

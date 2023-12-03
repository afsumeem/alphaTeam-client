import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GenderFilter = ({ setSelectGender, selectGender }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  // console.log(userData);

  // Filter unique genders
  const uniqueGenders = Array.from(
    new Set(userData?.map((user) => user.gender))
  );
  return (
    <div>
      <h2
        className="my-4 font-semibold text-lg"
        style={{ color: "var(--blue)", fontSize: "var(--font)" }}
      >
        Select a gender
      </h2>
      <button
        onClick={() => {
          setSelectGender("");
        }}
        className=" w-full rounded-none text-white py-2 mb-4  transition duration-1000"
        style={{ backgroundColor: "var(--blue)" }}
      >
        Reset gender
      </button>
      {uniqueGenders?.map((gender, i) => (
        <div key={i}>
          <input
            onChange={() => setSelectGender(gender)}
            className="h-3 w-3"
            id={gender}
            type="radio"
            name={gender}
            checked={selectGender === gender}
          />
          <label className="text-[14px] ml-4" htmlFor={gender}>
            {gender}
          </label>
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

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DomainFilter = ({ selectDomain, setSelectDomain }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  // console.log(userData);

  // Filter unique genders
  const uniqueDomains = Array.from(
    new Set(userData?.map((user) => user.domain))
  );

  //
  return (
    <div>
      <h2 className="my-4 font-semibold text-lg">Select a domain</h2>
      <button
        onClick={() => {
          setSelectDomain("");
        }}
      >
        Reset domain
      </button>
      {uniqueDomains?.map((domain, i) => (
        <div key={i}>
          <input
            onChange={() => setSelectDomain(domain)}
            className="h-3 w-3"
            id={domain}
            type="radio"
            name={domain}
            checked={selectDomain === domain}
          />
          <label className="text-[14px] ml-4" htmlFor={domain}>
            {domain}
          </label>
        </div>
      ))}
    </div>
  );
};

//

DomainFilter.propTypes = {
  setSelectDomain: PropTypes.func.isRequired,
  selectDomain: PropTypes.string.isRequired,
};

export default DomainFilter;

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DomainFilter = ({ selectDomain, setSelectDomain }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://alpha-team-backend.vercel.app/users")
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
      <h6 className="my-2">Select a domain</h6>
      <button
        className="bg-warning border-0 p-2 fw-bold mb-2"
        onClick={() => {
          setSelectDomain("");
        }}
      >
        Reset Domain
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

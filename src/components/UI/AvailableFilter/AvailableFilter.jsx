import PropTypes from "prop-types";

const AvailableFilter = ({ isAvailable, handleToggleAvailability }) => {
  return (
    <div>
      <h1 className="text-2xl uppercase">Availability</h1>
      availability check using toggle
      <label className="switch">
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={() => handleToggleAvailability(!isAvailable)}
        />
        <span className="slider">Available</span>
      </label>
    </div>
  );
};

AvailableFilter.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  handleToggleAvailability: PropTypes.func.isRequired,
};

export default AvailableFilter;

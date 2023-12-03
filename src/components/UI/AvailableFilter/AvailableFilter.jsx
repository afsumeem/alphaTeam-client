import PropTypes from "prop-types";

const AvailableFilter = ({ isAvailable, handleToggleAvailability }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={() => handleToggleAvailability(!isAvailable)}
        />
        <span> Available</span>
      </label>
    </div>
  );
};

AvailableFilter.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  handleToggleAvailability: PropTypes.func.isRequired,
};

export default AvailableFilter;

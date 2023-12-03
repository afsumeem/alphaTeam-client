import PropTypes from "prop-types";

const SearchForm = ({ setSearchText }) => {
  return (
    <div>
      <form className=" my-2">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className=" py-2 border rounded-md border-black px-2"
          placeholder="Search Services"
          style={{ width: "250px" }}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchText: PropTypes.func.isRequired,
};

export default SearchForm;

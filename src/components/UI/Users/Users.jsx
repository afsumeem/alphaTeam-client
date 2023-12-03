import { useEffect, useState } from "react";
import "./Users.css";
import { Pagination, Row } from "react-bootstrap";
import { useGetUserQuery } from "../../../redux/features/user/userApi";
// import { useSelector } from "react-redux";
import Header from "../Header/Header";
import GenderFilter from "../GenderFilter/GenderFilter";
import DomainFilter from "../DomainFilter/DomainFilter";
import SearchForm from "../SearchForm/SearchForm";
import UserCard from "../UserCard/UserCard";
import AvailableFilter from "../AvailableFilter/AvailableFilter";

const Users = () => {
  //availability
  const [isAvailable, setIsAvailable] = useState(false);

  // Toggle for availability

  // Toggle availability handler
  const handleToggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  //filter
  const [selectGender, setSelectGender] = useState("");
  const [selectDomain, setSelectDomain] = useState("");
  const [searchText, setSearchText] = useState("");

  //

  const [data, setData] = useState([]);
  const { data: fetchedData, isLoading } = useGetUserQuery({
    search: searchText,
    gender: selectGender,
    domain: selectDomain,
    available: isAvailable ? true : undefined,
  });

  useEffect(() => {
    if (!isLoading && fetchedData) {
      setData(fetchedData);
    }
  }, [fetchedData, isLoading]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const displayUsers = data?.slice(startIndex, endIndex);

  const renderMiddlePages = () => {
    const totalPages = Math.ceil(data.length / pageSize);

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }).map((_, index) => (
        <Pagination.Item
          key={index}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ));
    }

    const middlePages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      middlePages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return middlePages;
  };

  return (
    <div className="mt-5 ">
      <div className="mb-5 mx-5">
        <Header />
        <hr />

        {/* gender */}

        <div>
          <GenderFilter
            selectGender={selectGender}
            setSelectGender={setSelectGender}
          />
        </div>

        {/* availability */}
        <div>
          <AvailableFilter
            isAvailable={isAvailable}
            handleToggleAvailability={handleToggleAvailability}
          />
        </div>

        {/* domain */}

        <div>
          <DomainFilter
            selectDomain={selectDomain}
            setSelectDomain={setSelectDomain}
          />
        </div>

        {/*  */}
        <SearchForm setSearchText={setSearchText} />
      </div>

      {/*  */}

      <Row>
        {/* display user data */}
        {displayUsers.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}

        {/* pagination */}
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            // disabled={currentPage === 1}
          />
          {currentPage > 3 && (
            <>
              <Pagination.Item onClick={() => handlePageChange(1)}>
                1
              </Pagination.Item>
              <Pagination.Ellipsis disabled />
            </>
          )}
          {renderMiddlePages()}
          {currentPage < Math.ceil(data.length / pageSize) - 2 && (
            <>
              <Pagination.Ellipsis disabled />
              <Pagination.Item
                onClick={() =>
                  handlePageChange(Math.ceil(data.length / pageSize))
                }
              >
                {Math.ceil(data.length / pageSize)}
              </Pagination.Item>
            </>
          )}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / pageSize)}
          />
          <Pagination.Last
            onClick={() => handlePageChange(Math.ceil(data.length / pageSize))}
          />
        </Pagination>
      </Row>
    </div>
  );
};

export default Users;

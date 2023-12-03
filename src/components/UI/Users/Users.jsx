import { useEffect, useState } from "react";
import "./Users.css";
import { Offcanvas, Pagination, Row } from "react-bootstrap";
import { useGetUserQuery } from "../../../redux/features/user/userApi";
// import { useSelector } from "react-redux";
import Header from "../Header/Header";
import GenderFilter from "../GenderFilter/GenderFilter";
import DomainFilter from "../DomainFilter/DomainFilter";
import SearchForm from "../SearchForm/SearchForm";
import UserCard from "../UserCard/UserCard";
import AvailableFilter from "../AvailableFilter/AvailableFilter";
import {
  addToTeam,
  removeFromTeam,
} from "../../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

//

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

  //add to team
  const dispatch = useDispatch();

  const handleAddToTeam = (user) => {
    dispatch(addToTeam(user));
  };

  const { users } = useSelector((state) => state.user);

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

  //

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-5 ">
      <div className="mb-5 mx-5">
        <Header handleShow={handleShow} />
        <hr />

        {/*  */}

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Teams</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {users.map((team, i) => (
              <div key={i} className="border p-4 m-2">
                <div className="flex items-center gap-5">
                  <img
                    src={team.avatar}
                    style={{ height: "50px", width: "80px" }}
                    alt=""
                  />
                  <div>
                    <h2
                      className="font-semibold my-2 uppercase"
                      style={{ color: "var(--blue)" }}
                    >
                      {team.first_name} {team.last_name}
                    </h2>

                    <h4>{team.email}</h4>
                    <p>Gender: {team.gender}</p>
                    <p>Domain: {team.domain}</p>
                    <h1 className="text-xl my-2">$ {team.price}</h1>

                    <button
                      title="Delete User"
                      className="text-danger text-base px-4 py-2 border"
                      onClick={() => dispatch(removeFromTeam(team))}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Offcanvas.Body>
        </Offcanvas>

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
          <UserCard user={user} key={index} handleAddToTeam={handleAddToTeam} />
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

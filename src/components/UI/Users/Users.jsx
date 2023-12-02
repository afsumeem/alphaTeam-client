import { useEffect, useState } from "react";
import "./Users.css";
import { Col, Pagination, Row } from "react-bootstrap";
import { useGetUserQuery } from "../../../redux/features/user/userApi";

const Users = () => {
  // fetch users data

  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, []);
  // console.log(userData);

  //filter
  const [selectGender, setSelectGender] = useState("");
  // const [selectDomain, setSelectDomain] = useState("");
  const [searchText, setSearchText] = useState("");

  //

  const [data, setData] = useState([]);
  const { data: fetchedData, isLoading } = useGetUserQuery({
    search: searchText,
    gender: selectGender,
    // domain: selectDomain,
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
        <h4
          className="fw-bold text-uppercase"
          style={{ color: "blue", fontSize: "25px" }}
        >
          Alpha Team
        </h4>
        <h2
          className="fw-semibold text-uppercase mb-5"
          style={{ fontSize: "17px" }}
        >
          Alpha Team members
        </h2>
        <hr />

        {/* gender */}

        <div>
          <input
            onChange={() => setSelectGender("")}
            className="h-3 w-3"
            id="gender"
            type="radio"
            name="gender"
            checked={selectGender === "gender"}
          />
          <label className="text-[14px] ml-4" htmlFor="gender">
            gender
          </label>
        </div>

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
      <Row>
        {displayUsers.map((user, index) => (
          <Col key={index} sm={12} md={4} lg={3}>
            <div className="userCard">
              <div className="coverBox">
                <div className="userCover">
                  <img src={user.avatar} alt="" />
                </div>
              </div>
              <div className="userDetails">
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <h4>{user.email}</h4>
              </div>
              <div className="boxLine"></div>
              <div className="boxLine"></div>

              <div className="userProfile">
                <p>Gender: {user.gender}</p>
                <p>Domain: {user.domain}</p>
                <br />
                <p>{user.available}</p>
              </div>
            </div>
          </Col>
        ))}
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

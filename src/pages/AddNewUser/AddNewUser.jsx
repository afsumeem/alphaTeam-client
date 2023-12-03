import { useForm } from "react-hook-form";
import "./AddNewUser.css";
import axios from "axios";
import { NavLink } from "react-bootstrap";

const AddNewUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit button
  const onSubmit = (data) => {
    axios
      .post("https://alpha-team-backend.vercel.app/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("User Added successfully");
          reset();
        }
      });
  };
  return (
    <div className="">
      {/* add brand title */}
      <h2 className=" pt-5 text-uppercase text-center">Add New USER</h2>
      <div className="d-flex justify-content-center">
        {/* Add brand form */}
        <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="  px-4 py-2 opacity-75"
            placeholder="First Name"
            style={{ width: "170px", marginRight: "10px" }}
            {...register("first_name", { required: true })}
          />
          <input
            className=" px-4 py-2 opacity-75"
            style={{ width: "170px" }}
            placeholder="Last Name"
            {...register("last_name", { required: true })}
          />
          <br />
          <br />
          <input
            className="px-4 py-2 opacity-75"
            style={{ width: "350px" }}
            placeholder="User Email"
            {...register("email", { required: true })}
          />
          <br />
          <br />
          <input
            className="px-4 py-2 opacity-75"
            style={{ width: "350px" }}
            placeholder="Image URL Link"
            {...register("avatar", { required: true })}
          />
          <br />
          <br />
          <select
            className="px-4 py-2 opacity-75"
            style={{ width: "350px" }}
            {...register("domain", { required: true })}
          >
            <option value="Sales" selected>
              Sales
            </option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Management">Management</option>
            <option value="UI-Designing">UI Designing</option>
            <option value="Business-Development">Business Development</option>
          </select>
          <br />
          <br />
          <select
            className="px-4 py-2 opacity-75"
            style={{ width: "350px" }}
            {...register("gender", { required: true })}
          >
            <option value="Male" selected>
              Male
            </option>
            <option value="Female">Female</option>
            <option value="Agender">Agender</option>
            <option value="Bigender">Bigender</option>
            <option value="Polygender">Polygender</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Genderfluid">Genderfluid</option>

            <option value="Genderqueer">Genderqueer</option>
          </select>

          <br />
          <br />
          <label>
            Available :{" "}
            <input
              type="checkbox"
              {...register("available", { required: true })}
            />
          </label>

          <br />

          {/* submit button */}
          <input
            className="d-block mx-auto m-3 btn btn-primary px-5"
            type="submit"
            value="Add User"
          />

          <NavLink
            to="/"
            className=" text-decoration-none d-block mx-auto m-3 btn fs-4"
          >
            {" "}
            See All Users
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;

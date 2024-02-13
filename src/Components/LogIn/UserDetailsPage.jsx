import React from "react";
import { useNavigate } from "react-router-dom";
const UserDetailsPage = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  // const user = location.state;
  if (!user) {
    navigate("/");

    // return null;
  }
  // console.log(user);
  const handleReset = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("credentials");
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1>LogIn User Details</h1>
      <div>
        <strong>I'd: </strong>
        {user?.id}
      </div>
      <div>
        <strong>First Name: </strong>
        {user?.firstName}
      </div>
      <div>
        <strong>Last Name: </strong>
        {user?.lastName}
      </div>
      <div>
        <strong>Email: </strong>
        {user?.email}
      </div>
      <div>
        <strong>Phone: </strong>
        {user?.phoneNumber}
      </div>
      <div>
        <strong>Password: </strong>
        {user?.password}
      </div>
      <button
        type="button"
        className="btn btn-sm btn-danger btn-lg"
        onClick={handleReset}
      >
        Log-Out
      </button>
    </div>
  );
};

export default UserDetailsPage;

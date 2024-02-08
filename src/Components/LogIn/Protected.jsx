import React from "react";
import UserDetailsPage from "./UserDetailsPage";
// import { useNavigate } from 'react-router-dom'
const Protected = () => {
  const user = localStorage.getItem("credentials");
  if (!user) {
    window.location.href = "/";
  }
  return (
    <>
      <UserDetailsPage />
    </>
  );
};

export default Protected;

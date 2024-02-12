import React, { useEffect, useState } from "react";
import UserDetailsPage from "./UserDetailsPage";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Protected = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // if (!user) {
  //   window.location.href = "/";

  // }

  useEffect(() => {
    const user = localStorage.getItem("credentials");
    if (!user) {
      localStorage.getItem("credentials");
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-item-center mt-2 ">
          <ClipLoader color={"#0000FF "} loading={loading} size={50} />
        </div>
      ) : (
        <UserDetailsPage />
      )}
    </>
  );
};

export default Protected;

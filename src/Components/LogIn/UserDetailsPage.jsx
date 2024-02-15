import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import './UserDetails.css'


const UserDetailsPage = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(true)
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  // const user = location.state;
  // 
  useEffect(()=>{
    if(!user){
      navigate("/")
    }else{
      setTimeout(()=>{
        setLoading(false)
      },600)
    }
  },[user,navigate])
  // if (!user) {
  //   navigate("/");
    
  //   // return null;
  // }
  // console.log(user);
  const handleReset = () => {
    localStorage.removeItem("loggedInUser");
    // localStorage.removeItem("credentials");
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1>LogIn User Details</h1>
      {loading ?
      ClipLoader(
        <div className="d-flex justify-content-center align-item-center mt-2 ">
          <ClipLoader color={"#0000FF"} loading={loading} size={30} />
        </div>
      ):(
        <>
        <div ClassName="container">
        <div ClassName="card">
            <div ClassName="card-header"></div>
            <div ClassName="card-body">
                <div ClassName="inner">
                    <div style={{fontSize: "18px",letterSpacing: ".5px",marginBottom: "10px"}}>{user?.firstName}<span ClassName="color__gray" style={{marginLeft: "10px"}}>26</span></div>
                    <div ClassName="color__gray" style={{fontSize: "13px", letterSpacing: ".5px"}}>{user?.city}</div>
                </div>
            </div>
            <div ClassName="card-footer">
                <div ClassName="inner">
                    <div>{user?.followers}</div>
                    <div ClassName="color__gray">Followers</div>
                </div>
                <div ClassName="inner">
                    <div>{user?.like}</div>
                    <div ClassName="color__gray">Likes</div>
                </div>
                <div ClassName="inner">
                    <div>{user?.photos}</div>
                    <div ClassName="color__gray">Photos</div>
                </div>
            </div>
        </div>
    </div>
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
        <strong>Age: </strong>
        {user?.age}
      </div>
      <div>
        <strong>City: </strong>
        {user?.city}
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
        </>
      )}

      <ToastContainer/>    </div>
  );
};

export default UserDetailsPage;

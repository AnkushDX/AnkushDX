import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import Style from "../LogIn/UserDetails.module.css";

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
 
  // console.log(user);
  const handleReset = () => {
    localStorage.removeItem("loggedInUser");
    // localStorage.removeItem("credentials");
    navigate("/");
  };
  // const labelvalue = (lable,value)=>{
  //   return (
  //     value === null ?(
  //     <div>
  //       <span>{lable}: </span>
  //       <span>null</span>
  //     </div>
  //   ):(
  //   <div>{value}</div>
  //   )
  //   )
  // };
   const labelvalue =(lable,value)=>{
    return(
      <div>
        <span>{lable}: </span>
        <span>{value || "null"}</span>
      </div>
    )

   }
  return (
    <>
      <div className={Style.main}>
        <img src="./Images/bg-pattern-top.svg" className={Style.bg1} alt="" />
        {loading ? (
          <div className="d-flex justify-content-center align-item-center mt-2">
            <ClipLoader color={"#0000FF"} loading={loading} size={30} />
          </div>
        ) : (
          <div className={Style.container}>
            <div className={Style.card}>
              <div className={Style.cardHeader}></div>
              <div className={Style.cardBody}>
                <div className={Style.inner} style={{ marginTop: "", textAlign: "center" }}>
              <div>
                <img className={Style.Dp} src={`/Images/${user?.profile}`} alt=""/>
              </div>
                  <div style={{ fontSize: "14px", letterSpacing: ".5px", marginTop:"-35px",fontWeight:"bold", marginBottom: "10px" }}>
                    {labelvalue("First Name ",user?.firstName )}<span className="color__gray" style={{ marginLeft: "10px",marginTop:"-10px" }}>{labelvalue("Last Name ",user?.lastName )}</span>
                    <span className="color__gray" style={{ marginLeft: "10px",marginTop:"-10px" }}>{labelvalue("Age ",user?.age )}</span>
                  </div>
                  <div className="color__gray" style={{ fontSize: "13px",marginTop:"10px",fontWeight:"bold", letterSpacing: ".5px" }}>{labelvalue("City ",user?.city )}</div>
                </div>
              </div>
              <div className={Style.cardFooter}>
                <div className={Style.inner2}>
                  <div>{user?.followers ||"0"}</div>
                  <div className="color__gray">Followers</div>
                </div>
                <div className={Style.inner2}>
                  <div>{user?.like || "0"}</div>
                  <div className="color__gray">Likes</div>
                </div>
                <div className={Style.inner2}>
                  <div >{user?.photos || "0"}</div>
                  <div className="color__gray">Photos</div>
                </div>
              </div>
              <button
                type="button"
                className={`btn btn-sm btn-danger btn-lg ${Style.outBtn}`}
                onClick={handleReset}
              >
                Log-Out
              </button>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
        }
  export default UserDetailsPage;
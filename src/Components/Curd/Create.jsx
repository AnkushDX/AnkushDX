import React, { useState } from "react";
import Style from "../Registration/Registration.module.css";
import Header from "../Header/Header";
import {  useNavigate } from "react-router-dom";
import data from './UserData.json'


const Create = () => {

  //..........with local storage.........
//   const navigate= useNavigate();
//   const [formData,setFormData]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     phoneNumber:""

//   })
 
//   const handleChange =(event)=>{
// const {name,value}=event.target;
// setFormData({...formData,[name]:value})
//   };
//   const handleSubmit =(event)=>{
//     event.preventDefault();
//     localStorage.setItem("formData",JSON.stringify(formData));
//     data.push(formData)
//     navigate("/")
//     alert('data save successfully save')
//   }


  const navigate= useNavigate();
    const [formData,setFormData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
})
const handleChange=(event)=>{
  const {name,value}=event.target;
  setFormData({...formData,[name]:value});

}
const handleSubmit=(event)=>{
  event.preventDefault();
  sendDataToJson(formData)
};
const sendDataToJson=(formData)=>{

  data.push(formData);
  navigate('/')
  alert("Data submitied successfully...",formData)
}
  return (
    <>
      <Header />
      <section className=" gradient-custom">
        <div className="container py-2">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-lg-9 ">
              <h3 className="text-center mt-5">Create Data </h3>
              <div
                className={`card  card-registration ${Style.cardbg}`}
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-2 p-md-3">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <label
                            className={`form-label ${Style.labelname}`}
                            htmlFor="firstName"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className={`form-control form-control-lg ${Style.inputtext}`}
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-outline">
                          <label
                            className={`form-label ${Style.labelname}`}
                            htmlFor="lastName"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  ">
                        <div className="form-outline">
                          <label
                            className={`form-label ${Style.labelname}`}
                            htmlFor="emailAddress"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label
                            className={`form-label ${Style.labelname}`}
                            htmlFor="phoneNumber"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button
                        type="submit"
                        className="btn btn btn-success btn-lg ms-2 mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;

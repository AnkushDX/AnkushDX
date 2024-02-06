import React from 'react'
import Header from "../Header/Header";
import { SignupSchema } from "../../schemas";
import {  useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    inlineRadioOptions: "",
    qualification: "",
    password: "",
    
  };
const Edit = () => {
    const navigate = useNavigate();
    const {
      values,
      errors,
      handleChange,
      handleSubmit,
      handleReset,
  
      handleInputBlur,
     
    } = useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        alert("Data saved successfully");
        resetForm();
        navigate("/");
      },
    });
    console.log(navigate);
  return (
    <>
        <Header />
      <section className=" gradient-custom">
        <div className="container py-2">
          <div className="row justify-content-center align-items-center ">
          
            <div className="col-12 col-lg-9 ">
            <h3 className="text-center mt-5">Create Data</h3>
          
              <div
                className={`card  card-registration ${Style.cardbg}`}
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-2 p-md-3">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <label className={`form-label ${Style.labelname}`} htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className={`form-control form-control-lg ${Style.inputtext}`}
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleInputBlur}
                          />
                          {<p className={Style.error}>{errors.firstName}</p>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-outline">
                          <label className={`form-label ${Style.labelname}`} htmlFor="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleInputBlur}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                          {<p className={Style.error}>{errors.lastName}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  ">
                        <div className="form-outline">
                          <label className={`form-label ${Style.labelname}`} htmlFor="emailAddress">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                          {<p className={Style.error}>{errors.email}</p>}
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label className={`form-label ${Style.labelname}`} htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                          {<p className={Style.error}>{errors.phoneNumber}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      
                        <div className="col-md-6 mb-1">
                          <h6 className={`form-label ${Style.label2}`}>Qualification: </h6>
                         
                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="for10th"
                            >
                              Masters
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="qualification"
                              value="Masters"
                              onChange={handleChange}
                              checked={values.qualification.includes("Masters")}
                            />
                          </div>
                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="for10th"
                            >
                              Bachelor
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="qualification"
                              value="Bachelor"
                              onChange={handleChange}
                              checked={values.qualification.includes("Bachelor")}
                            />
                          </div>
                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                             12th
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="qualification"
                              value="12th"
                              onChange={handleChange}
                              checked={values.qualification.includes("12th")}
                            />
                          </div>

                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              10th
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="qualification"
                              value="10th"
                              onChange={handleChange}
                              checked={values.qualification.includes("10th")}
                            />
                          </div>
                          {<p className={Style.error2}>{errors.qualification}</p>}
                        </div>
                        <div className="col-md-6 mb-1">
                          <h6 className={`form-label ${Style.label2}`}>Gender: </h6>

                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadioOptions"
                              value="female"
                              onChange={handleChange}
                              checked={values.inlineRadioOptions === "female"}
                            />
                          </div>
                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="male"
                              onChange={handleChange}
                              checked={values.inlineRadioOptions === "male"}
                            />
                          </div>

                          <div className="form-check form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="other"
                              onChange={handleChange}
                              checked={values.inlineRadioOptions === "other"}
                            />
                          </div>
                          {<p className={Style.error2}>{errors.inlineRadioOptions} </p>}
                        </div>
                      </div>
                   
                    <div className="row">
                    <div className="col-md-4 mb-1">
                    <div>
                    <label className={`form-label ${Style.label3}`}  for="form3Example1n1">
                              Country
                            </label>
                    </div> 
                            <select className={`select mx-2 ${Style.selectValue}`} name="country" onChange={handleChange}>
                              <option value="">Choose Your country</option>
                              <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Canada">Canada</option>
                            </select>
                            {<p className={Style.error}>{errors.country}</p>}
                          </div>
                     
                     

                          <div className="col-md-4 mb-1">
                          <div>
                          <label className={`form-label ${Style.label3}`} st for="form3Example1n1">
                              State
                            </label>
                          </div>
                           
                           
                            <select className={`select mx-2 ${Style.selectValue}`} name="state" onChange={handleChange}>
                              <option value="">Choose Your State</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Goa">Goa</option>
                              <option value="Bihar">Bihar</option>
                            </select>
                           { <p className={Style.error}>{errors.state}</p>}
                          </div>
                          <div className="col-md-4 mb-1">
                          <div>
                          <label className={`form-label ${Style.label3}`} for="form3Example1n1">
                              City
                            </label>
                          </div>
                            
                           
                            <select className={`select mx-2 ${Style.selectValue}`} name="city" onChange={handleChange}>
                              <option value="">Choose Your City</option>
                              <option value="Fatehabad">Fatehabad</option>
                              <option value="Hisar">Hisar</option>
                              <option value="Jind">Jind</option>
                              <option value="Bhattu">Bhattu</option>
                            </select>
                            {<p className={Style.error}>{errors.city}</p>}
                          </div>
                      </div>
                    
                        
                   
                    <div className="d-flex justify-content-center ">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button to={"/"}
                        type="submit"
                        className="btn btn btn-success btn-lg ms-2"
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
  )
}

export default Edit

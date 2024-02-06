import React,{useState} from 'react'
import Style from '../RegistrationAlert/RegistrationAlert.module.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const RegistrationAlert = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    qualification: [],
    gender: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirm_password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newValue = checked ? [...values[name], value] : values[name].filter((val) => val !== value);
      setValues({ ...values, [name]: newValue });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setSubmit(true);
   

    if (Object.keys(errors).length > 0) {
      let errorMessage = "";
      Object.keys(errors).forEach((key) => {
        errorMessage += `${errors[key]}\n`;
      });
      alert(errorMessage);
     
    } else {
      alert("Data saved successfully");
      navigate("/alertdata", { state: { formData: values } });
    }
  };

  const validate = (values) => {
    const errors = {};
    // const nameRegExp = /^[A-Z][a-z]*$/;
    const emailRegexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneNumberExp = /^\d{10}$/;
    // const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/;

    ///////////-----firstName------/////////
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First Name must be more than 3 characters!";
    } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) {
      errors.firstName = "First Name is not valid. Please enter only letters!";
    } else if (!/^[A-Z]/.test(values.firstName)) {
      errors.firstName = "First Name should start with a capital letter!";
    } else if (values.firstName.length > 20) {
      errors.firstName = "First Name cannot exceed 20 characters!";
    }

    ///////////-----lastName------/////////
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last Name must be more than 3 characters!";
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
      errors.lastName = "Last Name is not valid. Please enter only letters!";
    } else if (!/^[A-Z]/.test(values.lastName)) {
      errors.lastName = "Last Name should start with a capital letter!";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Last Name cannot exceed 20 characters!";
    }

    //  -------------email-------------
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!emailRegexExp.test(values.email)) {
      errors.email = "Please enter a valid email !";
    }

    //  ---------phoneNumber--------
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone-Number is required !";
    } else if (!phoneNumberExp.test(values.phoneNumber)) {
      errors.phoneNumber = "Phone-Number is not valid. Please enter only integer and 10 digits!";
    } else if (values.phoneNumber.length < 10) {
      errors.phoneNumber = "Phone-Number must be 10 digits!";
    } else if (values.phoneNumber.length > 10) {
      errors.phoneNumber = "Phone-Number must be only 10 digits!";
    }

    //  ----------Qualification------------
    if (values.qualification.length < 1) {
      errors.qualification = "Qualification is required !";
    }

    //  ---------------gender---------------
    if (!values.gender) {
      errors.gender = "Gender is require !";
    }

    //  -----------------Country--------------------
    if (!values.country) {
      errors.country = "Country is required !";
    }

    //  ------------State-----------
    if (!values.state) {
      errors.state = "State is required !";
    }

    //  ------------------City---------------------
    if (!values.city) {
      errors.city = "City is required !";
    }

    //  ------------------password--------------------
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    } else if (values.password.length > 15) {
      errors.password = "Password can not exceed more than 15 characters!";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase character!";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase character!";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain at least one number!";
    } else if (!/[^A-Za-z0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one special character!";
    }

    //  -------------confirm password---------
    if (!values.confirm_password) {
      errors.confirm_password = "Confirm-Password is required !";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Password and Confirm Password should be the same";
    }
    return errors;
  };
  return (
    <>
    <Header/>
      <section className=" gradient-custom">
        <div className="container py-2">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-lg-9 ">
            <h3 className="text-center mt-5">Registration Form  </h3>
            <p className="text-center">(with alert validation)</p>
              <div
                className={`card  card-registration ${Style.cardbg}`}
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-2 p-md-3">
                  <form onSubmit={handleSubmit} >
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
                          />
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
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
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
                                id="femaleGender"
                                value="female"
                                name="gender"
                                onChange={handleChange}
                                checked={values.gender === "female"}
                             
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
                              name="gender"
                              id="maleGender"
                              value="male"
                              onChange={handleChange}
                              checked={values.gender === "male"}
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
                              name="gender"
                              id="otherGender"
                              value="other"
                              onChange={handleChange}
                              checked={values.gender === "other"}
                            />
                          </div>
                         
                        </div>
                      </div>
                   
                    <div className="row">
                    <div className="col-md-4 mb-1">
                    <div>
                    <label className={`form-label ${Style.label3}`}  for="form3Example1n1">
                              Country
                            </label>
                    </div> 
                            <select className={`select mx-2 ${Style.selectValue}`} 
                            name="country" onChange={handleChange}
                            
                            >
                              <option value="">Choose Your country</option>
                              <option value="India">India</option>
                              <option value="China">China</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Canada">Canada</option>
                            </select>
                         
                          </div>
                     
                     

                          <div className="col-md-4 mb-1">
                          <div>
                          <label className={`form-label ${Style.label3}`} st for="form3Example1n1">
                              State
                            </label>
                          </div>
                           
                           
                            <select className={`select mx-2 ${Style.selectValue}`} 
                            name="state" 
                            onChange={handleChange} >
                              <option value="">Choose Your State</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Goa">Goa</option>
                              <option value="Bihar">Bihar</option>
                            </select>
                        
                          </div>
                          <div className="col-md-4 mb-1">
                          <div>
                          <label className={`form-label ${Style.label3}`} for="form3Example1n1">
                              City
                            </label>
                          </div>
                            
                           
                            <select className={`select mx-2 ${Style.selectValue}`} 
                            name="city"
                            onChange={handleChange}
                             >
                              <option value="">Choose Your City</option>
                              <option value="Fatehabad">Fatehabad</option>
                              <option value="Hisar">Hisar</option>
                              <option value="Jind">Jind</option>
                              <option value="Bhattu">Bhattu</option>
                            </select>
                           
                          </div>
                      </div>
                    
                        
                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <label className={`form-label ${Style.labelname}`} htmlFor="password">
                          Password
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                       
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <label className={`form-label ${Style.labelname}`} htmlFor="Confirmpassword">
                          Confirm password
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="confirm_password"
                            value={values.confirm_password}
                                onChange={handleChange}
                                name="confirm_password"
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                         
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 ">
                      <button type="button" className="btn btn-dark btn-lg" onClick={handleReset}> Reset</button>
                      <button type="submit"className="btn btn btn-success btn-lg ms-2">Submit</button>
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

export default RegistrationAlert

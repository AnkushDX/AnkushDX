import React, { useState,useEffect } from "react";
import Header from "../Header/Header";
import Style from "../LogIn/LogIn.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import LoginData from './Logindata.json'
import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';


const LogIn = () => {
  const navigate =useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
 

  useEffect(() => {
    const storedCredentials = localStorage.getItem('credentials');
    if (!storedCredentials) {
      navigate('/');
    }else{
      const { email, password } = JSON.parse(storedCredentials);
      setValues({ email, password });
      setRememberMe(true);
    }
  }, []);
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // console.log(values);
  };
const handleRememberMeChange =()=>{
  setRememberMe(!rememberMe)
 
}
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setSubmit(true);

    if (Object.keys(errors).length === 0) {
      const user=LoginData.find(user=>user.email === values.email && user.password === values.password)
      if (user){
        if(rememberMe){
          localStorage.setItem('credentials',JSON.stringify(values));
        }else{
        localStorage.removeItem('credentials')
        }
        // sessionStorage.setItem('user',JSON.stringify(user))
        toast.success("Login save successfully",{
          position:"top-center",
          autoClose:3000,
        
        });
        navigate('/user-details',{state:user})
    // console.log(user)
      }else{
        toast.error("Invalid email or password",{
          position:"top-center",
          autoClose:3000
        })
      }
      let errorMessage = "";
      Object.keys(errors).forEach((key) => {
        errorMessage += `${errors[key]}\n`;
      });
    }
  
  };

  const validate = (values) => {
    const errors = {};
    const emailRegexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;

    //  -------------email----------------
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegexExp.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }

    //  --------------password---------------
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    } else if (values.password.length > 15) {
      errors.password = "Password can not exceed more than 15 characters!";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password =
        "Password must contain at least one uppercase character!";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password =
        "Password must contain at least one lowercase character!";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain at least one number!";
    } else if (!/[^A-Za-z0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one special character!";
    }

    return errors;
  };
 
  return (
    <>
      <Header />
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className={`card ${Style.formbg}`}
                style={{ borderRadius: "1rem" }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className={`img-fluid ${Style.imglog}`}
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className={`h2 fw-bold mb-0 ${Style.logo}`}>
                            Logo-in
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example17">
                            Email
                          </label>
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                          />
                        </div>
                        <p className={Style.error}>{errors.email}</p>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                          <input
                          
                            id="form2Example27"
                            className="form-control form-control-lg"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                          />
                          <span className={Style.eyeicon} onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEye /> :  <FaEyeSlash />}
                          </span>
                         
                         
                         
                        </div>
                        <p className={Style.error}>{errors.password}</p>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rememberMeCheckBox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        
                         />
  
                        <label className="form-check-label" htmlFor="rememberMeCheckBox">
                        Remember me
                     </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className={`btn btn-dark btn-lg btn-block ${Style.log}`}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <ToastContainer/>

                        {/* <a className="small text-muted" href="#!">
                          Forgot password?
                        </a> */}
                        {/* <p
                          className="mb-5 pb-lg-2"style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}> Register here </a>
                        </p> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;

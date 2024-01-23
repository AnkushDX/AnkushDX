import React from "react";
import { Formik, useFormik } from 'formik';
import { SignupSchema } from '../../schemas';
import Style from "../Registration/Registration.module.css"
import {useNavigate} from 'react-router-dom'
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inlineRadioOptions: '',
    password: '',
    confirm_password: ''
}
const Registration = () => {
  const navigate = useNavigate();
    const { values, errors, handleChange, handleSubmit, handleReset, handleInputBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            alert("Data saved successfully");
            resetForm();
            navigate('/submitted',{state:{formData:values}})
        }
    })
    console.log(navigate)

    return (
        <>
            <section className=" gradient-custom">
                <div className="container py-2">
                    <div className="row justify-content-center align-items-center ">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: "15px" }}>
                                <div className="card-body p-2 p-md-3">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">
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
                                                    <label className="form-label" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleInputBlur}
                                                        className={`form-control form-control-lg ${Style.inputtext}`}/>
                                                    {<p className={Style.error}>{errors.lastName}</p>}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6  ">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">
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
                                                    <label className="form-label" htmlFor="phoneNumber">
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
                                            <div className="row">
                                                <label className="form-label select-label">
                                                    Qulification
                                                </label>
                                                <div className="col-6">

                                                    <select className={`select form-control-lg ${Style.selectF}`}>
                                                        <option value="1">10th</option>
                                                        <option value="2">12th</option>
                                                        <option value="3">Beachelers</option>
                                                        <option value="4">Master's</option>
                                                    </select>

                                                </div>
                                                <div className="col-md-6 mb-1">
                                                    <h6 className="mb-1 pb-1">Gender: </h6>
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
                                                            checked={values.inlineRadioOptions === 'female'}
                                                        />
                                                    {<p className={Style.error}>{errors.inlineRadioOptions}</p>}

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
                                                            checked={values.inlineRadioOptions === 'male'}
                                                        />
                                                    {<p className={Style.error}>{errors.inlineRadioOptions}</p>}

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
                                                            checked={values.inlineRadioOptions === 'other'}
                                                        />
                                                    {<p className={Style.error}>{errors.inlineRadioOptions}</p>}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row">
                                                <label className="form-label select-label">
                                                    Country
                                                </label>
                                                <div className="col-6">
                                                    <select className={`select form-control-lg ${Style.selectF}`}>
                                                        <option value="1">India</option>
                                                        <option value="2">China</option>
                                                        <option value="3">Pakistan</option>
                                                        <option value="4">Bangladesh</option>
                                                        <option value="5">Nepal</option>
                                                    </select>

                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label select-label">
                                                      State
                                                    </label>
                                                    <select className={`select form-control-lg ${Style.selectF}`}>
                                                        <option value="1">Haryana</option>
                                                        <option value="2">Punjab</option>
                                                        <option value="3">Rajsthan</option>
                                                        <option value="4">Mumbai</option>
                                                        <option value="5">Himachal Pardesh</option>
                                                    </select>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <label className="form-label select-label">
                                                City
                                            </label>
                                            <div className="row">
                                                <div className="col-6">
                                                    <select className={`select form-control-lg ${Style.selectF}`}>
                                                        <option value="1">Fatehabad</option>
                                                        <option value="2">Hisar</option>
                                                        <option value="3">Ambala</option>
                                                        <option value="4">Sirsa</option>
                                                        <option value="5">Jind</option>
                                                    </select>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mt-2">
                                            <label className="form-label" htmlFor="password">
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
                                                    {<p className={Style.error}>{errors.password}</p>}
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                            <label className="form-label" htmlFor="Confirmpassword">
                                                        Confirm password
                                                    </label>
                                                <div className="form-outline">
                                                    <input
                                                        type="password"
                                                        id="confirm_password"
                                                        name="confirm_password"
                                                        value={values.confirm_password}
                                                        onChange={handleChange}
                                                        className={`form-control form-control-lg ${Style.inputtext}`}
                                                    />
                                                    {<p className={Style.error}>{errors.confirm_password}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-light btn-lg" onClick={handleReset}>Reset all</button>
                                            <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
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

export default Registration;
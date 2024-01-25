import React from 'react'
import Style from '../RegistrationAlert/RegistrationAlert.module.css'

const RegistrationAlert = () => {
   
  return (
    <>
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
                  <form >
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
                              value="10th"
                            
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
                              name="inlineRadioOptions"
                              id="inlineRadioOptions"
                              value="female"
                             
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
                            <select className={`select mx-2 ${Style.selectValue}`} name="country" >
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
                           
                           
                            <select className={`select mx-2 ${Style.selectValue}`} name="state" >
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
                            
                           
                            <select className={`select mx-2 ${Style.selectValue}`} name="city" >
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
                            name="confirm_password"
                            
                            className={`form-control form-control-lg ${Style.inputtext}`}
                          />
                         
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg"
                       
                      >
                        Reset
                      </button>
                      <button
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

export default RegistrationAlert

import React from 'react'
import Style from "../RegistrationData/RegistrationData.module.css"
import { useLocation, useNavigate } from 'react-router-dom'

const RegistrationData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formData=location.state?.formData || {}
  const handleReset=()=>{
    navigate('/')
  }
 
  return (
    <>
   
    <h2 className={Style.heading}>All RegistrationData</h2>
      <div>
        <strong>First Name:</strong>{formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong>{formData.lastName}
      </div>
      <div>
        <strong>Email:</strong>{formData.email}
      </div>
      <div>
        <strong>Phone:</strong>{formData.phoneNumber}
      </div>
      <div>
        <strong>Qulification:</strong>{formData.qualification}
      </div>
      <div>
        <strong>Gender:</strong>{formData.inlineRadioOptions}
      </div>
      <div>
        <strong>Country:</strong>{formData.country}
      </div>
      <div>
        <strong>State:</strong>{formData.state}
      </div>
      <div>
        <strong>City:</strong>{formData.city}
      </div>
      <div>
        <strong>Password:</strong>{formData.password}
      </div>
   
 
    
      <button type="button" className="btn btn-success btn-lg" onClick={handleReset}>Back</button>
    </>
  )
}

export default RegistrationData

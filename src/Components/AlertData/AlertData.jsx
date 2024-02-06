import React from 'react'
import Style  from "../AlertData/AlertData.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
const AlertData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData=location.state?.formData || {}
  const handleReset=()=>{
    navigate('/alert')
  }
  return (
    <>
       <h2 className={Style.heading}>Alert Registration Data</h2>
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
        <strong>Gender:</strong>{formData.gender}
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

export default AlertData

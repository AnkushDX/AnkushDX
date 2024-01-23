import React from 'react'
import { useLocation } from 'react-router-dom'

const RegistrationData = () => {
  const location = useLocation();
  const formData=location.state?.formData || {}
 
  return (
    <>
      <h2>All RegistrationData</h2>
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
        <strong>Qulification:</strong>{formData.inlineRadioOptions2}
      </div>
      <div>
        <strong>Gender:</strong>{formData.inlineRadioOptions}
      </div>
      <div>
        <strong>Password:</strong>{formData.password}
      </div>
      <div>
        <strong>Confirm-Password:</strong>{formData.confirm_password}
      </div>
    
    </>
  )
}

export default RegistrationData

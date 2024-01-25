import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(25).matches(/^[A-Z][a-zA-Z]*$/, '1st letter must be capital').required("Please enter your name"),
    lastName: Yup.string().min(2).max(25).matches(/^[A-Z][a-zA-Z]*$/, '1st letter must be capital').required("Please enter your name"),
    email: Yup.string().email().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email').required("Please enter your Email"),
    inlineRadioOptions: Yup.string().required("Gender is required"),
    qualification: Yup.array().required("Qualification is required"),
    country: Yup.string().required("Choose your country"),
    state: Yup.string().required("Choose your state"),
    city: Yup.string().required("Choose your city "),
    phoneNumber: Yup.string().min(10).matches(/^[0-9]{10}$/, 'Invalid phone number').required("Please enter your Phone number"),
    password: Yup.string().min(6).required("Please enter your password").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/,'Password must contain at least one lowercase letter, one uppercase letter, one digit','one special charecter'),
    confirm_password: Yup.string().required("Please re-enter your password").oneOf([Yup.ref("password"), null], "Password mismatch error"),
})
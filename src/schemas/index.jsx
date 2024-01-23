import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(25).matches(/^[A-Z][a-zA-Z]*$/, '1st letter must be alphabet').required("please enter your name"),
    lastName: Yup.string().min(2).max(25).matches(/^[A-Z][a-zA-Z]*$/, '1st letter must be alphabet').required("please enter your name"),
    email: Yup.string().email().required("please enter your Email"),
    inlineRadioOptions: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string().min(10).matches(/^[0-9]{10}$/, 'Invalid phone number').required("please enter your Phone number"),
    password: Yup.string().min(6).required("please enter your password").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[@#$%^&+=])(?=\S+$).{6,}$/,'Password must contain at least one lowercase letter, one uppercase letter, one digit'),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "password mustmatch"),
})
import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be atleast 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password cannot exceed 50 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Please confirm your password"),
});

export default signupSchema;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import signupSchema from "../validation/signupSchema";
import { handleFormError } from "../utils";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(signupSchema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth,
  );
  const password = watch("password", "");

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
      reset();
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Create your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit, handleFormError)} noValidate>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400" />
              <input
                id="name"
                type="text"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`appearance-none rounded-none relative block w-full px-10 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 transition-colors duration-200 sm:text-sm`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400" />
              <input
                id="email"
                type="email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`appearance-none rounded-none relative block w-full px-10 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 transition-colors duration-200 sm:text-sm`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400" />
              <input
                id="password"
                type="password"
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`appearance-none rounded-none relative block w-full px-10 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 transition-colors duration-200 sm:text-sm`}
                placeholder="********"
              />
            </div>
            {errors.password && (
              <p id="password-error" className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                aria-describedby={
                  errors.confirmPassword ? "confirmPassword-error" : undefined
                }
                className={`appearance-none rounded-none relative block w-full px-10 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 transition-colors duration-200 sm:text-sm`}
                placeholder="********"
              />
            </div>
            {errors.confirmPassword && (
              <p
                id="confirmPassword-error"
                className="mt-2 text-sm text-red-600"
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading || isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

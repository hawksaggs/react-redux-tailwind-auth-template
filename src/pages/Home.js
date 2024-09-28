import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">Welcome to MyApp</h1>
      <p className="text-lg">
        This is the home page. Please login or signup to continue.
      </p>
    </div>
  );
};

export default Home;

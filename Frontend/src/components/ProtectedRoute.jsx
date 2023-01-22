import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token, isAuthenticated, setIsAuthenticated } =
    useContext(AuthProvider);
  const validateUser = async () => {
    try {
      if (token) {
        console.log("token is ", token);
        const response = await axios.get(
          "http://localhost:8000/api/v1/validate",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("validateUser");
        console.log(response);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  if (token) {
    validateUser();
    if (isAuthenticated) {
      return children;
    } else {
      <Navigate to='/login' />;
    }
  }
};

export default ProtectedRoute;

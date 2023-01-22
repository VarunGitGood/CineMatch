import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthProvider);
  const [isValidUser, setIsValidUser] = useState(false);
  const validateUser = async () => {
    try {
      if (token) {
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
        if (response.status === 200) {
          setIsValidUser(true);
        }
      }
    } catch (error) {
      console.log(error);
      setIsValidUser(false);
    }
  };

  if (token) {
    validateUser();
    if (isValidUser) {
      return children;
    } else {
      <Navigate to='/login' />;
    }
  }
  return <Navigate to='/login' />;
};

export default ProtectedRoute;

import { createContext, useEffect, useState } from "react";
export const AuthProvider = createContext();

const AuthContextProvide = (props) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token", token)) {
      setToken(localStorage.getItem("token", token));
    } else {
      setToken(null);
    }
  }, [token]);
  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem("token", token);
  //   }
  // }, [isAuthenticated]);
  return (
    <AuthProvider.Provider
      value={{
        token,
        isAuthenticated,
        setIsAuthenticated,
        setToken,
      }}
    >
      {props.children}
    </AuthProvider.Provider>
  );
};
export default AuthContextProvide;

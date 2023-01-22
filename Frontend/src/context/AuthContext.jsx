import { createContext, useEffect, useState } from "react";
export const AuthProvider = createContext();

const AuthContextProvide = (props) => {
  const [token, setToken] = useState(null);
  return (
    <AuthProvider.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </AuthProvider.Provider>
  );
};
export default AuthContextProvide;

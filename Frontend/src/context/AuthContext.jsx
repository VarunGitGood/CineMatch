import { createContext, useEffect, useState } from "react";
export const AuthProvide = createContext();

const AuthContextProvide = (props) => {
  const [token, setToken] = useState(null);
  return (
    <AuthProvide.Provider
      value={{
        token,
      }}
    >
      {props.children}
    </AuthProvide.Provider>
  );
};
export default AuthContextProvide;

import React from "react";
import { useContext } from "react";
import { themeProvider } from "../context/themeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(themeProvider);
  return (
    <nav className='grid grid-cols-2 place-content-between items-center p-10'>
      <h4>home</h4>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className='self-left justify-self-end'
      >
        change theme
      </button>
    </nav>
  );
};
export default Navbar;

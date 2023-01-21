import React from "react";

 const Navbar = (props) => {
  return (
    <nav className='grid grid-cols-2 place-content-between items-center p-10'>
      <h4>home</h4>
      <button
        onClick={() => {
          props.darkMode.toggleTheme();
        }}
        className='self-left justify-self-end'
      >
        change theme
      </button>
    </nav>
  );
};
export default Navbar;
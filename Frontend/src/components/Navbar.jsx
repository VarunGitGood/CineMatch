import React from "react";
import { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = (props) => {
  const { hamburger, sethamburger } = useState(false);

  function handlehamburger() {
    sethamburger(!hamburger);
  }

  return (
    <nav
      class="
          flex flex-wrap
          items-center
          w-full
          py-4
          md:py-5
          px-4
          text-lg text-gray-700
          bg-white
        "
    >
      <div>
      
      </div>

    
      <img src={logo}/>

      <div className={`${hamburger && hidden} w-full md:flex md:items-center md:w-auto`} id="menu" >
        <ul
          class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
         
          
        
          {/* <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
              Blog
            </a>
          </li>
          <li>
            <a
              className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
              href="#"
            >
              Sign Up
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

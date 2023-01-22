import React from "react";
import { useContext, useState } from "react";
import { themeProvider } from "../context/themeContext";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { theme, toggleTheme } = useContext(themeProvider);
  const [hamburger, setHamburger] = useState(true);
  return (
    <nav
      className='
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          mt-3
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          dark:bg-[#121212]
          dark:text-gray-200
          h-16
        '
    >
      <div>
        <Link to='/'>
          <img src={logo} alt='' className='' />
        </Link>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='menu-button'
        className='h-6 w-6 cursor-pointer md:hidden block'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>

      <div
        className={`${
          hamburger && "hidden"
        } w-full md:flex md:items-center md:w-auto bg-white dark:bg-[#121212]`}
        id='menu'
      >
        <ul
          className='
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0'
        >
          <li>
            <a
              className='md:p-4 py-2 block hover:text-purple-400 dark:text-white '
              href='#'
            >
              Features
            </a>
          </li>
          <li>
            <a
              className='md:p-4 py-2 block hover:text-purple-400 dark:text-white'
              href='#'
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className='md:p-4 py-2 block hover:text-purple-400 dark:text-white'
              href='#'
            >
              Customers
            </a>
          </li>
          <li>
            <a
              className='md:p-4 py-2 block hover:text-purple-400 dark:text-white'
              href='#'
            >
              Blog
            </a>
          </li>
          <Link to='/signup'>
            <a
              className='md:p-4 py-2 block hover:text-purple-400 text-purple-500'
              href='#'
            >
              Sign Up
            </a>
          </Link>
          <li>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme == "dark" ? "#121212" : "#fff",
                color: theme == "dark" ? "#fff" : "#121212",
              }}
            >
              <IconButton
                onClick={toggleTheme}
                color='inherit'
                sx={
                  theme == "dark"
                    ? {
                        bgcolor: "#121212",
                        color: "#fff",
                        marginTop: "0.5rem",
                        "&:hover": {
                          bgcolor: "background.default",
                          color: "text.primary",
                        },
                      }
                    : {
                        bgcolor: "background.default",
                        color: "text.primary",
                        marginTop: "0.5rem",
                        "&:hover": {
                          bgcolor: "background.default",
                          color: "text.primary",
                        },
                      }
                }
              >
                {theme == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

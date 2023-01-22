import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import profileBG from "../assets/profile-bg.webp";
const Profile = () => {
  const { token } = useContext(AuthProvider);
  if (token)
    return (
      <>
        <Navbar />
        <div className='m-10 pb-12 border bg-white dark:bg-[#121212] '>
          <img src={profileBG} alt='' className='w-full h-40 border bg-cover' />
          <div className='flex flex-col items-center'>
            <img
              className='w-20 h-24 mt-8 ml-4 rounded-full border-1 border-purple-800'
              src='https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png'
              alt='Profile image'
            />
            <h1 className='p-2 text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
              Varun Singh
            </h1>
            <div className='mt-2'>
              <span className='font-semibold dark:text-purple-700'>Email:</span>
              <span className='dark:text-white'>varun_L@gmail.com</span>
            </div>
            <div className='mt-2'>
              <span className='font-semibold dark:text-purple-700'>
                Member since:
              </span>
              <span className='dark:text-white'> 13 jan</span>
            </div>
            <div className='mt-6'>
              <Link
                to='/create-bootcamp'
                className='primary-s-btn md:primary-btn'
              >
                Create bootcamp
              </Link>
              <Link to='/login' className=' secondary-s-btn md:secondary-btn'>
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  else {
    <Navigate to='/login' />;
  }
};

export default Profile;

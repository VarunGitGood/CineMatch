import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function homePage() {
  const navigate = useNavigate();

  return (
    <div className="static...">
      <Navbar />

      <div className="flex items-center justify-center h-screen">
        <div className="w-200 h-200 bg-primary-200 p-4">
            <div className="p-6">
              <h1 className="font-extrabold text-5xl">Welcome to my App</h1>
              <div className="pl-20 ml-20" >
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-4 "
                onClick={function (event) {
                  navigate("/login");
                }}
              >
                Get Started
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

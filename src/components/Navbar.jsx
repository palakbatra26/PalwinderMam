import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="transition-all duration-300">
      <div className="w-full">
        <img
          src="https://gndec.ac.in/sites/default/logo.png"
          alt="Top Banner"
          className="w-full object-cover"
        />
      </div>

      <div
        className="navbar shadow-sm text-white transition-all duration-300"
        style={{ backgroundColor: "rgb(139, 0, 0)" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow"
              style={{ backgroundColor: "rgb(139, 0, 0)", color: "white" }}
            >
              <li><a onClick={handleLogoClick} className="font-bold hover:text-yellow-300">Home</a></li>
              <li><Link to={"/faculty"} className="font-bold hover:text-yellow-300">Faculty</Link></li>
              <li><Link to={"/feestructure"} className="font-bold hover:text-yellow-300">Fee Structure</Link></li>
              <li><Link to={"/messmenu"} className="font-bold hover:text-yellow-300">Mess Info</Link></li>
              <li><Link to={"/facilities"} className="font-bold hover:text-yellow-300">Facilities</Link></li>
              <li><Link to="/Studentcomitte" className="font-bold hover:text-yellow-300">Student Committee</Link></li>
              <li><a className="font-bold hover:text-yellow-300">Room Allotment</a></li>
              <li><Link to="/QueryForm" className="font-bold hover:text-yellow-300">Query Form </Link></li>
              <li><Link to="/helpline" className="font-bold hover:text-yellow-300">Helpline No</Link></li>
              <li><Link to="/notifications" className="font-bold hover:text-yellow-300">Notifications </Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a onClick={handleLogoClick} className="font-bold hover:text-yellow-300">Home</a></li>
            <li><Link to={"/faculty"} className="font-bold hover:text-yellow-300">Faculty</Link></li>
            <li><Link to={"/feestructure"} className="font-bold hover:text-yellow-300">Fee Structure</Link></li>
            <li><Link to={"/messmenu"} className="font-bold hover:text-yellow-300">Mess Info</Link></li>
            <li><Link to={"/facilities"} className="font-bold hover:text-yellow-300">Facilities</Link></li>
            <li><Link to="/Studentcomitte" className="font-bold hover:text-yellow-300">Student Committee</Link></li>
            <li><a className="font-bold hover:text-yellow-300">Room Allotment</a></li>
            <li><Link to="/QueryForm" className="font-bold hover:text-yellow-300">Query Form</Link></li>
            <li><Link to="/helpline" className="font-bold hover:text-yellow-300">Helpline No</Link></li>
            <li><Link to="/notifications" className="font-bold hover:text-yellow-300">Notifications </Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Removed the dark mode toggle */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
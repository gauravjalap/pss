import React from "react";
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-lg shadow w-full z-50">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center md:items-center md:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-md md:text-xl font-semibold whitespace-nowrap text-gray-800">
              PSS Foundation
            </span>
          </Link>
          <ul className="flex flex-col md:flex-row md:flex-wrap items-center mb-4 text-sm font-medium text-gray-600 sm:mb-0 px-4">
            <li className="mb-2 sm:mb-0 sm:mr-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-4">
              <Link to="/mission" className="hover:underline">
                Mission
              </Link>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-4">
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-4">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-sm text-center sm:text-left">
            <div>paramhansshikshansansthann@gmail.com</div>
            <div>+91-7860373114</div>
          </div>
        </div>
        <hr className="my-2 sm:mx-auto lg:my-4" />
        <span className="block text-sm text-gray-500 text-center">
          ©2024 PSS Foundation™ All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

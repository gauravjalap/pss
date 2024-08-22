import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; // Import burger icon
import { AiOutlineClose } from "react-icons/ai"; // Import close icon
import Popup from "../display/PopUp";
import logo from "../../assets/images/logo.png";
import { RiMenu4Line } from "react-icons/ri";

const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  const pathName = location.pathname;

  const checkPath = (path) => {
    return path === pathName;
  };

  const activePath = (path) => {
    if (checkPath(path)) {
      return "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-teal-700 font-bold";
    } else {
      return "text-gray-600 hover:text-blue-600 transition-all ease-in-out duration-300 font-semibold";
    }
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src={logo}
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
              alt="Paramhansh Siksha Sansthan Logo"
            />
          </div>
          <div>
            <h1 className="text-sm sm:text-xl font-semibold text-gray-800">
              PSS Foundation
            </h1>
          </div>
        </div>

        {/* Mobile Menu Toggle (burger menu) */}
        <div className="md:hidden">
          {!isMobileMenuOpen ? (
            <RiMenu4Line
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        {/* Mobile Menu Content (conditionally rendered) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center text-center">
            <AiOutlineClose
              className="absolute top-4 right-4 text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
            <ul className="space-y-4">
              <li className={activePath("/")}>
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li className={activePath("/mission")}>
                <Link to="/mission" onClick={toggleMobileMenu}>
                  Mission
                </Link>
              </li>
              {/* <li className={activePath("/news")}>
                <Link to="/news" onClick={toggleMobileMenu}>
                  News
                </Link>
              </li> */}
              <li className={activePath("/about")}>
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li className={activePath("/contact")}>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
              {/* Donate Button in Mobile Menu */}
              <li>
                <div
                  onClick={openPopup}
                  className="text-white text-sm bg-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300"
                >
                  Donate
                </div>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Menu (hidden on smaller screens) */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6 items-center">
            <li className={activePath("/")}>
              <Link to="/">Home</Link>
            </li>
            <li className={activePath("/mission")}>
              <Link to="/mission">Mission</Link>
            </li>
            {/* <li className={activePath("/news")}>
              <Link to="/news">News</Link>
            </li> */}
            <li className={activePath("/about")}>
              <Link to="/about">About</Link>
            </li>
            <li className={activePath("/contact")}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Donate Button (visible on desktop) */}
        <div className="hidden md:flex items-center">
          <div
            onClick={openPopup}
            className="flex text-white justify-center items-center text-sm bg-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300"
          >
            Donate
          </div>
        </div>

        {/* Popup for Donate */}
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </nav>
  );
};

export default NavBar;

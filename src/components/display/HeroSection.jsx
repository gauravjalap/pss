import React, { useState } from "react";
import Popup from "./PopUp";
import logo from "./../../assets/images/logo.png";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="m-4 mt-10 sm:max-w-[90%] md:max-w-[60%] lg:max-w-[60%] flex flex-col md:flex-row justify-between mx-auto border-b-2 pb-4">
      <div className="flex flex-col mt-6 justify-center items-center md:items-start">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome To!").start();
          }}
        />
        <p className="text-4xl text-center font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Paramhansh Siksha Sansthan
        </p>
        <div className="text-sm font-semibold mt-2">
          Education, Training, Scholarship and Assistance
        </div>
        <div
          onClick={openPopup}
          className="mt-4 text-white w-32 flex justify-center items-center text-sm bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300"
        >
          <p className="text-center">Donate</p>
        </div>
      </div>

      <div className="mt-6 md:mt-0 rounded-md p-2 flex justify-center items-center">
        <img
          src={logo}
          className="h-36 w-36 object-contain"
          alt="Paramhansh Siksha Sansthan Logo"
        />
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default HeroSection;

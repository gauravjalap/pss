import React from "react";
import { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FcDonate } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import Popup from "../display/PopUp";
const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleOpenClose = () => {
    setIsOpen((prev) => !prev);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="z-100">
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      <div
        className={` fixed flex flex-col justify-center items-center right-0 sm:right-2 bottom-2 z-20 p-4`}
      >
        {isHovered && (
          <div className="text-[10px] absolute -top-4 font-bold text-white bg-black p-2 rounded-md">
            Donate
          </div>
        )}

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openPopup}
          className="mb-2 p-2 rounded-full bg-blue-700 hover:cursor-pointer shadow-xl"
        >
          <div className="text-xl">
            <FcDonate />
          </div>
        </div>
        <div
          className={`${
            !isOpen && "hidden"
          } flex flex-col items-center text-xl`}
        >
          <Link
            to={"https://flowbite.com/docs/components/tooltips/"}
            target="blank"
            className="p-2 rounded-full bg-white bg-opacity-50 shadow-lg mb-2"
          >
            <BiLogoGmail className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
          </Link>
          <Link className="p-2 rounded-full bg-white bg-opacity-50 shadow-lg mb-2">
            <RiWhatsappFill className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
          </Link>
          <Link className="p-2 bg-white bg-opacity-50 rounded-full  shadow-lg mb-2">
            <FaInstagram className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
          </Link>
          <Link className="p-2 bg-white bg-opacity-50 rounded-full  shadow-lg mb-2">
            <FaFacebook className="text-md  cursor-pointer transition-all ease-in-out duration-500" />
          </Link>
          <Link className="p-2  bg-white bg-opacity-50 rounded-full shadow-lg mb-2">
            <FaXTwitter className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
          </Link>
          <Link className="p-2 bg-white bg-opacity-50 rounded-full shadow-lg mb-2">
            <FaLinkedin className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
          </Link>
        </div>
        <div>
          <div
            onClick={toggleOpenClose}
            className="p-2 bg-white bg-opacity-50 rounded-full shadow-xl text-xl"
          >
            <FaPlus
              className={`text-md cursor-pointer transition-transform ease-in-out duration-500 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

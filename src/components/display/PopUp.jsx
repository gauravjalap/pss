import React from "react";
import qr from "../../assets/images/qr.png";
const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-gray-600 hover:text-gray-900 hover:font-bold transition-all ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center">
          <img src={qr} alt="" />
        </div>
        <div className="text-center">
          <div>Scan the QR Code to Donate</div>
          <div className="font-bold">PSS Foundation</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

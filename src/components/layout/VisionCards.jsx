import React from "react";

const VisionCard = ({ Image, valueTitle, valueDesc }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-blue-900 bg-opacity-80 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01] hover:bg-opacity-75 m-2 hover:border border-slate-600">
      <a href="#">
        <img className="rounded-t-lg w-full" src={Image} alt="" />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight">
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-transparent bg-clip-text">
              {valueTitle}
            </span>
          </h5>
        </a>
        <p className="mb-2 text-gray-200">{valueDesc}</p>
      </div>
    </div>
  );
};

export default VisionCard;

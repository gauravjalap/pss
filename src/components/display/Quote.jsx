import React from "react";

const Quote = ({ author, description }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="rounded-lg w-full sm:max-w-2xl text-center p-4">
        <p className="text-md sm:text-xl font-semibold italic text-white">
          {description}
        </p>
        <p className="text-sm sm:text-md text-slate-200">— {author}</p>
      </div>
    </div>
  );
};

export default Quote;

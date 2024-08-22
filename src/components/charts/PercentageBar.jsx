import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const PercentageBar = ({ percent }) => {
  const percentage = percent;
  return (
    <div className="w-20 flex justify-center mx-auto">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};

export default PercentageBar;

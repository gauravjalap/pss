import React from "react";

const MissionCard = ({ icon, missionName, customClass }) => {
  return (
    <div
      className={`${customClass} border-2 w-full sm:w-48 rounded-xl text-white mb-2 flex-col justify-center items-center p-4`}
    >
      {icon}
      <div className="text-[12px] font-semibold mt-2 text-center">
        {missionName}
      </div>
    </div>
  );
};

export default MissionCard;

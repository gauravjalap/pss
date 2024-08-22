import React from "react";
// TODO: Make a component for social media icons
const SocialMediaIcon = ({ icon, link, className }) => {
  return (
    <div className="p-2 rounded-full border-2 hover:shadow-lg">
      <FaInstagram className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
    </div>
  );
};

export default SocialMediaIcon;

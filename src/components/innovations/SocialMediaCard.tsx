import React from "react";

interface Props {
  image: string;
  platform: string;
  username: string;
}

const SocialMediaCard = ({ image, platform, username }:Props) => {
  return (
    <div className="bg-white  rounded-lg p-4 max-w-md">
      <img src={image} alt={platform} className="w-full rounded-lg" />
      <p className="text-center text-gray-700 mt-2 text-sm sm:text-base md:text-lg">{platform}</p>
      <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg">{username}</p>
    </div>
  );
};
export default SocialMediaCard
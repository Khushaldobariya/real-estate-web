import React from "react";

interface Props {
  image: string;
  platform: string;
  username: string;
}

const SocialMediaCard = ({ image, platform, username }:Props) => {
  return (
    <div className="bg-white  rounded-lg p-4 max-w-sm">
      <img src={image} alt={platform} className="w-full rounded-lg" />
      <p className="text-center text-gray-700 mt-2">{platform}</p>
      <p className="text-center text-gray-500">{username}</p>
    </div>
  );
};
export default SocialMediaCard
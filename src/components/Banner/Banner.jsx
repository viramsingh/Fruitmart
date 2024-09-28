import React from "react";

const Banner = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full h-64 mb-8">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-secondary">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;

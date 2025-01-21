import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-background-lighter rounded-[14px] shadow-sn px-[18px] py-6 border border-gray-200 text-left transition-transform transform hover:scale-105">
      <div className="mb-4 text-orange-500 text-5xl">
        {icon}
      </div>
      <h3 className="text-2xl sm:text-[32px] font-semibold text-text-black pb-4 pt-6">
        {title}
      </h3>
      <p className="text-text-black font-normal text-sm sm:text-base md:text-[19px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

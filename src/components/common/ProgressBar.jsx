import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="relative w-full h-3 bg-[#EDECEC] rounded-md mb-5">
      <div
        className="relative h-3 bg-text-orange rounded-md animate-progress"
        style={{
          maxWidth: `${value}%`,
          animation: `progressAnimation 1.5s cubic-bezier(1, 0.2, 0.2, 1) forwards`,
        }}
      >
        <span className="absolute w-7 h-7 shadow-lg bg-[#EDECEC] border-[3px] border-text-orange rounded-full top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2"></span>
      </div>
    </div>
  );
};

export default ProgressBar;

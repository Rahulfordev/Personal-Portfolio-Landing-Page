import React from "react";

const Description = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`font-normal text-text-black dark:text-text-white text-base sm:text-[21px] max-w-[880px] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Description;

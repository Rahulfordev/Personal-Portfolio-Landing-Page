import React from "react";

const Title = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`font-semibold text-text-black dark:text-text-white 
    text-[40px] sm:text-[50px] md:text-[55px] lg:text-[65px] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Title;

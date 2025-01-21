import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "";
  const variants = {
    primary:
      "font-normal text-base rounded-md text-text-white bg-text-orange py-[17px] px-10 sm:text-[21px] hover:bg-orange-600 transition",
    secondary: "",
    danger: "",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

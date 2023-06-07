import React from "react";

const Button = ({ label, ...props }) => {
  return (
    <button
      className="bg-grn hover:bg-grnh px-4 py-[6px] rounded-[0.2rem] cursor-pointer text-white active:scale-110 duration-300"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

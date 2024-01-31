import React from "react";

const Button = ({ text, icon, customClass }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs justify-center text-gray-200 w-32  ${customClass}`}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;

import React from "react";

const Button = ({ text, icon, customClass }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm ${customClass}`}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;

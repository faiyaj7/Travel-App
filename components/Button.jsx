import Image from "next/image";
import React from "react";

const Button = ({ type, label, icon, variant }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full py-2 px-4 ${variant} `}
    >
      {icon && <Image src={icon} alt={label} width={24} height={24} />}
      {label}
    </button>
  );
};

export default Button;

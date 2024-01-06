import React from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "lg:text-[24px] text-[16px] font-[600] bg-white   cursor-text lg:border-b-4 border-b-2  border-b-secondary",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Title;

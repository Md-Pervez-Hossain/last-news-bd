import React from "react";
import { twMerge } from "tailwind-merge";
const Container = ({ children, className }) => {
  return (
    <div className={twMerge("w-11/12 mx-auto  ", className)}>{children}</div>
  );
};
export default Container;

import { twMerge } from "tailwind-merge"
import React from 'react';
export const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        " bg-primary  px-10 py-2 text-white  rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
};

export const PrimaryButtonWithIcons = ({
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        " bg-primary text-[16px] px-4 py-2 flex items-center gap-3  text-white rounded-lg",
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};
import React from 'react';
import { twMerge } from "tailwind-merge"

const Title = ({ children, className }) => {
  return (
    <button className={twMerge("text-[24px] font-[600] bg-white py-2  cursor-text border-b-4  border-b-secondary", className)} >
      {children}
    </button>

  )
}
export default Title
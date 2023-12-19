import React from 'react';
import { twMerge } from "tailwind-merge"

const Title = ({ children, className }) => {
  return (
    <div className={twMerge("text-[32px] font-[600]", className)} >
      {children}
    </div>

  )
}
export default Title
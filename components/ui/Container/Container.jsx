import React from 'react';
import { twMerge } from "tailwind-merge"
const Container = ({ children, className }) => {
  return (
    <div className={twMerge("w-11/12 mx-auto  px-4 md:px-8 ", className)} >
      {children}
    </div>
  )
}
export default Container
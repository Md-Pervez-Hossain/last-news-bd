import React from "react";
import Link from "next/link";
const FooterBottom = () => {
  return (
    <div>
      <div className="flex items-center  justify-center lg:mt-8 ">
        <ul className="flex items-center flex-col lg:flex-row text-white lg:gap-5 gap-3">
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            {" "}
            Main Page
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            Archive
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            Media Gallery
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            <Link href="/advertisement">Advertisement</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center  justify-center  text-[#8B8B8B] my-5">
        <div className="flex flex-col lg:flex-row items-center  lg:gap-5 gap-3 text-center  ">
          <p>copyright © 2023 Last News BD</p>
          <span className="w-[1px] h-[20px] bg-[#8B8B8B] hidden lg:flex "></span>
          <p>
            Developed By :
            <span className="text-white font-[600]">Silicornya Limited</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

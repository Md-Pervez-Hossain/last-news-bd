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
            মূল পৃষ্ঠা
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            আর্কাইভ
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            <Link href="/contact">যোগাযোগ</Link>
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            মিডিয়া গ্যালারি
          </li>
          <span className="w-2 h-2 bg-[#8B8B8B] rounded-full hidden lg:flex "></span>{" "}
          <li className="hover:text-secondary  cursor-pointer transition-all duration-300 ease-in-out">
            <Link href="/advertisement">বিজ্ঞাপন</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center  justify-center  text-[#8B8B8B] my-5">
        <div className="flex flex-col lg:flex-row items-center  lg:gap-5 gap-3 text-center  ">
          <p>কপিরাইট © ২০২৩ লাস্ট নিউজ বিডি</p>
          <span className="w-[1px] h-[20px] bg-[#8B8B8B] hidden lg:flex "></span>
          <p>
            তৈরি করেছে :
            <span className="text-white font-[600]"> Silicornya Limited</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

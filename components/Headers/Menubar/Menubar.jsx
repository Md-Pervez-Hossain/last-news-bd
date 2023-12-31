"use client";
import Container from "@/components/ui/Container/Container";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PrimaryButton } from "@/components/Share/Buttons/Buttons";
import Image from "next/image";
import globeIcon from "../../../assets/icons/Globe Icon.svg"
const Menubar = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="mb-16 ">
      <div className="bg-primary py-10 ">
        <Container>
          <div>
            <div className="flex flex-col lg:flex-row row lg:items-center lg:justify-between justify-end lg:py-6">
              <h2 className="text-white  text-end lg:flex text-[32px] font-[600]">
                নিউজ
              </h2>
              <h2 className="text-white text-end lg:flex">শুক্রবার, ২২ ডিসেম্বর ২০২৩</h2>
              <div className=' hidden md:flex items-center flex-wrap gap-3'>
                <input placeholder='search' className='px-4 py-2 rounded-full border-2 border-[#F5F5F5]' />
                <PrimaryButton className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-white border-2 border-secondary duration-300 bg-secondary  '>Search</PrimaryButton>
              </div>
            </div>
            <div className="hidden lg:flex items-center  gap-5 flex-wrap text-white">
              {menuData?.data?.map((item) => {
                return (
                  <>
                    <Link
                      key={item?.id}
                      href={`/${item.slug}?name=${item?.category_no}`}
                      className={`${pathname === item?.slug
                        ? "text-secondary "
                        : "text-white hover:text-secondary   transition-all duration-300 ease-in-out"
                        }`}
                    >
                      {item?.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="lg:hidden flex justify-end  ">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose className="text-white text-3xl" />
              ) : (
                <IoMdMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
          <div
            className={`md:hidden  z-50  w-[200px] h-full  text-start    absolute top-0    transition-all duration-500 ease-in-out   ${isOpen ? "left-0" : "-left-[250px]"
              }`}
          >
            <div className="flex flex-col gap-5 text-white bg-primary h-screen  overflow-x-auto py-8 px-4">
              {menuData?.data?.map((item) => {
                return (
                  <>
                    <div>
                      <Link
                        key={item?.id}
                        href={`${item?.slug}?category=${item.category_no}`}
                        className={`${pathname === item?.slug
                          ? "text-secondary border-b-2 border-b-secondary"
                          : "text-white"
                          }`}
                      >
                        {item?.name}
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menubar;

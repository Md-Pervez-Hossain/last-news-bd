"use client";
import Container from "@/components/ui/Container/Container";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
const Menubar = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="mb-16">
      <div className="bg-primary py-8 ">
        <Container>
          <div>
            <h2 className="text-white mb-5  text-end lg:flex text-[32px] font-[600]">
              নিউজ
            </h2>
            <div className="hidden lg:flex items-center  gap-5 flex-wrap text-white">
              {menuData?.data?.map((item) => {
                return (
                  <>
                    <Link
                      key={item?.id}
                      href={`/${item.slug}?name=${item?.category_no}`}
                      className={`${
                        pathname === item?.slug
                          ? "text-secondary border-b-2 border-b-secondary"
                          : "text-white hover:text-secondary hover:border-b-2 hover:border-b-secondary transition-all duration-300 ease-in-out"
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
            className={`md:hidden  z-50  w-[200px] h-full  text-start    absolute top-0    transition-all duration-500 ease-in-out   ${
              isOpen ? "left-0" : "-left-[250px]"
            }`}
          >
            <div className="flex flex-col gap-5 text-white bg-primary h-screen py-8 px-4">
              {menuData?.data?.map((item) => {
                return (
                  <>
                    <Link
                      key={item?.id}
                      href={`${item?.slug}?category=${item.category_no}`}
                      className={`${
                        pathname === item?.slug
                          ? "text-secondary border-b-2 border-b-secondary"
                          : "text-white"
                      }`}
                    >
                      {item?.title}
                    </Link>
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

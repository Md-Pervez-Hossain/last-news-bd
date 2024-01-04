"use client";
import Container from "@/components/ui/Container/Container";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PrimaryButton } from "@/components/Share/Buttons/Buttons";
import Image from "next/image";
import globeIcon from "../../../assets/icons/Globe Icon.svg";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import Navigation from "../Navigation/Navigation";
const Menubar = ({ menuData, logo, socialData }) => {
  console.log(logo);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [banglaDate, setBanglaDate] = useState("");

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const currentDate = new Date();
    const formattedBanglaDate = currentDate.toLocaleDateString("bn-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Set the Bangla date
    setBanglaDate(formattedBanglaDate);
  }, []); // Run this effect only once on initial render
  return (
    <div className="mb-16 ">
      <div className="bg-primary pb-6 ">
        <Container>
          <div>
            <div className="flex flex-col lg:flex-row row lg:items-center lg:justify-between justify-end lg:py-6">
              {logo?.data?.length > 0 ? (
                <>
                  {logo?.data?.map((logo) => {
                    return (
                      <>
                        <div className="flex items-center  justify-end gap-5">
                          <img
                            src={logo?.logo}
                            alt="logo"
                            style={{ objectFit: "contain" }}
                            className="group-hover:scale-105 transition-all duration-300"
                          />
                          <h2 className="text-white text-end lg:flex py-3 lg:py-0 text-[13px]">
                            {banglaDate}
                          </h2>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <p>No Logo Found</p>
                </>
              )}
              <div className=" hidden lg:flex  items-center justify-end flex-wrap gap-3 py-2">
                <input
                  placeholder="খুজুন"
                  className="px-4 py-[4px] rounded-lg border-2 border-[#F5F5F5] focus:outline-none"
                />
                <PrimaryButton className="transition ease-in-out delay-150 rounded-lg   hover:scale-105 text-white border-2 border-secondary duration-300 bg-secondary py-[4px] px-3 ">
                  অনুসন্ধান
                </PrimaryButton>
              </div>
            </div>
            <div className="hidden lg:flex  items-center  gap-5 flex-wrap text-white">
              {menuData?.data?.length > 0 ? (
                menuData?.data?.map((item) => {
                  return (
                    <>
                      <Link
                        key={item?.id}
                        href={`/${item.slug}?name=${item?.category_no}`}
                        className={`${
                          pathname === `/${item.slug}` // Check if pathname matches the link
                            ? "text-secondary " // Apply secondary color class for active link
                            : "text-white hover:text-secondary transition-all duration-300 ease-in-out"
                        }`}
                      >
                        {item?.name}
                      </Link>
                    </>
                  );
                })
              ) : (
                <NoDataFound />
              )}
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
            className={`lg:hidden  z-50  w-[200px] h-full  text-start    absolute top-0    transition-all duration-500 ease-in-out   ${
              isOpen ? "left-0" : "-left-[250px]"
            }`}
          >
            <div className="flex flex-col gap-5 text-white bg-primary h-screen  overflow-x-auto py-8 px-4">
              {menuData?.data?.length > 0 ? (
                menuData?.data?.map((item) => {
                  return (
                    <>
                      <div>
                        <Link
                          onClick={() => setIsOpen(false)}
                          key={item?.id}
                          href={`${item?.slug}?category=${item.category_no}`}
                          className={`${
                            pathname === item?.slug
                              ? "text-secondary border-b-2 border-b-secondary"
                              : "text-white"
                          }`}
                        >
                          {item?.name}
                        </Link>
                      </div>
                    </>
                  );
                })
              ) : (
                <NoDataFound />
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menubar;

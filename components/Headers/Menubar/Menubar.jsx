"use client";
import Container from "@/components/ui/Container/Container";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PrimaryButton } from "@/components/Share/Buttons/Buttons";
import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const Menubar = ({ menuData, logo, socialData }) => {
  const myRef = useRef(null);
  const [isOthersExpanded, setIsOthersExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  }, 300);
  const [banglaDate, setBanglaDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedBanglaDate = currentDate.toLocaleDateString("bn-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setBanglaDate(formattedBanglaDate);
  }, []);

  const handleMenuCollapse = () => {
    let content = myRef.current;
    if (!isOthersExpanded) {
      setIsOthersExpanded(true);
      content.style.height = content.scrollHeight + "px";
    } else {
      setIsOthersExpanded(false);
      content.style.height = "30px";
    }
    console.log(myRef.current.style.height);
  };

  return (
    <div className="lg:pb-8 pb-4">
      <div className="bg-primary pb-6 ">
        <Container>
          <div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between justify-end lg:py-6">
              {logo?.data?.length > 0 ? (
                <>
                  {logo?.data?.map((logo) => {
                    return (
                      <>
                        <div className=" pt-5 flex flex-col md:flex-row   md:items-center md:gap-5 ">
                          <div className="flex items-center justify-end">
                            <Image
                              src={logo?.logo}
                              alt="Image"
                              width={250}
                              height={250}
                              className="  cursor-pointer  w-[100px]  "
                            />
                          </div>
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
                <div className="flex gap-5">
                  <input
                    name="username"
                    onChange={handleSearch}
                    placeholder="খুজুন"
                    className="px-4 py-[5px] rounded-lg border-2 border-[#F5F5F5] focus:outline-none"
                  />
                  {/* <PrimaryButton className="transition ease-in-out delay-150 rounded-lg   hover:scale-105 text-white border-2 border-secondary duration-300 bg-secondary py-[5px] px-3 ">
                      অনুসন্ধান
                    </PrimaryButton> */}
                </div>
              </div>
            </div>
            <div
              ref={myRef}
              className={` lg:h-[30px] flex transition-all duration-300 ease-in-out  overflow-hidden  gap-5`}
            >
              <div className="hidden lg:flex  gap-5 flex-wrap text-white">
                {menuData?.data?.length > 0 ? (
                  menuData?.data?.map((item) => {
                    return (
                      <>
                        <Link
                          key={item?.id}
                          href={`/${item.slug}?name=${item?.category_no}`}
                          className={`${
                            pathname === `/${item.slug}`
                              ? "text-secondary "
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
              <h2
                onClick={handleMenuCollapse}
                className={`${
                  myRef?.current?.scrollHeight > 30 ? "flex" : "hidden"
                } hidden lg:flex text-secondary hover:text-white cursor-pointer transition-all duration-300 ease-in-out`}
              >
                অন্যান্য
              </h2>
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

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Container from "../ui/Container/Container";
import Image from "next/image";
import newsIcon from "../../assets/icons/News_Paper_white_icon 1 (1).svg";
import toast from "react-hot-toast";
import { PrimaryButtonWithIcons } from "../Share/Buttons/Buttons";
import FooterBottom from "./FooterBottom";
import { IoSend } from "react-icons/io5";
import Link from "next/link";
import { fetchContactInfoData } from "@/app/libs/fetchData";
import NoDataFound from "../Share/NoDataFound/NoDataFound";
import NewsLetter from "./NewsLetter";

const Footer = async () => {
  const footerInfo = await fetchContactInfoData();
  return (
    <div className="bg-primary mt-16 ">
      <Container>
        <div className="lg:py-8 py-5">
          <div className=" text-center lg:text-start grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 text-white my-8">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5 ">
                <Image alt="image" width={30} height={30} src={newsIcon} />
                <h2 className="lg:text-[24px] text-[18px] ">লাস্ট নিউজ বিডি</h2>
              </div>
              <h4 className="text-[18px] mb-3 font-[400]">
                সাবস্ক্রাইব করুন এবং প্রথম হাতে আসা অর্থনৈতিক খবর জানুন।
              </h4>
              <p className="text-[14px] font-[300]">
                প্রতিদিনের সর্বশেষ শিরোনাম এবং উল্লেখযোগ্য ঘটনার সংক্ষেপ,
                প্রতিটি সকালে আপনার জন্য সরাসরি পাঠানো হবে।
              </p>
            </div>
            <div>
              <h2 className="lg:text-[24px] text-[18px] mb-5">
                আমাদের সম্পর্কে
              </h2>
              <div>
                {footerInfo?.data?.length > 0 ? (
                  <>
                    <div className="flex flex-col lg:gap-5 gap-3 flex-wrap cursor-pointer">
                      <p>সম্পাদক : {footerInfo?.data?.[0]?.editor}</p>
                      <p>ফোন: : {footerInfo?.data?.[0]?.phone}</p>
                      <p>নিউজরুম: {footerInfo?.data?.[0]?.newsroom}</p>
                      <p>ইমেইল- : {footerInfo?.data?.[0]?.email}</p>
                      <p>ইমেইল- : {footerInfo?.data?.[0]?.address}</p>
                    </div>
                  </>
                ) : (
                  <NoDataFound />
                )}
              </div>
            </div>
            <div>
              <h4 className="text-[24px] font-[500] mb-5">কোম্পানি</h4>
              <ul className="flex flex-col lg:gap-5 gap-3 flex-wrap cursor-pointer ">
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/terms-condition">শর্তাবলী এবং শর্ত</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/privacy-policy">গোপনীয় নীতি</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/cookies-policy">কুকিজ নীতি</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/manage-cookies">কুকিজ পরিচালনা করুন</Link>{" "}
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/about-us">আমাদের সম্পর্কে</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] font-[500] mb-5">নিউজলেটার</h4>
              <p>এনাকার নিউজ থেকে সর্বশেষ সৃজনশীল সংবাদ পান</p>
              <NewsLetter />
            </div>
          </div>
          <hr className="hidden lg:flex" />
          <FooterBottom />
        </div>
      </Container>
    </div>
  );
};

export default Footer;

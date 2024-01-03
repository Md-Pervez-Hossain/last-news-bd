/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../ui/Container/Container";
import Image from "next/image";
import newsIcon from "../../assets/icons/News_Paper_white_icon 1 (1).svg";
import {
  PrimaryButton,
  PrimaryButtonWithIcons,
} from "../Share/Buttons/Buttons";
import FooterBottom from "./FooterBottom";
import { IoSend } from "react-icons/io5";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-primary mt-16 ">
      <Container>
        <div className="lg:py-8 py-5">
          <div className=" text-center lg:text-start grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 text-white my-8">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5 ">
                <Image alt="image" width={30} height={30} src={newsIcon} />
                <h2 className="text-[24px]">Last News BD</h2>
              </div>
              <h4 className="text-[18px] mb-3 font-[400]">
                Subscribe and be informed first hand about the actual economic
                news.
              </h4>
              <p className="text-[14px] font-[300]">
                All the day's headlines and highlights, direct to you every
                morning
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-[500] mb-5">News</h4>
              <ul className="flex flex-col lg:gap-5 gap-3 flex-wrap cursor-pointer">
                <li className="hover:text-secondary hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-secondary hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/politics">Politics</Link>
                </li>
                <li className="hover:text-secondary hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/world">World</Link>
                </li>
                <li className="hover:text-secondary hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/crime">Crime</Link>
                </li>
                <li className="hover:text-secondary hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/business">Business</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] font-[500] mb-5">Company</h4>
              <ul className="flex flex-col lg:gap-5 gap-3 flex-wrap cursor-pointer ">
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/terms-condition">Terms & Condition</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/cookies-policy">Cookies Policy</Link>
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/manage-cookies">Manage Cookies</Link>{" "}
                </li>
                <li className="hover:text-secondary  hover:ps-2 transition-all duration-300 ease-in-out">
                  {" "}
                  <Link href="/about-us">About Us</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] font-[500] mb-5">Newsletter</h4>
              <p>Get the latest creative news from Anacker News</p>
              <div className="flex  items-center  lg:my-5 mt-6 ">
                <input
                  placeholder="write Your Email"
                  className=" w-full   lg:w-[200px]  px-4 py-2 rounded-lg focus:outline-none text-primary"
                />
                <PrimaryButtonWithIcons
                  icon={<IoSend />}
                  className="bg-secondary text-white px-4 py-3 -ms-5"
                ></PrimaryButtonWithIcons>
              </div>
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

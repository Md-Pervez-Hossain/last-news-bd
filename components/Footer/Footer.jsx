/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Container from '../ui/Container/Container';
import Image from 'next/image'
import newsIcon from "../../assets/icons/News_Paper_white_icon 1 (1).svg"
import { PrimaryButton, PrimaryButtonWithIcons } from '../Share/Buttons/Buttons';
import FooterBottom from './FooterBottom';
import { IoSend } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='bg-primary py-10 '>
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-white my-8'>
          <div>
            <div className='flex items-center gap-3 mb-5 '>
              <Image alt='image' width={30} height={30} src={newsIcon} />
              <h2 className='text-[24px]'>Last News BD</h2>
            </div>
            <h4 className='text-[18px] mb-3 font-[400]'>
              Subscribe and be informed first hand about the actual economic news.
            </h4>
            <p className='text-[14px] font-[300]'>All the day's headlines and highlights, direct to you every morning</p>
            <PrimaryButton className="bg-white text-black mt-5">Subscribe Now</PrimaryButton>
          </div>

          <div>
            <h4 className='text-[24px] font-[500] mb-5'>News</h4>
            <ul className='flex flex-col gap-5 flex-wrap cursor-pointer'>
              <li>Home</li>
              <li>Politics</li>
              <li>World</li>
              <li>Crime</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h4 className='text-[24px] font-[500] mb-5'>Company</h4>
            <ul className='flex flex-col gap-5 flex-wrap cursor-pointer' >
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Manage Cookies</li>
              <li>About  Us</li>
            </ul>
          </div>
          <div>
            <h4 className='text-[24px] font-[500] mb-5'>Newsletter</h4>
            <p>Get the latest creative news from Anacker News</p>
            <div className='flex  items-center my-5'>
              <input placeholder='write Your Email' className='   lg:w-[200px]  px-4 py-2 rounded-lg' />
              <PrimaryButtonWithIcons icon={<IoSend />} className="bg-secondary text-white px-4 py-3 -ms-5" ></PrimaryButtonWithIcons >
            </div>
          </div>
        </div>
        <hr />
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;
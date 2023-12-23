import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import "./BreakingNews.css"
import image1 from "../../../../assets/images/breaking_news_1.png"
import image2 from "../../../../assets/images/breaking_news_2.png"
import image3 from "../../../../assets/images/breaking_news_3.png"
import image4 from "../../../../assets/images/breaking_news_4.png"
import image5 from "../../../../assets/images/breaking_news_5.png"
import { motion } from "framer-motion";
import Image from "next/image"
const BreakingNews = () => {
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className='grid grid-cols-4 gap-5 grid-rows-4 py-5'>
        <div whileHover={{ scale: [null, 1.1, 1] }}
          transition={{ duration: 0.7 }} className='row-span-4 bg-gray-500 lg:col-span-2 col-span-4   cursor-pointer'>
          <div className=' relative  overflow-hidden group'>
            <div className=' group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image1}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}

              />
            </div>
            <div className='bg-primary h-16 text-white absolute  bottom-0 w-full p-5 opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3 text-white text-[24px]'>নির্বাচন সুষ্ঠু হলে জয় নিশ্চিত: হিরো আলম</h2>
          </div>
        </div>
        <div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }} className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500  cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className=' group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image2}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}

              />
            </div>

            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>রেজাল্ট নিয়ে কোনো টেনশন নেই: ইসি রাশেদা</h2>
          </div>
        </div>
        <div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }} className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className=' group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image3}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}

              />
            </div>

            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>নাশকতা এড়াতে পাঁচ জোড়া লোকাল ট্রেন বন্ধ</h2>
          </div>
        </div>
        <div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }} className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image4}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}

              />
            </div>

            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>বিএনপি কেয়ামত পর্যন্ত ক্ষমতায় যেতে পারবে না: শাহজাহান ওমর</h2>
          </div>
        </div>
        <div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }} className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image5}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}

              />
            </div>
            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>শিক্ষাক্রম ঘিরেই বছরজুড়ে বিতর্ক, ছিল আন্দোলনের উত্তাপও</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BreakingNews;
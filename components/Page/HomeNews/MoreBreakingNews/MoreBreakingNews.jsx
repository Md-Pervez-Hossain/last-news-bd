import Title from '@/components/ui/Title/Title';
import React from 'react';

import Image from "next/image"
import image1 from "../../../../assets/images/more_breaking_news-2.png"
import image2 from "../../../../assets/images/more_news_1.png"
import image3 from "../../../../assets/images/breaking_news_3.png"
import image4 from "../../../../assets/images/breaking_news_4.png"
const MoreBreakingNews = () => {
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className='grid grid-cols-4 gap-5 grid-rows-4 py-5'>
        <div className='row-span-4 bg-gray-500 lg:col-span-3 col-span-4   cursor-pointer'>

          <div className=' relative  overflow-hidden group'>
            <div className=' group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image1}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
                width={1200}
              />
            </div>
            <div className='bg-primary h-24 text-white absolute  bottom-0 w-full p-5 opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3 text-white text-[24px]'>নির্বাচন সুষ্ঠু হলে জয় নিশ্চিত: হিরো আলম</h2>
          </div>
        </div>
        <div className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4   cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image2}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}
                width={1000}
              />
            </div>

            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>রেজাল্ট নিয়ে কোনো টেনশন নেই: ইসি রাশেদা</h2>
          </div>
        </div>
        <div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }} className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4  cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image2}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}
                width={1000}

              />
            </div>
            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>রেজাল্ট নিয়ে কোনো টেনশন নেই: ইসি রাশেদা</h2>
          </div>
        </div>


      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
        <div className=' cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
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
        <div className=' cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
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
          transition={{ duration: 0.7 }} className=' cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
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
          transition={{ duration: 0.7 }} className=' cursor-pointer'>
          <div className=' relative overflow-hidden group'>
            <div className='group-hover:scale-105 transition-all duration-300'>
              <Image
                src={image2}
                alt="Picture of the Breaking News"
                style={{ objectFit: "contain" }}
                width={500}
              />
            </div>
            <div className='bg-primary h-16 text-white absolute p-3  bottom-0 w-full  opacity-75'>
            </div>
            <h2 className='absolute  bottom-0 w-full p-3  text-white text-[16px]'>রেজাল্ট নিয়ে কোনো টেনশন নেই: ইসি রাশেদা</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MoreBreakingNews;
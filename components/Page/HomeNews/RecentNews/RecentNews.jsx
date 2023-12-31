import React from 'react';
import Image from 'next/image'
import image1 from "../../../../assets/images/recent_news_1.png"
import image2 from "../../../../assets/images/recent_news_2.png"
import Title from '@/components/ui/Title/Title';

const RecentNews = () => {
  return (
    <div >
      <Title>Recent News</Title>
      <div className='grid lg:grid-cols-2 gap-10 my-5 cursor-pointer'>
        <div className=' overflow-hidden group'>
          <div className='  group-hover:scale-105 transition-all duration-300'>
            <Image
              src={image1}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className=' overflow-hidden group'>
          <div className='group-hover:scale-105 transition-all duration-300'>
            <Image
              src={image2}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
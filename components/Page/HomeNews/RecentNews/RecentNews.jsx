import React from 'react';
import Image from 'next/image'
import image from "../../../../assets/images/recentNews_image.png"
import Title from '@/components/ui/Title/Title';
const RecentNews = () => {
  return (
    <div >
      <Title>Recent News</Title>
      <div className='w-56 h-1 bg-secondary'></div>
      <div className='grid grid-cols-2 gap-10 my-5'>
        <Image
          src={image}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={image}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default RecentNews;
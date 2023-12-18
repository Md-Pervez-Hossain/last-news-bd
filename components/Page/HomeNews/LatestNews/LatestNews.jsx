import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import img from "../../../../assets/images/images1.png"
import Image from 'next/image'
const LatestNews = () => {
  return (
    <div>
      <div className='py-5 '>
        <Image
          src={img}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
          width={1200}
        />
      </div>

    </div>
  );
};

export default LatestNews;
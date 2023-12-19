"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import homeBanner from "../../../../assets/images/Home_banner.png"
import Container from '@/components/ui/Container/Container';
const HomeBanner = () => {
  const [imageVisible, setImageVisible] = useState(true);

  const handleCloseClick = () => {
    setImageVisible(false);
  };
  return (
    <div >
      <Container>
        {
          imageVisible && <div className='relative'>
            <Image
              src={homeBanner}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
            <span className='bg-white p-3 shadow-lg absolute top-2 right-2 rounded-full cursor-pointer' onClick={handleCloseClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M1 1L13 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        }


      </Container>
    </div>
  );
};

export default HomeBanner;
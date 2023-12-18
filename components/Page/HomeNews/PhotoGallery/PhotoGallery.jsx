"use client"
import Container from '@/components/ui/Container/Container';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from 'next/image'
import sliderImage from "../../../../assets/images/news_image.png"
import Title from '@/components/ui/Title/Title';
import "./PhotoGallery.css"
import Link from 'next/link'
const PhotoGallery = ({ show, setShow }) => {
  const sliderArray = [
    {
      id: 1,
      image: sliderImage
    },
    {
      id: 2,
      image: sliderImage
    },
    {
      id: 3,
      image: sliderImage
    },
    {
      id: 4,
      image: sliderImage
    },
    {
      id: 5,
      image: sliderImage
    },
    {
      id: 6,
      image: sliderImage
    },

  ];
  return (
    <div className='my-5'>
      <div className='mb-5'>
        <div className='flex items-center justify-between'>
          <Title >Photo Gallery</Title>
          <Link href="/home-photo-gallery">
            <button className='text-[24px] font-[600] border-2 rounded-full px-8 py-2'>Visit Gallery</button>
          </Link>
        </div>

        <div className='w-56 h-1 bg-secondary'></div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {
          sliderArray?.map(slide => {
            return (
              <>
                <SwiperSlide>
                  <div key={slide?.id}>
                    <Image
                      src={slide?.image}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                      width={1000}
                    />
                  </div>
                </SwiperSlide>
              </>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default PhotoGallery;
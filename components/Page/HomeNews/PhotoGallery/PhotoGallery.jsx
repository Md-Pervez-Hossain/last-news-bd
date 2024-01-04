"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import image1 from "../../../../assets/images/photo_gallery_1.png";
import image2 from "../../../../assets/images/photo_gallery_2.png";
import image3 from "../../../../assets/images/photo_gallery_3.png";
import image4 from "../../../../assets/images/photo_gallery_4.png";
import Title from "@/components/ui/Title/Title";
import "./PhotoGallery.css";
import Link from "next/link";
const PhotoGallery = ({ photos }) => {
  const sliderArray = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
  ];
  return (
    <div className="py-16">
      <div className="mb-5">
        <div className="flex items-center flex-wrap gap-5 justify-between">
          <Title className="lg:text-[24px] text-[16px]">ফটো গ্যালারি</Title>
          <Link href="/photo-gallery">
            <button className="lg:text-[24px] text-[16px] font-[600] border-2 rounded-full px-8 py-2">
              Visit Gallery
            </button>
          </Link>
        </div>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        {photos?.data?.map((slide) => {
          return (
            <>
              <SwiperSlide>
                <div key={slide?.id} className="py-8">
                  <Image
                    src={slide?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                    width={1000}
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PhotoGallery;

"use client"

import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import image1 from "../../../../../assets/images/bangladesh_image_1.png"
import image2 from "../../../../../assets/images/bangladesh_image_2.png"
import image3 from "../../../../../assets/images/bangladesh_image_3.png"
import image4 from "../../../../../assets/images/bangladesh_image_4.png"
import image5 from "../../../../../assets/images/bangladesh_image_5.png"
import image6 from "../../../../../assets/images/bangladesh_image_6.png"
import image7 from "../../../../../assets/images/bangladesh_image_7.png"
import image8 from "../../../../../assets/images/bangladesh_image_8.png"
import image9 from "../../../../../assets/images/bangladesh_image_9.png"
import image10 from "../../../../../assets/images/bangladesh_image_10.png"
import image11 from "../../../../../assets/images/bangladesh_image_11.png"
import image12 from "../../../../../assets/images/bangladesh_image_12.png"
import binodonImage1 from "../../../../../assets/images/binodin_image_1.png"
import binodonImage2 from "../../../../../assets/images/binodin_image_2.png"
import binodonImage3 from "../../../../../assets/images/binodin_image_3.png"
import binodonImage4 from "../../../../../assets/images/binodin_image_4.png"
import binodonImage5 from "../../../../../assets/images/binodin_image_5.png"
import binodonImage6 from "../../../../../assets/images/binodin_image_6.png"
import binodonImage7 from "../../../../../assets/images/binodin_image_7.png"
import binodonImage8 from "../../../../../assets/images/binodin_image_8.png"
import playImage1 from "../../../../../assets/images/play_image-1.png"
import playImage2 from "../../../../../assets/images/play_image-2.png"
import playImage3 from "../../../../../assets/images/play_image-3.png"
import playImage4 from "../../../../../assets/images/play_image-4.png"
import playImage5 from "../../../../../assets/images/play_image-5.png"
import playImage6 from "../../../../../assets/images/play_image-6.png"
import playImage7 from "../../../../../assets/images/play_image-7.png"
import playImage8 from "../../../../../assets/images/play_image-8.png"
import fashionImage1 from "../../../../../assets/images/fashion_image_1.png"
import fashionImage2 from "../../../../../assets/images/fashion_image_2.png"
import fashionImage3 from "../../../../../assets/images/fashion_image_3.png"
import fashionImage4 from "../../../../../assets/images/fashion_image_4.png"
import fashionImage5 from "../../../../../assets/images/fashion_image_5.png"
import fashionImage6 from "../../../../../assets/images/fashion_image_6.png"
import fashionImage7 from "../../../../../assets/images/fashion_image_7.png"
import fashionImage8 from "../../../../../assets/images/fashion_image_8.png"
import Image from 'next/image'
import { motion } from "framer-motion";
const MediaGallery = () => {

  const bangladeshGalleryArray = [
    {
      id: 1,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 2,
      image: image2,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 3,
      image: image3,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 4,
      image: image4,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 5,
      image: image5,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 6,
      image: image6,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 7,
      image: image7,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 8,
      image: image8,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 9,
      image: image9,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 10,
      image: image10,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 11,
      image: image11,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 12,
      image: image12,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
  ]
  const binodonGalleryArray = [
    {
      id: 1,
      image: binodonImage1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 2,
      image: binodonImage2,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 3,
      image: binodonImage3,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 4,
      image: binodonImage4,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 5,
      image: binodonImage5,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 6,
      image: binodonImage6,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 7,
      image: binodonImage7,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 8,
      image: binodonImage8,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },

  ]
  const playGalleryArray = [
    {
      id: 1,
      image: playImage1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 2,
      image: playImage2,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 3,
      image: playImage3,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 4,
      image: playImage4,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 5,
      image: playImage5,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 6,
      image: playImage6,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 7,
      image: playImage7,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 8,
      image: playImage8,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },

  ]
  const fashionGalleryArray = [
    {
      id: 1,
      image: fashionImage1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 2,
      image: fashionImage2,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 3,
      image: fashionImage3,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 4,
      image: fashionImage4,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 5,
      image: fashionImage5,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 6,
      image: fashionImage6,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 7,
      image: fashionImage7,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 8,
      image: fashionImage8,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
  ]
  return (
    <div className='pb-16'>
      <Container>
        <Title>বাংলাদেশ</Title>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          {
            bangladeshGalleryArray?.map(media => {
              return (
                <>
                  <div className='cursor-pointer overflow-hidden group'>
                    <div className='group-hover:scale-105 transition-all duration-500'>
                      <Image
                        src={media?.image}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                        width={1000}
                      />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <Title>বিনোদন</Title>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          {
            binodonGalleryArray?.map(media => {
              return (
                <>
                  <div className='cursor-pointer overflow-hidden group'>
                    <div className='group-hover:scale-105 transition-all duration-500'>
                      <Image
                        src={media?.image}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                        width={1000}
                      />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>

        <Title>খেলা</Title>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          {
            playGalleryArray?.map(media => {
              return (
                <>
                  <div className='cursor-pointer overflow-hidden group'>
                    <div className='group-hover:scale-105 transition-all duration-500'>
                      <Image
                        src={media?.image}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                        width={1000}
                      />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <Title>ফ্যাশন</Title>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          {
            fashionGalleryArray?.map(media => {
              return (
                <>
                  <div className='cursor-pointer overflow-hidden group'>
                    <div className='group-hover:scale-105 transition-all duration-500'>
                      <Image
                        src={media?.image}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                        width={1000}
                      />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </Container>
    </div>
  );
};

export default MediaGallery;
"use client"

import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import image1 from "../../../../../assets/images/news_image.png"
import Image from 'next/image'
import { motion } from "framer-motion";
const MediaGallery = () => {

  const mediaGalleryArray = [
    {
      id: 1,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 2,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 3,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 4,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 5,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 6,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 7,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 8,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
    {
      id: 9,
      image: image1,
      date: "প্রকাশ: ১১ ডিসেম্বর ২০২৩, ১৪: ০৮"
    },
  ]
  return (
    <div className='pb-16'>
      <Container>
        <Title>Media Gallery</Title>
        <div className='w-56 h-1 bg-secondary'></div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-10'>
          {
            mediaGalleryArray?.map(media => {
              return (
                <>
                  <motion.div whileHover={{ scale: [null, 1.1, 1.1] }}
                    transition={{ duration: 0.7 }} className='cursor-pointer'>
                    <Image
                      src={media?.image}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                      width={1000}
                    />
                  </motion.div>
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
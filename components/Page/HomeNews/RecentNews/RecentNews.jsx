import React from 'react';
import Image from 'next/image'
import image from "../../../../assets/images/recentNews_image.png"
import Title from '@/components/ui/Title/Title';
import { motion } from "framer-motion";
const RecentNews = () => {
  return (
    <div >
      <Title>Recent News</Title>
      <div className='w-56 h-1 bg-secondary'></div>
      <div className='grid lg:grid-cols-2 gap-10 my-5'>
        <motion.div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }}>
          <Image
            src={image}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }}>
          <Image
            src={image}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RecentNews;
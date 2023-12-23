import React from 'react';
import Image from 'next/image'
import image1 from "../../../../assets/images/recent_news_1.png"
import image2 from "../../../../assets/images/recent_news_2.png"
import Title from '@/components/ui/Title/Title';
import { motion } from "framer-motion";
const RecentNews = () => {
  return (
    <div >
      <Title>Recent News</Title>
      <div className='grid lg:grid-cols-2 gap-10 my-5 cursor-pointer'>
        <motion.div whileHover={{ scale: [null, 1.1, 1] }}
          transition={{ duration: 0.7 }}>
          <Image
            src={image1}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.7 }}>
          <Image
            src={image2}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RecentNews;
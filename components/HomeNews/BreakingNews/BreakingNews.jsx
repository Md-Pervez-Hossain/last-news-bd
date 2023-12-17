import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import img from "../../../assets/images/images1.png"
import Image from 'next/image'
const BreakingNews = () => {
  return (
    <div>
      <Container>
        <Title>Breaking News</Title>
        <div className='w-56 h-1 bg-secondary'></div>
        <div className='grid grid-cols-4 gap-5 grid-rows-4 py-5'>
          <div className='row-span-4 bg-gray-500 col-span-2 h-[300px]'>

          </div>

          <div className='col-span-1 row-span-2 bg-gray-500'></div>
          <div className='col-span-1 row-span-2 bg-gray-500'></div>
          <div className='col-span-1 row-span-2 bg-gray-500'></div>
          <div className='col-span-1 row-span-2 bg-gray-500'></div>

        </div>
      </Container>
    </div>
  );
};

export default BreakingNews;
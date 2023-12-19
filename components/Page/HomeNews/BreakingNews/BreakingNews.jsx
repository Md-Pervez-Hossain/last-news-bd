import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
import "./BreakingNews.css"
const BreakingNews = () => {
  return (
    <div>
      <Container>
        <Title>Breaking News</Title>
        <div className='w-56 h-1 bg-secondary'></div>
        <div className='grid grid-cols-4 gap-5 grid-rows-4 py-5'>
          <div className='row-span-4 bg-gray-500 lg:col-span-2 col-span-4 h-[300px] banner'>
          </div>
          <div className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner'></div>
          <div className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner'></div>
          <div className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner'></div>
          <div className='lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500 banner'></div>
        </div>
      </Container>
    </div>
  );
};

export default BreakingNews;
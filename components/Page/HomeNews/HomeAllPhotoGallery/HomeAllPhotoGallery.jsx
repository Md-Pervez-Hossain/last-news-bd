import Container from '@/components/ui/Container/Container';
import React from 'react';
import MediaGallery from './MediaGallery/MediaGallery';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeVideoGallary from './HomeVideoGallery/HomeVideoGallery';
import HomeOtherNews from '../HomeOtherNews/HomeOtherNews';
import AddThree from '../Adds/AddThree';
import AddFour from '../Adds/AddFour';

const HomeAllPhotoGallery = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-3 gap-10 '>
          <div className='lg:col-span-2 col-span-3'>
            <AddThree />
          </div>
          <div className='lg:col-span-1 col-span-3 '>
            <AddFour />
          </div>
        </div>
      </Container>
      <MediaGallery />
      <HomeVideoGallary />
      <Container> <HomeOtherNews /></Container>
    </div>
  );
};

export default HomeAllPhotoGallery;
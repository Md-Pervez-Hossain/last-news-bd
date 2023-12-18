import Container from '@/components/ui/Container/Container';
import React from 'react';
import MediaGallery from './MediaGallery/MediaGallery';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeVideoGallary from './HomeVideoGallery/HomeVideoGallery';
import HomeOtherNews from '../HomeOtherNews/HomeOtherNews';

const HomeAllPhotoGallery = () => {
  return (
    <div>
      <MediaGallery />
      <div className='mb-10'> <HomeBanner /></div>
      <HomeVideoGallary />
      <HomeOtherNews />
    </div>
  );
};

export default HomeAllPhotoGallery;
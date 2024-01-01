import HomeAllPhotoGallery from '@/components/Page/HomeNews/HomeAllPhotoGallery/HomeAllPhotoGallery';
import React from 'react';
import { fetchData, fetchPhotoData } from '../libs/fetchData';

const HomePhotoGalleryPage = async () => {

  const photoData = await fetchPhotoData()

  const category = await fetchData()
  return (
    <div>
      <HomeAllPhotoGallery photoData={photoData} category={category} />
    </div>
  );
};

export default HomePhotoGalleryPage;
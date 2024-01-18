import React from 'react';
import { fetchAdsData, fetchCategoryNewsData, fetchPhotoData, fetchSearchCategoryNewsData } from '../libs/fetchData';
import HomeNews from '@/components/Page/HomeNews/HomeNews';
const page = async ({ searchParams }) => {
  const query = searchParams?.name
  const search = searchParams?.search
  const newsCategoryData = await fetchCategoryNewsData(query)
  const searchCategoryData = await fetchSearchCategoryNewsData(query, search)
  const adsData = await fetchAdsData()
  const photos = await fetchPhotoData()
  return (
    <div>
      <HomeNews newsCategoryData={search ? searchCategoryData : newsCategoryData} adsData={adsData} photos={photos} />
    </div>
  );
};

export default page;
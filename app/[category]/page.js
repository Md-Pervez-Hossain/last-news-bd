import React from 'react';
import { fetchAdsData, fetchCategoryNewsData, fetchData } from '../libs/fetchData';
import PoliticsNews from '@/components/Page/PoliticsNews/PoliticsNews';
import HomeNews from '@/components/Page/HomeNews/HomeNews';

const page = async ({ searchParams }) => {
  const query = searchParams?.name
  const newsCategoryData = await fetchCategoryNewsData(query)
  const adsData = await fetchAdsData()
  return (
    <div>
      <HomeNews newsCategoryData={newsCategoryData} adsData={adsData} />
    </div>
  );
};

export default page;
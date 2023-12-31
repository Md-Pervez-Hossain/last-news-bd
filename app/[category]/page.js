import React from 'react';
import { fetchCategoryNewsData, fetchData } from '../libs/fetchData';
import PoliticsNews from '@/components/Page/PoliticsNews/PoliticsNews';
import HomeNews from '@/components/Page/HomeNews/HomeNews';

const page = async ({ searchParams }) => {
  const query = searchParams?.name
  const newsCategoryData = await fetchCategoryNewsData(query)
  return (
    <div>
      <HomeNews newsCategoryData={newsCategoryData} />
    </div>
  );
};

export default page;
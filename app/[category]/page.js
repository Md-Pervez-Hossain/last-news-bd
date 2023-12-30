import React from 'react';
import { fetchCategoryNewsData, fetchData } from '../libs/fetchData';
import PoliticsNews from '@/components/Page/PoliticsNews/PoliticsNews';
import HomeNews from '@/components/Page/HomeNews/HomeNews';

const page = async ({ searchParams }) => {
  console.log(searchParams);
  const query = searchParams?.name
  console.log(query);
  const newsCategoryData = await fetchCategoryNewsData(query)
  console.log(newsCategoryData);
  return (
    <div>
      <HomeNews newsCategoryData={newsCategoryData} />
    </div>
  );
};

export default page;
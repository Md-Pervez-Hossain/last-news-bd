import { fetchAdsData, fetchCategoryNewsData, fetchPostDetails, fetchSocialData } from '@/app/libs/fetchData';
import NewsDetails from '@/components/Page/HomeNews/NewsDetails/NewsDetails';
import Container from '@/components/ui/Container/Container';
import React from 'react';

const NewsDetailsPage = async ({ searchParams }) => {
  console.log(searchParams);
  const category_no = searchParams.category_no
  const query = searchParams.post_no
  const postDetails = await fetchPostDetails(query)
  const newsCategoryData = await fetchCategoryNewsData(category_no)
  const adsData = await fetchAdsData()
  const socialData = await fetchSocialData()
  return (
    <div>
      <NewsDetails socialData={socialData} newsCategoryData={newsCategoryData} postDetails={postDetails} adsData={adsData} />
    </div>
  );
};

export default NewsDetailsPage;
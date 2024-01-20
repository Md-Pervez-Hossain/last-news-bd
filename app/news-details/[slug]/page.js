"use client"
import NewsDetails from '@/components/Page/HomeNews/NewsDetails/NewsDetails';
import { useGetAdsQuery, useGetCategoryNewsDataQuery, useGetPostDetailsQuery, useGetSocialDataQuery } from '@/redux/api/apiSlice';
import React from 'react';
const NewsDetailsPage = ({ searchParams }) => {
  console.log(searchParams);
  const category_no = searchParams.category_no
  const query = searchParams.post_no
  const { data: postDetails } = useGetPostDetailsQuery(query)
  const { data: socialData } = useGetSocialDataQuery()
  const { data: adsData } = useGetAdsQuery()
  const { data: newsCategoryData } = useGetCategoryNewsDataQuery(category_no)
  return (
    <div>
      <NewsDetails postDetails={postDetails} socialData={socialData} adsData={adsData} newsCategoryData={newsCategoryData} />
    </div>
  );
};

export default NewsDetailsPage;
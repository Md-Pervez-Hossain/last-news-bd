import { fetchPostDetails } from '@/app/libs/fetchData';
import NewsDetails from '@/components/Page/HomeNews/NewsDetails/NewsDetails';
import Container from '@/components/ui/Container/Container';
import React from 'react';

const NewsDetailsPage = async ({ searchParams }) => {
  console.log(searchParams.post_no);
  const query = searchParams.post_no
  const postDetails = await fetchPostDetails(query)
  return (
    <div>
      <NewsDetails postDetails={postDetails} />
    </div>
  );
};

export default NewsDetailsPage;
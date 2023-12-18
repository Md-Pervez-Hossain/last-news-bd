"use client"

import ShowContent from '@/components/Share/ShowContent/ShowContent';
import Container from '@/components/ui/Container/Container';
import React, { useState } from 'react';
import LatestNews from '../LatestNews/LatestNews';
import LatestNewsTitle from './LatestNewsTitle';
import TrendingNewsTitle from './TrendingNewsTitle';

const NewsTitle = () => {
  const [show, setShow] = useState("latest_news")
  return (
    <div className='bg-[#F5F5F5] mt-5 px-4 py-3 '>
      <div className='flex items-center justify-between pb-3 '>
        <button onClick={() => setShow("latest_news")} className={
          show === "latest_news"
            ? "border-b-[3px]  border-b-secondary text-secondary font-[600] "
            : " py-5  "
        }>Latest News</button>
        <button onClick={() => setShow("trending_news")} className={
          show === "trending_news"
            ? "border-b-[3px]  border-b-secondary text-secondary font-[600] "
            : " py-5  "
        }>Trending News</button>
      </div>
      <div>
        {show === "latest_news" && <LatestNewsTitle />}
        {show === "trending_news" && <TrendingNewsTitle />}
      </div>
    </div>
  );
};

export default NewsTitle;
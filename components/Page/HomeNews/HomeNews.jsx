"use client"
import React, { useState } from 'react';
import Container from '../../ui/Container/Container';
import HomeBanner from './HomeBanner/HomeBanner';
import BreakingNews from './BreakingNews/BreakingNews';
import LatestNews from './LatestNews/LatestNews';
import NewsTitle from './NewsTitle/NewsTitle';
import Title from '../../ui/Title/Title';
import Add from './Adds/Add';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import RecentNews from './RecentNews/RecentNews';
import HomeOtherNews from './HomeOtherNews/HomeOtherNews';
import HomeLiveNews from './HomeLiveNews/HomeLiveNews';
import HomeTodayNews from './HomeTodayNews/HomeTodayNews';
import HomeSpecialNews from './HomeSpecialNews/HomeSpecialNews';

const HomeNews = () => {
  return (
    <div>
      <HomeBanner />
      <div className='py-8'>
        <BreakingNews />
      </div>
      <Container>
        <Title> Latest News</Title>
        <div className='w-52 h-1 bg-secondary'></div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='col-span-2'>
            <LatestNews />
            <HomeSpecialNews />
          </div>
          <div className='col-span-1 '>
            <NewsTitle />
            <Add />
            <Add />
          </div>
        </div>
        <PhotoGallery />
        <div className='grid grid-cols-3 my-10 gap-10'>
          <div className='col-span-2'>
            <HomeLiveNews />
          </div>
          <div className='col-span-1'>
            <HomeTodayNews />
          </div>
        </div>
        <RecentNews />
        <HomeOtherNews />
      </Container>

    </div>
  );
};

export default HomeNews;
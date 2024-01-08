import AboutUs from '@/components/Page/AboutUs/AboutUs';
import React from 'react';
import { fetchAboutUsData, fetchAdsData } from '../libs/fetchData';

const AboutUsPage = async () => {
  const aboutUsData = await fetchAboutUsData()
  const adsData = await fetchAdsData()
  return (
    <div>
      <AboutUs aboutUsData={aboutUsData} adsData={adsData} />
    </div>
  );
};

export default AboutUsPage;
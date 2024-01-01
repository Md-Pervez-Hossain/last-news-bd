import AboutUs from '@/components/Page/AboutUs/AboutUs';
import React from 'react';
import { fetchAboutUsData } from '../libs/fetchData';

const AboutUsPage = async () => {
  const aboutUsData = await fetchAboutUsData()
  return (
    <div>
      <AboutUs aboutUsData={aboutUsData} />
    </div>
  );
};

export default AboutUsPage;
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
import AddTwo from './Adds/AddTwo';
import AddThree from './Adds/AddThree';
import AddFour from './Adds/AddFour';
import MoreBreakingNews from './MoreBreakingNews/MoreBreakingNews';
import { usePathname } from 'next/navigation';
import InterNationalNews from '../InterNationalNews/InterNationalNews';
import SearchInternationalNews from '../InterNationalNews/SearchInternationalNews';
import NationalNews from '../NationalNews/NationalNews';
import PoliticsNews from '../PoliticsNews/PoliticsNews';
import EconomyNews from '../EconomyNews/EconomyNews';
import SportsNews from '../SportsNews/SportsNews';
import LawAndJustice from '../LawAndJustice/LawAndJustice';
import CapitalNews from '../CapitalNews/CapitalNews';
import AdministratorNews from '../AdministratorNews/AdministratorNews';
import EducationNews from '../EducationNews/EducationNews';
import DistrictNews from '../DistrictNews/DistrictNews';
import AbroadNews from '../AbroadNews/AbroadNews';
import InformationTechnology from '../InformationTechnology/InformationTechnology';
import IslamNews from '../IslamNews/IslamNews';
import JobNews from '../JobNews/JobNews';
const HomeNews = () => {
  const [show, setShow] = useState("আন্তর্জাতিক")
  const pathname = usePathname()
  return (
    <div>

      {
        pathname === "/" ? <Container>
          <HomeBanner />
          <div className='my-5'>
            <Title> সর্বশেষ সংবাদ</Title>
          </div>
          <div className='grid grid-cols-3 gap-10 '>
            <div className='lg:col-span-2 col-span-3'>
              <LatestNews />
              <HomeSpecialNews />
            </div>
            <div className='lg:col-span-1 col-span-3 '>
              <Add />
              <NewsTitle />
              <AddTwo />
            </div>
          </div>
          <div className='py-8'>
            <BreakingNews />
          </div>
          <div className='grid grid-cols-3 gap-10 '>
            <div className='lg:col-span-2 col-span-3'>
              <AddThree />
            </div>
            <div className='lg:col-span-1 col-span-3 '>
              <AddFour />
            </div>
          </div>
          <PhotoGallery />
          <div className='grid grid-cols-3 my-10 gap-10'>
            <div className='lg:col-span-2 col-span-3'>
              <HomeLiveNews />
            </div>
            <div className='lg:col-span-1 col-span-3'>
              <HomeTodayNews />
            </div>
          </div>
          <RecentNews />
          <div className='my-8'>
            <HomeBanner />
          </div>
          <div>
            <MoreBreakingNews />
          </div>
          <div className='my-8'>
            <HomeOtherNews />
          </div>
        </Container>
          : <Container>
            <div className='grid grid-cols-3 gap-10 '>
              <div className='lg:col-span-2 col-span-3'>
                <AddThree />
              </div>
              <div className='lg:col-span-1 col-span-3 '>
                <AddFour />
              </div>
            </div>

            {
              <div className='grid grid-cols-3 gap-10 my-8'>
                <div className='lg:col-span-2 col-span-3'>
                  {
                    pathname === "/international" && <InterNationalNews /> || pathname === "/national" && <NationalNews /> || pathname === "/politics" && <PoliticsNews /> || pathname === "/economy" && <EconomyNews /> || pathname === "/sports" && <SportsNews /> || pathname === "/law-justice" && <LawAndJustice /> || pathname === "/capital" && <CapitalNews /> || pathname === "/administration" && <AdministratorNews /> || pathname === "/education" && <EducationNews /> || pathname === "/district-news" && <DistrictNews /> || pathname === "/abroad" && <AbroadNews /> || pathname === "/information-technology" && <InformationTechnology /> || pathname === "/islam" && <IslamNews /> || pathname === "/job-news" && <JobNews />
                  }
                </div>
                <div className='lg:col-span-1 col-span-3 '>
                  <Add />
                  <NewsTitle />
                  <AddTwo />
                </div>
              </div>

            }
            <div className='my-8'>
              <HomeBanner />
            </div>
            <div className='my-8'>
              <HomeOtherNews />
            </div>
            <div className='grid grid-cols-3 my-10 gap-10'>
              <div className='lg:col-span-2 col-span-3'>
                <HomeLiveNews />
              </div>
              <div className='lg:col-span-1 col-span-3'>
                <HomeTodayNews />
              </div>
            </div>
          </Container>
      }





    </div>
  );
};

export default HomeNews;
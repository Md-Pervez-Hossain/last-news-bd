"use client"
import BusinessNews from '@/components/BusinessNews/BusinessNews';
import CrimeNews from '@/components/CrimeNews/CrimeNews';
import EducationNews from '@/components/EducationNews/EducationNews';
import EntertainmentNews from '@/components/EntertainmentNews/EntertainmentNews';
import GameNews from '@/components/GameNews/GameNews';
import HomeNews from '@/components/HomeNews/HomeNews';
import JobsNews from '@/components/JobsNews/JobsNews';
import LifeStyleNews from '@/components/LifeStyleNews/LifeStyleNews';
import PoliticsNews from '@/components/PoliticsNews/PoliticsNews';
import SepcialNews from '@/components/SepcialNews/SepcialNews';

import ShowContent from '@/components/Share/ShowContent/ShowContent';
import TechnologyNews from '@/components/TechnologyNews/TechnologyNews';
import ViewsNews from '@/components/ViewsNews/ViewsNews';
import WorldNews from '@/components/WorldNews/WorldNews';
import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React, { useState } from 'react';

const Menubar = () => {
  const [show, setShow] = useState("home")
  return (
    <div>
      <div className='bg-primary py-8 '>
        <Container>
          <Title className="text-white ">News</Title>
          <ShowContent show={show} setShow={setShow} />
        </Container>

      </div>
      <div className='py-10'>
        {show === "home" && <HomeNews />}
        {show === "politics" && <PoliticsNews />}
        {show === "crime" && <CrimeNews />}
        {show === "world" && <WorldNews />}
        {show === "business" && <BusinessNews />}
        {show === "views" && <ViewsNews />}
        {show === "game" && <GameNews />}
        {show === "entertainment" && <EntertainmentNews />}
        {show === "jobs" && <JobsNews />}
        {show === "lifestyle" && <LifeStyleNews />}
        {show === "technology" && <TechnologyNews />}
        {show === "education" && <EducationNews />}
        {show === "special_news" && <SepcialNews />}
      </div>
    </div>
  );
};

export default Menubar;
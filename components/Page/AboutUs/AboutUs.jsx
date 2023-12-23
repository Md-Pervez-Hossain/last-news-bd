import Container from '@/components/ui/Container/Container';
import React from 'react';
import HomeBanner from '../HomeNews/HomeBanner/HomeBanner';
import CompanyStory from './CompanyStory';
import TeamMember from './TeamMember';

const AboutUs = () => {
  return (
    <div>
      <Container>
        <HomeBanner />
        <CompanyStory />
        <TeamMember />
      </Container>
    </div>
  );
};

export default AboutUs;
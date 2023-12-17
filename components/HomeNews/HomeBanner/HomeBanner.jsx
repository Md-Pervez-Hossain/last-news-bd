import React from 'react';
import Image from 'next/image'
import homeBanner from "../../../assets/images/Home_banner.png"
import Container from '@/components/ui/Container/Container';
const HomeBanner = () => {
  return (
    <div>
      <Container>
        <Image
          src={homeBanner}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
      </Container>
    </div>
  );
};

export default HomeBanner;
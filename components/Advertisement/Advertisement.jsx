import Container from '@/components/ui/Container/Container';
import React from 'react';
import HomeBanner from '../Page/HomeNews/HomeBanner/HomeBanner';
import Image from "next/image"
import newsPic from "../../assets/images/advertisement_pic.png"
const Advertisement = () => {
  return (
    <div>
      <HomeBanner />
      <Container>
        <div className='mt-10'>
          <Image
            src={newsPic}
            alt="Picture of the Email"
            style={{ objectFit: "contain" }}

          />
        </div>
      </Container>
    </div>
  );
};

export default Advertisement;
import React from 'react';
import Image from 'next/image'
import globeIcon from "../../../assets/icons/Globe Icon.svg"
import newsIcon from "../../../assets/icons/News  Paper 1.svg"
import Container from '@/components/ui/Container/Container';
import { PrimaryButton } from '@/components/Share/Buttons/Buttons';

const MiddleMenu = () => {
  return (
    <div className='' >
      <Container>
        <div className='flex justify-between gap-5 items-center py-5'>
          <div className='flex items-center gap-3'>
            <Image alt='image' width={20} height={20} src={globeIcon} />
            <h2>Monday, December 11, 2023</h2>
          </div>
          <div className='flex items-center gap-3'>
            <Image alt='image' width={30} height={30} src={newsIcon} />
            <h2>Last News BD</h2>
          </div>
          <div className='flex items-center gap-3'>
            <PrimaryButton >Search</PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiddleMenu;
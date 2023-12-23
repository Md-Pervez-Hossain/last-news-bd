import React from 'react';
import Image from 'next/image'
import paperIcon from "../../../assets/icons/paper_icon.png"
import languageIcon from "../../../assets/icons/language_type.svg"
import faceBookIcon from "../../../assets/icons/icons8-facebook 1.svg"
import linkedinIcon from "../../../assets/icons/icons8-linkedin 1.svg"
import twitterIcon from "../../../assets/icons/icons8-twitter-circled 1.svg"
import instagramIcon from "../../../assets/icons/icons8-instagram 1.svg"
import youtubeIcon from "../../../assets/icons/icons8-youtube 1.svg"
import Container from '@/components/ui/Container/Container';
const Navigation = () => {
  return (
    <div className='  py-3 bg-[#F5F5F5]'>
      <Container>
        <div className='flex  justify-between gap-5 flex-wrap'>
          <div className='flex items-center gap-10'>
            <div className='flex items-center gap-3'>
              <Image alt='image' width={20} height={20} src={paperIcon} />
              <h2>ই-পেপার</h2>
            </div>
            <div className='flex items-center gap-3'>
              <Image alt='image' width={30} height={30} src={languageIcon} />
              <h2>E-Paper</h2>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <h3 className='bg-secondary px-4 py-2 rounded-md text-white'>সরকার অনুমোদিত পোর্টাল</h3>
            <h2>আমাদের অনুসরণ করো: </h2>
            <div className='flex flex-wrap items-center gap-3 cursor-pointer'>
              <Image alt='image' width={30} height={30} src={faceBookIcon} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
              <Image alt='image' width={30} height={30} src={linkedinIcon} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
              <Image alt='image' width={30} height={30} src={twitterIcon} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
              <Image alt='image' width={30} height={30} src={instagramIcon} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
              <Image alt='image' width={30} height={30} src={youtubeIcon} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
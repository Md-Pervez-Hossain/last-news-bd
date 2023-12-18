import React from 'react';
import Image from "next/image"
import Container from '../ui/Container/Container';
const SocialNetwork = ({ image, title, className }) => {
  return (
    <div >
      <div className={`flex items-center gap-5 p-5  ${className}`}>
        <Image
          src={image}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={50}
        />
        <h2 className='font-[600]'>{title}</h2>
      </div>

    </div>
  );
};

export default SocialNetwork;
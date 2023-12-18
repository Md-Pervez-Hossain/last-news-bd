import React from 'react';
import Container from '../ui/Container/Container';
import Image from "next/image"
import addressIcon from "../../assets/icons/address_icon.svg"
import contactIcon from "../../assets/icons/Contact_icon.svg"
import emailIcon from "../../assets/icons/email_icon.svg"
const ContactInfo = () => {
  return (
    <div className='mt-16'>
      <Container>
        <div className='grid grid-cols-3 gap-10'>
          <div className=' border-b-[10px] border-b-secondary shadow-xl p-5'>
            <Image
              src={addressIcon}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
            <h4 className='text-[24px] font-[600] my-2'>Address</h4>
            <p>Lakeside, Road-104, Gulshan-2, Dhaka Bangladesh</p>
          </div>
          <div className=' border-b-[10px] border-b-secondary shadow-xl p-5'>
            <Image
              src={emailIcon}
              alt="Picture of the Email"
              style={{ objectFit: "contain" }}
            />
            <h4 className='text-[24px] font-[600] my-2'>Email Address</h4>
            <p>lastnewsbd@gmail.com</p>
            <p>support@lastnewsbd.com</p>
          </div>
          <div className=' border-b-[10px] border-b-secondary shadow-xl p-5'>
            <Image
              src={addressIcon}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
            <h4 className='text-[24px] font-[600] my-2'>Contact Number</h4>
            <p>01900000000</p>
            <p> 01800000000</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInfo;
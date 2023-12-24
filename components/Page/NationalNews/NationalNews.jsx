"use client"
import Container from '@/components/ui/Container/Container';
import React, { useState } from 'react';
import SearchInternationalNews from '../InterNationalNews/SearchInternationalNews';
import Title from '@/components/ui/Title/Title';
import { PrimaryButton } from '@/components/Share/Buttons/Buttons';
import NationalNewsTags from './NationalNewsTags';
import NewsTags from './NationalNewsTags';

const NationalNews = () => {
  const [show, setShow] = useState("জাতীয়")
  const NationalNewsTag = [
    {
      id: 1,
      title: "জাতীয়"
    },
    {
      id: 2,
      title: "অবরোধ"
    },
    {
      id: 3,
      title: "নির্বাচন"
    },
    {
      id: 4,
      title: "ইসরায়েল-ফিলিস্তিন"
    },
    {
      id: 5,
      title: "সংঘাতচাকরির-খবর"
    },
    {
      id: 6,
      title: "নামাজের-সময়সূচি"
    },
    {
      id: 7,
      title: "আবহাওয়া"
    },
  ]
  return (
    <div>
      <Title>খুজুন</Title>
      <div className='flex  items-center my-8'>
        <input placeholder='write Your Email' className='    w-full  px-4 py-3 border-2 ' />
        <PrimaryButton className="bg-secondary border-2 border-secondary text-white -ms-2 px-4 py-3 rounded-none focus:outline-none " >অনুসন্ধান</PrimaryButton >
      </div>
      <NewsTags show={show} setShow={setShow} tagData={NationalNewsTag} />

      {show === "জাতীয়" && <p>জাতীয় News here</p>}
      {show === "অবরোধ" && <p>অবরোধ News here</p>}
      {show === "নির্বাচন" && <p>নির্বাচন News here</p>}
      {show === "ইসরায়েল-ফিলিস্তিন" && <p>ইসরায়েল-ফিলিস্তিন News here</p>}
      {show === "সংঘাতচাকরির-খবর" && <p>সংঘাতচাকরির-খবর News here</p>}
      {show === "নামাজের-সময়সূচি" && <p>নামাজের-সময়সূচি News here</p>}
      {show === "আবহাওয়া" && <p>আবহাওয়া News here</p>}
    </div>
  );
};

export default NationalNews;
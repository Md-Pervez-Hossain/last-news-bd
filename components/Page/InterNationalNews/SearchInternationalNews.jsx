
"use client"
import { PrimaryButton } from '@/components/Share/Buttons/Buttons';
import Title from '@/components/ui/Title/Title';
import React, { useState } from 'react';

const SearchInternationalNews = ({ show, setShow }) => {
  return (
    <div>
      <Title>খুজুন</Title>
      <div className='flex  items-center my-8'>
        <input placeholder='write Your Email' className='    w-full  px-4 py-3 border-2 ' />
        <PrimaryButton className="bg-secondary border-2 border-secondary text-white -ms-2 px-4 py-3 rounded-none focus:outline-none " >অনুসন্ধান</PrimaryButton >
      </div>
      <div className='flex items-center flex-wrap  gap-5  my-5'>
        <button onClick={() => setShow("আন্তর্জাতিক")} className={show === "আন্তর্জাতিক" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>আন্তর্জাতিক</button>
        <button onClick={() => setShow("অবরোধ")} className={show === "অবরোধ" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>অবরোধ</button>
        <button onClick={() => setShow("নির্বাচন")} className={show === "নির্বাচন" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>নির্বাচন</button>
        <button onClick={() => setShow("ইসরায়েল-ফিলিস্তিন")} className={show === "ইসরায়েল-ফিলিস্তিন" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>ইসরায়েল-ফিলিস্তিন</button>
        <button onClick={() => setShow("সংঘাতচাকরির-খবর")} className={show === "সংঘাতচাকরির-খবর" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>সংঘাতচাকরির-খবর</button>
        <button onClick={() => setShow("নামাজের-সময়সূচি")} className={show === "নামাজের-সময়সূচি" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>নামাজের-সময়সূচি</button>
        <button onClick={() => setShow("আবহাওয়া")} className={show === "আবহাওয়া" ? 'bg-secondary px-4 py-2 rounded-lg text-white ' : 'bg-[#f5f5f5] px-4 py-2 rounded-lg '}>আবহাওয়া</button>
      </div>
    </div>
  );
};

export default SearchInternationalNews;
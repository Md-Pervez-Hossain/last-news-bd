"use client"
import NewsTags from '@/components/Share/NewsTags/NewsTags';
import Search from '@/components/Share/Search/Search';
import Container from '@/components/ui/Container/Container';
import React, { useState } from 'react';

const AdministratorNews = () => {
  const [show, setShow] = useState("প্রশাসন")
  const NationalNewsTag = [
    {
      id: 1,
      title: "প্রশাসন"
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
      <Search />
      <NewsTags show={show} setShow={setShow} tagData={NationalNewsTag} />
      {show === "প্রশাসন" && <p>জাতীয় News here</p>}
      {show === "অবরোধ" && <p>অবরোধ News here</p>}
      {show === "নির্বাচন" && <p>নির্বাচন News here</p>}
      {show === "ইসরায়েল-ফিলিস্তিন" && <p>ইসরায়েল-ফিলিস্তিন News here</p>}
      {show === "সংঘাতচাকরির-খবর" && <p>সংঘাতচাকরির-খবর News here</p>}
      {show === "নামাজের-সময়সূচি" && <p>নামাজের-সময়সূচি News here</p>}
      {show === "আবহাওয়া" && <p>আবহাওয়া News here</p>}
    </div>
  );
};

export default AdministratorNews; <Container>
  <h2>Administrator News</h2></Container>
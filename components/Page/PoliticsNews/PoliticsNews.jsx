"use client";
import Search from "@/components/Share/Search/Search";
import React, { useState } from "react";
import PoliticsNewsTags from "./PoliticsNewsTags";

const PoliticsNews = ({ politicsNews }) => {
  console.log(politicsNews);

  const [show, setShow] = useState("রাজনীতি");
  const NationalNewsTag = [
    {
      id: 1,
      title: "রাজনীতি",
    },
    {
      id: 2,
      title: "অবরোধ",
    },
    {
      id: 3,
      title: "নির্বাচন",
    },
    {
      id: 4,
      title: "ইসরায়েল-ফিলিস্তিন",
    },
    {
      id: 5,
      title: "সংঘাতচাকরির-খবর",
    },
    {
      id: 6,
      title: "নামাজের-সময়সূচি",
    },
    {
      id: 7,
      title: "আবহাওয়া",
    },
  ];
  return (
    <div>
      <Search />
      <PoliticsNewsTags
        show={show}
        setShow={setShow}
        tagData={NationalNewsTag}
      />
      {show === "জাতীয়" && <p>জাতীয় News here</p>}
      {show === "অবরোধ" && <p>অবরোধ News here</p>}
      {show === "নির্বাচন" && <p>নির্বাচন News here</p>}
      {show === "ইসরায়েল-ফিলিস্তিন" && <p>ইসরায়েল-ফিলিস্তিন News here</p>}
      {show === "সংঘাতচাকরির-খবর" && <p>সংঘাতচাকরির-খবর News here</p>}
      {show === "নামাজের-সময়সূচি" && <p>নামাজের-সময়সূচি News here</p>}
      {show === "আবহাওয়া" && <p>আবহাওয়া News here</p>}

      {politicsNews?.data?.map((news) => {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: news?.content }} />
          </>
        );
      })}
    </div>
  );
};

export default PoliticsNews;

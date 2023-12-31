"use client";
import NewsTags from "@/components/Share/NewsTags/NewsTags";
import Search from "@/components/Share/Search/Search";
import Container from "@/components/ui/Container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SportsNews = ({ newsCategoryData }) => {
  console.log(newsCategoryData);
  const [slicedContent, setSlicedContent] = useState("");

  useEffect(() => {
    if (newsCategoryData?.data) {
      const contentToSlice = newsCategoryData?.data.map(
        (sports) => sports?.content
      );
      console.log(contentToSlice);
      const sliced = contentToSlice.map((content) => content.slice(0, 200)); // Slicing the content to first 100 characters
      console.log(sliced);
      setSlicedContent(sliced);
    }
  }, [newsCategoryData]);
  console.log(slicedContent);
  return (
    <div>
      <Search />

      {newsCategoryData?.data?.map((sports) => {
        return (
          <>
            <div>
              <img
                src={sports?.post_img}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
              />
              <div>
                <h4>{sports?.title}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sports?.content,
                  }}
                />
                <Link
                  href={`/news-details/${sports?.slug}?post_no=${sports?.post_no}`}
                >
                  <p>আরও পড়ুন </p>
                </Link>
              </div>
            </div>
          </>
        );
      })}
      {/* <NewsTags show={show} setShow={setShow} tagData={NationalNewsTag} />
      {show === "জাতীয়" && <p>জাতীয় News here</p>}
      {show === "অবরোধ" && <p>অবরোধ News here</p>}
      {show === "নির্বাচন" && <p>নির্বাচন News here</p>}
      {show === "ইসরায়েল-ফিলিস্তিন" && <p>ইসরায়েল-ফিলিস্তিন News here</p>}
      {show === "সংঘাতচাকরির-খবর" && <p>সংঘাতচাকরির-খবর News here</p>}
      {show === "নামাজের-সময়সূচি" && <p>নামাজের-সময়সূচি News here</p>}
      {show === "আবহাওয়া" && <p>আবহাওয়া News here</p>} */}
    </div>
  );
};

export default SportsNews;

"use client";
import NewsTags from "@/components/Share/NewsTags/NewsTags";
import Search from "@/components/Share/Search/Search";
import React, { useState } from "react";
import Link from "next/link";
const InformationTechnology = ({ newsCategoryData }) => {
  console.log(newsCategoryData);
  const [show, setShow] = useState("তথ্য-প্রযুক্তি");

  return (
    <div>
      <Search />

      {newsCategoryData?.data?.map((news) => {
        return (
          <>
            <div>
              <img
                src={news?.post_img}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
              />
              <div>
                <div>
                  <h4>{news?.title}</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: news?.content,
                    }}
                  />
                  <Link
                    href={`/news-details/${news?.slug}?post_no=${news?.post_no}`}
                  >
                    <p>আরও পড়ুন </p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default InformationTechnology;

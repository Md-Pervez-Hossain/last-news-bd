"use client";
import NewsTags from "@/components/Share/NewsTags/NewsTags";
import Search from "@/components/Share/Search/Search";
import Container from "@/components/ui/Container/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const News = ({ newsCategoryData }) => {
  console.log(newsCategoryData);
  const [slicedContent, setSlicedContent] = useState("");
  console.log(slicedContent);
  return (
    <div>
      <Search />
      <div className="grid grid-cols-3 gap-5">
        {newsCategoryData?.data.length > 0 ? (
          newsCategoryData?.data?.map((sports) => {
            return (
              <>
                <div className="bg-white shadow-xl rounded-lg">
                  <div className="group overflow-hidden cursor-pointer">
                    <img
                      src={sports?.post_img}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-[16px] mb-3">{sports?.title}</h4>
                    <Link
                      href={`/news-details/${sports?.slug}?post_no=${sports?.post_no}`}
                    >
                      <p>আরও পড়ুন </p>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default News;

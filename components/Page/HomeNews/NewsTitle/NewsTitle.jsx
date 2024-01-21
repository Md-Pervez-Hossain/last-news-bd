"use client";

import React, { useState } from "react";

import LatestNewsTitle from "./LatestNewsTitle";
import TrendingNewsTitle from "./TrendingNewsTitle";

const NewsTitle = ({ newsCategoryData, category_no }) => {
  const [show, setShow] = useState("latest_news");
  return (
    <div className="bg-[#F5F5F5] my-8  px-4 py-3 rounded-md ">
      <div className="flex items-center justify-between pb-3 ">
        <button
          onClick={() => setShow("latest_news")}
          className={
            show === "latest_news"
              ? "border-b-[3px]  border-b-secondary text-secondary font-[600] transition-all ease-in-out duration-500 "
              : " py-5  "
          }
        >
          সদ্যপ্রাপ্ত সংবাদ
        </button>
        <button
          onClick={() => setShow("trending_news")}
          className={
            show === "trending_news"
              ? "border-b-[3px]  border-b-secondary text-secondary font-[600] transition-all ease-in-out duration-500  "
              : " py-5  "
          }
        >
          সর্বশেষ সংবাদ
        </button>
      </div>
      <div>
        {show === "latest_news" && (
          <LatestNewsTitle
            newsCategoryData={newsCategoryData}
            category_no={category_no}
          />
        )}
        {show === "trending_news" && (
          <TrendingNewsTitle
            newsCategoryData={newsCategoryData}
            category_no={category_no}
          />
        )}
      </div>
    </div>
  );
};

export default NewsTitle;

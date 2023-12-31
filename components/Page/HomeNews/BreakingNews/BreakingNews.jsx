import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import "./BreakingNews.css";
import image1 from "../../../../assets/images/breaking_news_1.png";
import image2 from "../../../../assets/images/breaking_news_2.png";
import image3 from "../../../../assets/images/breaking_news_3.png";
import image4 from "../../../../assets/images/breaking_news_4.png";
import image5 from "../../../../assets/images/breaking_news_5.png";
import { motion } from "framer-motion";
import Image from "next/image";
const BreakingNews = ({ newsCategoryData }) => {
  console.log(newsCategoryData?.data?.[0]?.post_img);
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className="grid grid-cols-4 gap-5 grid-rows-4 py-5">
        <div className="row-span-4 bg-gray-500 lg:col-span-2 col-span-4   cursor-pointer">
          <div className="  overflow-hidden group">
            <div className=" group-hover:scale-105 transition-all duration-300">
              <img
                src={image1}
                alt="Picture of the author"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className=" h-16 text-white  w-full p-5 opacity-75"></div>
            <h2 className=" w-full p-3 text-white text-[24px]">
              {newsCategoryData?.data?.[0].title}
            </h2>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-4 lg:row-span-2 row-span-4 bg-gray-500  cursor-pointer">
          {newsCategoryData?.data?.map((news) => {
            return (
              <>
                <div>
                  <img
                    src={image1}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                  />
                  <h2>{news?.title}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;

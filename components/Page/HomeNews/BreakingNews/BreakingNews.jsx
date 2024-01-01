import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import "./BreakingNews.css";
import image1 from "../../../../assets/images/breaking_news_1.png";
import image2 from "../../../../assets/images/breaking_news_2.png";
import image3 from "../../../../assets/images/breaking_news_3.png";
import image4 from "../../../../assets/images/breaking_news_4.png";
import image5 from "../../../../assets/images/breaking_news_5.png";
import Image from "next/image";
const BreakingNews = ({ newsCategoryData }) => {
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className="grid grid-cols-3  grid-rows-4 gap-5  py-5">
        <div className=" col-span-3 lg:col-span-2 row-span-4">
          <div className="  bg-gray-500     cursor-pointer">
            <div className="  overflow-hidden group">
              <div className=" group-hover:scale-105 transition-all duration-300">
                <img
                  src={image1}
                  alt="Picture of the author"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className=" h-16 text-white  w-full p-5 opacity-75"></div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 col-span-3 lg:col-span-1 row-span-4 grid md:grid-cols-2 gap-5  cursor-pointer">
          {newsCategoryData?.data?.length > 0 &&
            newsCategoryData?.data?.map((news) => {
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

import React from "react";
import Image from "next/image";
import image1 from "../../../../assets/images/recent_news_1.png";
import image2 from "../../../../assets/images/recent_news_2.png";
import Title from "@/components/ui/Title/Title";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const RecentNews = ({ newsCategoryData }) => {
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className="grid lg:grid-cols-2 gap-10 my-5 cursor-pointer">
        <div className=" overflow-hidden group">
          <div className="  group-hover:scale-105 transition-all duration-300">
            <img
              src={image1}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
            {newsCategoryData?.data?.length > 0 ? (
              newsCategoryData?.data?.[0].title
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>
        <div className=" overflow-hidden group">
          <div className="group-hover:scale-105 transition-all duration-300">
            <img
              src={image1}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
            {newsCategoryData?.data?.length > 0 &&
            newsCategoryData?.data?.length > 1 ? (
              newsCategoryData?.data?.[1].title
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;

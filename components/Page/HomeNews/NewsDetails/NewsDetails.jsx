import Container from "@/components/ui/Container/Container";
import React from "react";

import HomeTodayNews from "../HomeTodayNews/HomeTodayNews";
import NewsTitle from "../NewsTitle/NewsTitle";
import HomeOtherNews from "../HomeOtherNews/HomeOtherNews";
import SingleNewsPostDetails from "./SingleNewsPostDetails";
import Add from "../Adds/Add";
import HomeBanner from "../HomeBanner/HomeBanner";

const NewsDetails = ({
  postDetails,
  adsData,
  newsCategoryData,
  socialData,
}) => {
  return (
    <div>
      <Container>
        {/* <HomeBanner adsData={adsData} /> */}
        <div className="grid grid-cols-3 gap-10 my-8">
          <div className="lg:col-span-2 col-span-3">
            <SingleNewsPostDetails
              postDetails={postDetails}
              socialData={socialData}
            />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <Add adsData={adsData} />
            <div className="my-5">
              <HomeTodayNews newsCategoryData={newsCategoryData} />
            </div>
            <div className="my-5">
              <NewsTitle newsCategoryData={newsCategoryData} />
            </div>
            <Add adsData={adsData} />
          </div>
        </div>
        <HomeOtherNews newsCategoryData={newsCategoryData} />
      </Container>
    </div>
  );
};

export default NewsDetails;

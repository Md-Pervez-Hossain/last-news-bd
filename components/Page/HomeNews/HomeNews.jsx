"use client";
import React, { useState } from "react";
import Container from "../../ui/Container/Container";
import HomeBanner from "./HomeBanner/HomeBanner";
import BreakingNews from "./BreakingNews/BreakingNews";
import LatestNews from "./LatestNews/LatestNews";
import NewsTitle from "./NewsTitle/NewsTitle";
import Title from "../../ui/Title/Title";
import Add from "./Adds/Add";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import RecentNews from "./RecentNews/RecentNews";
import HomeOtherNews from "./HomeOtherNews/HomeOtherNews";
import HomeLiveNews from "./HomeLiveNews/HomeLiveNews";
import HomeTodayNews from "./HomeTodayNews/HomeTodayNews";
import HomeSpecialNews from "./HomeSpecialNews/HomeSpecialNews";
import AddTwo from "./Adds/AddTwo";
import AddThree from "./Adds/AddThree";
import AddFour from "./Adds/AddFour";
import MoreBreakingNews from "./MoreBreakingNews/MoreBreakingNews";
import { usePathname } from "next/navigation";
import News from "../News/News";

const HomeNews = ({ newsCategoryData, adsData, photos }) => {
  console.log(newsCategoryData);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Container>
        {pathname === "/home" && (
          <>
            <HomeBanner adsData={adsData} />
            <div className="my-5">
              <Title> সর্বশেষ সংবাদ</Title>
            </div>
          </>
        )}
        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 col-span-3">
            {pathname === "/home" && (
              <>
                <LatestNews newsCategoryData={newsCategoryData} />
                <HomeSpecialNews newsCategoryData={newsCategoryData} />
              </>
            )}
            {pathname !== "/home" && (
              <>
                {" "}
                <HomeBanner adsData={adsData} />
                <News newsCategoryData={newsCategoryData} />
              </>
            )}
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <Add adsData={adsData} />
            <NewsTitle newsCategoryData={newsCategoryData} />
            <AddTwo adsData={adsData} />
          </div>
        </div>
        <div className="py-8">
          <BreakingNews newsCategoryData={newsCategoryData} />
        </div>
        <div className="grid grid-cols-3 gap-10 items-center my-8 ">
          <div className="lg:col-span-2 col-span-3">
            <AddThree adsData={adsData} />
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <AddFour adsData={adsData} />
          </div>
        </div>
        {(pathname === "/home" || pathname === "/") && (
          <PhotoGallery photos={photos} />
        )}
        <div className="grid grid-cols-3 my-10 gap-10">
          <div className="lg:col-span-2 col-span-3">
            <HomeLiveNews newsCategoryData={newsCategoryData} />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <HomeTodayNews newsCategoryData={newsCategoryData} />
          </div>
        </div>
        <RecentNews newsCategoryData={newsCategoryData} />
        {/* <div className="my-8">
          <HomeBanner />
        </div> */}
        <div>
          <MoreBreakingNews newsCategoryData={newsCategoryData} />
        </div>
        <div className="my-8">
          <HomeOtherNews newsCategoryData={newsCategoryData} />
        </div>
      </Container>
    </div>
  );
};

export default HomeNews;

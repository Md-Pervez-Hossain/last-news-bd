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
import IslamNews from "../IslamNews/IslamNews";
import AbroadNews from "../AbroadNews/AbroadNews";
const HomeNews = ({ newsCategoryData }) => {
  console.log(newsCategoryData);
  const [show, setShow] = useState("আন্তর্জাতিক");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Container>
        {pathname === "/home" && (
          <>
            {" "}
            <HomeBanner />
            <div className="my-5">
              <Title> সর্বশেষ সংবাদ</Title>
            </div>
          </>
        )}

        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 col-span-3">
            {pathname === "/home" && (
              <>
                <LatestNews />
                <HomeSpecialNews />
              </>
            )}
            {pathname === "/islam" && (
              <IslamNews newsCategoryData={newsCategoryData} />
            )}
            {pathname === "/abroad" && (
              <AbroadNews newsCategoryData={newsCategoryData} />
            )}
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <Add />
            <NewsTitle />
            <AddTwo />
          </div>
        </div>
        <div className="py-8">
          <BreakingNews />
        </div>
        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 col-span-3">
            <AddThree />
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <AddFour />
          </div>
        </div>
        <PhotoGallery />
        <div className="grid grid-cols-3 my-10 gap-10">
          <div className="lg:col-span-2 col-span-3">
            <HomeLiveNews />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <HomeTodayNews />
          </div>
        </div>
        <RecentNews />
        <div className="my-8">
          <HomeBanner />
        </div>
        <div>
          <MoreBreakingNews />
        </div>
        <div className="my-8">
          <HomeOtherNews />
        </div>
      </Container>
    </div>
  );
};

export default HomeNews;

"use client";
import React, { useEffect, useState } from "react";
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import News from "../News/News";

const HomeNews = ({ newsCategoryData, adsData, photos }) => {
  const category_no = useSearchParams().get("name");
  const pathname = usePathname();
  return (
    <div>
      <Container>
        {pathname === "/home" && (
          <>
            <HomeBanner adsData={adsData} />
          </>
        )}
        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 col-span-3">
            {pathname === "/home" && (
              <>
                <LatestNews
                  category_no={category_no}
                  newsCategoryData={newsCategoryData}
                />
                <HomeSpecialNews
                  category_no={category_no}
                  newsCategoryData={newsCategoryData}
                />
              </>
            )}
            {pathname !== "/home" && (
              <>
                {" "}
                <HomeBanner adsData={adsData} />
                <News newsCategoryData={newsCategoryData} adsData={adsData} />
              </>
            )}
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <Add adsData={adsData} />
            <NewsTitle
              category_no={category_no}
              newsCategoryData={newsCategoryData}
            />
            <AddTwo adsData={adsData} />
          </div>
        </div>
        <div className="py-8">
          <BreakingNews
            category_no={category_no}
            newsCategoryData={newsCategoryData}
          />
        </div>
        <div className="grid grid-cols-3 gap-10 items-center my-8 ">
          <div className="lg:col-span-2 col-span-3">
            <AddThree adsData={adsData} />
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <AddFour adsData={adsData} />
          </div>
        </div>
        {pathname === "/home" && <PhotoGallery photos={photos} />}
        <div className="grid grid-cols-3 my-10 gap-10">
          <div className="lg:col-span-2 col-span-3">
            <HomeLiveNews
              category_no={category_no}
              newsCategoryData={newsCategoryData}
            />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <HomeTodayNews
              category_no={category_no}
              newsCategoryData={newsCategoryData}
            />
          </div>
        </div>
        {pathname === "/home" ||
          (pathname === "/" && (
            <RecentNews
              category_no={category_no}
              newsCategoryData={newsCategoryData}
            />
          ))}
        <div>
          <MoreBreakingNews
            category_no={category_no}
            newsCategoryData={newsCategoryData}
          />
        </div>
        <div className="my-8">
          <HomeOtherNews
            category_no={category_no}
            newsCategoryData={newsCategoryData}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeNews;

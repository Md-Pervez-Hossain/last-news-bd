"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import MediaGallery from "./MediaGallery/MediaGallery";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeVideoGallary from "./HomeVideoGallery/HomeVideoGallery";
import HomeOtherNews from "../HomeOtherNews/HomeOtherNews";
import AddThree from "../Adds/AddThree";
import AddFour from "../Adds/AddFour";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeAllPhotoGallery = ({ photoData, category }) => {
  const pathname = usePathname();
  console.log(photoData);
  console.log(category);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 col-span-3">
            <AddThree />
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <AddFour />
          </div>
        </div>
        {/* <div className="hidden lg:flex justify-between items-center  gap-5 flex-wrap text-black bg-primary p-8">
          {category?.data?.map((item) => {
            return (
              <>
                <Link
                  key={item?.id}
                  href={`/${item.slug}?name=${item?.category_no}`}
                  className={`${
                    pathname === `/${item.slug}`
                      ? "text-secondary "
                      : "text-white hover:text-secondary transition-all duration-300 ease-in-out"
                  }`}
                >
                  {item?.name}
                </Link>
              </>
            );
          })}
        </div> */}
      </Container>

      {/* <MediaGallery />
      <HomeVideoGallary /> */}
      <Container>
        <HomeOtherNews />
      </Container>
    </div>
  );
};

export default HomeAllPhotoGallery;

import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import img from "../../../../assets/images/latest_news_image.png";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const LatestNews = ({ newsCategoryData, category_no }) => {
  console.log(newsCategoryData);
  return (
    <div className="my-8">
      {/* <Title> সর্বশেষ সংবাদ</Title> */}
      <div className="py-5 relative ">
        <div className=" relative h-[400px] overflow-hidden  group rounded-md  ">
          <Image
            src={
              newsCategoryData?.data?.length > 0 &&
              newsCategoryData?.data?.[0]?.post_img
            }
            alt="Picture "
            fill
            className="group-hover:scale-105 transition-all duration-300 cursor-pointer rounded-md"
          />
        </div>
        {newsCategoryData?.data?.length > 0 ? (
          <Link
            href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
            className="text-gray-700 font-[600]  "
          >
            {newsCategoryData?.data?.[0]?.title}
          </Link>
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default LatestNews;

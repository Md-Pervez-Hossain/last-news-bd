import React from "react";
import Image from "next/image";
import image1 from "../../../../assets/images/recent_news_1.png";
import image2 from "../../../../assets/images/recent_news_2.png";
import Title from "@/components/ui/Title/Title";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import Link from "next/link";
const RecentNews = ({ newsCategoryData, category_no }) => {
  return (
    <div>
      <Title>বিশেষ সংবাদ</Title>
      <div className="grid lg:grid-cols-2 gap-10 my-5 cursor-pointer">
        <div>
          <div className=" overflow-hidden group rounded-md ">
            <Image
              src={
                newsCategoryData?.data?.length > 0 &&
                newsCategoryData?.data?.[0]?.post_img
              }
              alt="Image"
              width={600}
              height={600}
              className="rounded-md group-hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </div>
          {newsCategoryData?.data?.length > 0 ? (
            <Link
              href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
            >
              <h2 className="text-gray-700 font-[600]  line-clamp-2">
                {newsCategoryData?.data?.[0].title}
              </h2>
            </Link>
          ) : (
            <NoDataFound />
          )}
        </div>
        <div>
          <div className=" overflow-hidden group rounded-md ">
            <Image
              src={
                newsCategoryData?.data?.length > 0 &&
                newsCategoryData?.data?.[0]?.post_img
              }
              alt="Image"
              width={600}
              height={600}
              className="rounded-md group-hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </div>
          {newsCategoryData?.data?.length > 0 ? (
            <Link
              href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
            >
              <h2 className="text-gray-700 font-[600]  line-clamp-2">
                {newsCategoryData?.data?.[0].title}
              </h2>
            </Link>
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;

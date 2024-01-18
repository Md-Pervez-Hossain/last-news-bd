import Title from "@/components/ui/Title/Title";
import React from "react";

import Image from "next/image";
import image1 from "../../../../assets/images/more_breaking_news-2.png";
import image2 from "../../../../assets/images/more_news_1.png";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const MoreBreakingNews = ({ newsCategoryData, category_no }) => {
  return (
    <div>
      <Title>সদ্যপ্রাপ্ত সংবাদ</Title>
      <div className="grid grid-cols-3  grid-rows-4 gap-5  py-5">
        <div className=" col-span-3 lg:col-span-2 row-span-4   cursor-pointer rounded-lg">
          <div className="  overflow-hidden group">
            <div className=" group-hover:scale-105 transition-all duration-300">
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

            <div className=" h-16 text-white  w-full p-5 opacity-75"></div>
          </div>
        </div>
        <div className="  col-span-3 lg:col-span-1 row-span-4 grid md:grid-cols-2 gap-5  cursor-pointer ">
          {newsCategoryData?.data?.length > 0 ? (
            newsCategoryData?.data?.map((news) => {
              return (
                <>
                  <div className="overflow-hidden group shadow-xl rounded-lg">
                    <div className=" overflow-hidden group rounded-md ">
                      <Image
                        src={news?.post_img}
                        alt="Image"
                        width={600}
                        height={600}
                        className="rounded-md group-hover:scale-105 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <Link
                        className=" line-clamp-2 text-base font-[600] text-gray-700"
                        href={`/news-details/${news?.slug}?category_no=${category_no}&post_no=${news?.post_no}`}
                      >
                        {news?.title}
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreBreakingNews;

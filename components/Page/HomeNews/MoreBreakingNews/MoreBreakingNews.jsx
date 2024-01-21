import Title from "@/components/ui/Title/Title";
import React from "react";

import Image from "next/image";
import image1 from "../../../../assets/images/more_breaking_news-2.png";
import image2 from "../../../../assets/images/more_news_1.png";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const MoreBreakingNews = ({ newsCategoryData, category_no }) => {
  const filteredNews = newsCategoryData?.data?.filter(
    (news) => news?.top_news === "true"
  );
  console.log(filteredNews);
  const filteredNewsWithoutFirstElement = filteredNews?.slice(1);
  return (
    <div>
      <Title>শীর্ষ সংবাদ</Title>

      {filteredNews?.length > 0 ? (
        <>
          <div className="grid grid-cols-3  grid-rows-4 gap-5  py-5">
            <div className=" col-span-3 lg:col-span-2 row-span-4 cursor-pointer  rounded-lg">
              <div className=" relative lg:h-[500px] h-[300px] overflow-hidden  group rounded-md ">
                <Image
                  src={filteredNews?.[0]?.post_img}
                  alt="Picture "
                  fill
                  className=" group-hover:scale-105 transition-all duration-300 cursor-pointer rounded-md"
                />

                <div className="flex items-center justify-center">
                  <div className="absolute   bottom-0 w-full bg-primary lg:h-[75px] h-[60px] opacity-75 "></div>
                  <Link
                    href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
                    className="  font-[400] lg:text-[20px] text-base line-clamp-1 absolute    bottom-2 w-full text-white p-5"
                  >
                    {filteredNews?.[0]?.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="  col-span-3 lg:col-span-1 row-span-2 grid md:grid-cols-2 gap-5  cursor-pointer ">
              {filteredNewsWithoutFirstElement.map((news) => {
                return (
                  <div key={news?.id} className=" shadow-xl rounded-lg   ">
                    <div className="overflow-hidden group rounded-md ">
                      <Image
                        src={news?.post_img}
                        alt="Image"
                        width={250}
                        height={220}
                        objectFit="cover"
                        className="aspect-[4/3] w-full rounded-t group-hover:scale-105 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="p-4 ">
                      <Link
                        className="text-gray-700 text-base font-[600] line-clamp-2"
                        href={`/news-details/${news?.slug}?category_no=${category_no}&post_no=${news?.post_no}`}
                      >
                        {news?.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <NoDataFound />
        </>
      )}
    </div>
  );
};

export default MoreBreakingNews;

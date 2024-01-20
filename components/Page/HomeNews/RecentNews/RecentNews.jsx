import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title/Title";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import Link from "next/link";
const RecentNews = ({ newsCategoryData, category_no }) => {
  const filteredNews = newsCategoryData?.data?.filter(
    (news) => news?.special_news === "true"
  );
  return (
    <div className="my-5">
      <Title>বিশেষ সংবাদ</Title>
      {filteredNews?.length > 0 ? (
        <>
          {" "}
          <div className="grid lg:grid-cols-2 gap-10 my-5 cursor-pointer">
            <div className=" relative lg:h-[500px] h-[300px] overflow-hidden  group rounded-md lg:mb-5  ">
              <Image
                src={filteredNews?.[0]?.post_img}
                alt="Picture "
                fill
                className="group-hover:scale-105 transition-all duration-300 cursor-pointer rounded-md"
              />

              <div className="flex items-center justify-center">
                <div className="absolute   bottom-0 w-full bg-primary lg:h-[65px] h-[60px] opacity-75 "></div>
                <Link
                  href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
                  className="  font-[400] lg:text-[20px] text-base line-clamp-1 absolute    bottom-2 w-full text-white p-5"
                >
                  {filteredNews?.[0]?.title}
                </Link>
              </div>
            </div>
            <div>
              <div className=" relative lg:h-[500px] h-[300px] overflow-hidden  group rounded-md lg:mb-5 ">
                <Image
                  src={filteredNews?.[1]?.post_img}
                  alt="Picture "
                  fill
                  className="group-hover:scale-105 transition-all duration-300 cursor-pointer rounded-md"
                />

                <div className="flex items-center justify-center">
                  <div className="absolute   bottom-0 w-full bg-primary lg:h-[65px] h-[60px] opacity-75 "></div>
                  <Link
                    href={`/news-details/${newsCategoryData?.data?.[1]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[1]?.post_no}`}
                    className="  font-[400] lg:text-[20px] text-base line-clamp-1 absolute    bottom-1 w-full text-white p-5"
                  >
                    {filteredNews?.[1]?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <NoDataFound />
        </>
      )}
    </div>
  );
};

export default RecentNews;

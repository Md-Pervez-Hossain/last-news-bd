import Title from "@/components/ui/Title/Title";
import React from "react";

import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const HomeLiveNews = ({ newsCategoryData, category_no }) => {
  return (
    <div>
      <Title>সর্বশেষ সংবাদ</Title>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-8">
        {newsCategoryData?.data?.length > 0 ? (
          newsCategoryData?.data?.map((news) => {
            return (
              <>
                <div
                  className="flex flex-col gap-5 overflow-hidden group shadow-xl rounded-lg"
                  key={news.id}
                >
                  <div className=" group-hover:scale-105 transition-all duration-300 cursor-pointer">
                    {/* <Image
                    src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                  /> */}
                    <img
                      src={news?.post_img}
                      alt="Picture"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="p-4 flex flex-col h-full">
                    <h2 className="text-[18px] mb-3 line-clamp-2 text-base text-gray-700 font-[600]">{`${news.title}`}</h2>
                    <Link
                      className="mt-auto "
                      href={`/news-details/${news?.slug}?category_no=${category_no}&post_no=${news?.post_no}`}
                    >
                      <span className=" cursor-pointer text-[13px] text-gray-500">
                        আরও পড়ুন
                      </span>
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
  );
};

export default HomeLiveNews;

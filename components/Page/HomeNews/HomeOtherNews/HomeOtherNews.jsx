import Title from "@/components/ui/Title/Title";
import React from "react";

import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const HomeOtherNews = ({ newsCategoryData }) => {
  return (
    <div>
      <Title>ট্রেন্ডিং সংবাদ</Title>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-8">
        {newsCategoryData?.data?.length > 0 ? (
          newsCategoryData?.data
            ?.filter((news) => news?.trending_news === "true")
            ?.map((news) => {
              return (
                <>
                  <div
                    className="flex flex-col gap-5 overflow-hidden group shadow-xl rounded-lg"
                    key={news.id}
                  >
                    <div className=" group-hover:scale-105 transition-all duration-300">
                      {/* <Image
                    src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                  /> */}
                      <img
                        src={news?.post_img}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-[18px] mb-3">{`${news.title}`}</h2>
                      <Link
                        href={`/news-details/${news?.slug}?post_no=${news?.post_no}`}
                      >
                        <span className=" cursor-pointer">আরও পড়ুন</span>
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

export default HomeOtherNews;

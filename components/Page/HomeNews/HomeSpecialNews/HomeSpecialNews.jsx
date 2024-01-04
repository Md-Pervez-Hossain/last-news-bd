import Title from "@/components/ui/Title/Title";
import React from "react";
import "./HomeSepicalNews.css";
import Link from "next/link";
import Image from "next/image";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const HomeSpecialNews = ({ newsCategoryData }) => {
  return (
    <div>
      <Title>Special News</Title>
      <div className="grid md:grid-cols-2 3 xl:grid-cols-3 gap-10 my-8">
        {newsCategoryData?.data?.length > 0 ? (
          newsCategoryData.data
            ?.filter((news) => news?.social_news === "true")
            ?.map((news) => {
              return (
                <>
                  <div
                    className="flex flex-col gap-5 overflow-hidden group  shadow-lg rounded-lg"
                    key={news?.id}
                  >
                    <div className=" group-hover:scale-105 transition-all duration-300 cursor-pointer">
                      {/* <Image
                    src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                    width={500}
                  /> */}
                      <img
                        src={news?.post_img}
                        alt="Picture of the author"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <h2 className="text-base font-[600] text-gray-700 mb-3 line-clamp-2">{`${news.title}`}</h2>
                      <Link
                        href={`/news-details/${news?.slug}?post_no=${news?.post_no}`}
                        className="mt-auto"
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

export default HomeSpecialNews;

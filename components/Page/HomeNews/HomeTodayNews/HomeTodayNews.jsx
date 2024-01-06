import Title from "@/components/ui/Title/Title";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const HomeTodayNews = ({ newsCategoryData, category_no }) => {
  const currentDate = new Date();
  let filteredNews;
  if (newsCategoryData?.data?.length > 0) {
    filteredNews = newsCategoryData?.data?.filter((news) => {
      const newsDate = new Date(news.created_at);
      return (
        newsDate.getFullYear() === currentDate.getFullYear() &&
        newsDate.getMonth() === currentDate.getMonth() &&
        newsDate.getDate() === currentDate.getDate()
      );
    });
  }

  return (
    <div>
      <Title>আজকের সংবাদ</Title>
      <div className="my-5 ">
        {filteredNews?.length > 0 ? (
          filteredNews.map((news) => (
            <div
              className="flex flex-col gap-5 overflow-hidden group shadow-xl mb-5 rounded-lg"
              key={news.id}
            >
              <div className="group-hover:scale-105 transition-all duration-300">
                <img
                  src={news?.post_img}
                  alt="Picture "
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="p-3 flex flex-col h-full">
                <h2 className="text-base font-[600] text-gray-700 mb-3">{`${news.title}`}</h2>
                <Link
                  className="mt-auto text-[13px] text-gray-500"
                  href={`/news-details/${news?.slug}?category_no=${category_no}&post_no=${news?.post_no}`}
                >
                  <span className="cursor-pointer">আরও পড়ুন</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default HomeTodayNews;

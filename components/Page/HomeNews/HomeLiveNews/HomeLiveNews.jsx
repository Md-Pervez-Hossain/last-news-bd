import Title from "@/components/ui/Title/Title";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const HomeLiveNews = ({ newsCategoryData, category_no }) => {
  const filteredNews = newsCategoryData?.data?.filter(
    (news) => news?.latest_news === "true"
  );
  return (
    <div>
      {filteredNews?.length > 0 ? (
        <>
          <Title>সর্বশেষ সংবাদ</Title>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-8">
            {filteredNews?.map((news) => {
              return (
                <div
                  className="flex flex-col gap-5 overflow-hidden group shadow-xl rounded-lg"
                  key={news.id}
                >
                  <div className="overflow-hidden group rounded-md">
                    <Image
                      src={news?.post_img}
                      alt="Image"
                      width={500}
                      height={200}
                      objectFit="cover"
                      className="aspect-[4/3] rounded-t group-hover:scale-105 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[116px]">
                    <h2 className="text-[18px] mb-3 line-clamp-2 text-base text-gray-700 font-[600]">{`${news.title}`}</h2>
                    <Link
                      href={`/news-details/${news?.slug}?category_no=${category_no}&post_no=${news?.post_no}`}
                    >
                      <span className="cursor-pointer text-[13px] text-gray-500">
                        আরও পড়ুন
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
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

export default HomeLiveNews;

import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import img from "../../../../assets/images/latest_news_image.png";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const LatestNews = ({ newsCategoryData, category_no }) => {
  const filteredNews = newsCategoryData?.data?.filter(
    (news) => news?.latest_news === "true"
  );
  return (
    <div>
      {/* <Title> সর্বশেষ সংবাদ</Title> */}

      {filteredNews?.length > 0 ? (
        <>
          <div className=" relative lg:h-[500px] h-[300px] overflow-hidden  group rounded-md mb-5 ">
            <Image
              src={filteredNews?.[0]?.post_img}
              alt="Picture "
              fill
              className="group-hover:scale-105 transition-all duration-300 cursor-pointer rounded-md"
            />
            <div className="flex items-center justify-center">
              <Link
                href={`/news-details/${newsCategoryData?.data?.[0]?.slug}?category_no=${category_no}&post_no=${newsCategoryData?.data?.[0]?.post_no}`}
                className=" bg-primary/20  font-[400] lg:text-[20px] text-base line-clamp-1 absolute   lg:bottom-3 bottom-2 w-full text-white px-5 py-4"
              >
                {filteredNews?.[0]?.title}
              </Link>
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

export default LatestNews;

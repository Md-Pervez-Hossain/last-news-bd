import React from "react";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const LatestNewsTitle = ({ newsCategoryData }) => {
  console.log(newsCategoryData);

  return (
    <div>
      <ul className="cursor-pointer">
        {newsCategoryData?.data?.length > 0 ? (
          newsCategoryData?.data
            ?.filter((news) => news?.breaking_news === "true")
            .map((item) => {
              return (
                <>
                  <Link
                    href={`/news-details/${item?.slug}?post_no=${item?.post_no}`}
                  >
                    <li className="mb-5 hover:text-secondary transition-all duration-300 hover:ps-2 ">
                      {item.title}
                      <hr className="w-full h-[2px] bg-[#222222] opacity-10 mt-3" />
                    </li>
                  </Link>
                </>
              );
            })
        ) : (
          <NoDataFound />
        )}
      </ul>
    </div>
  );
};

export default LatestNewsTitle;

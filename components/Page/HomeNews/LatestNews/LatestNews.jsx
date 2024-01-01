import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import img from "../../../../assets/images/latest_news_image.png";
import Image from "next/image";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const LatestNews = ({ newsCategoryData }) => {
  return (
    <div>
      <div className="py-5 relative overflow-hidden  group ">
        <div className=" group-hover:scale-105 transition-all duration-300 cursor-pointer">
          {/* <Image
            src={img}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
            width={1200}
          /> */}
          <img
            src={img}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
            width={1200}
          />
        </div>
        <div className=" h-16 text-white absolute  bottom-5 w-full p-5 opacity-75"></div>
        {newsCategoryData?.data?.length > 0 ? (
          newsCategoryData?.data?.[0].title
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default LatestNews;

"use client";
import React, { useState, useEffect } from "react";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const HomeBanner = ({ adsData }) => {
  console.log(adsData);

  const [imageVisible, setImageVisible] = useState(true);

  const handleCloseClick = () => {
    setImageVisible(false);
  };

  return (
    <div className="pb-8">
      {adsData?.data?.length > 0 ? (
        <>
          {" "}
          <Splide
            options={{
              arrows: false,
              autoplay: true,
              pagination: true,
              perPage: 1,
              gap: 50,
              perMove: 1,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            {adsData?.data
              ?.filter((ads) => ads?.ad_placement === "headerTop")
              ?.map((ads) => {
                return (
                  <>
                    <SplideSlide className="relative h-[200px]">
                      <Image
                        src={ads?.ads_img}
                        alt="Image"
                        fill
                        className="rounded-md"
                      />
                    </SplideSlide>
                  </>
                );
              })}
          </Splide>
        </>
      ) : (
        <>
          <NoDataFound />
        </>
      )}
    </div>
  );
};

export default HomeBanner;

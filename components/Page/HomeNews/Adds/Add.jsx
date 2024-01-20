"use client";
import React, { useEffect, useState } from "react";
import addImage from "../../../../assets/images/add_image1.png";
import Image from "next/image";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Add = ({ adsData }) => {
  const [imageVisible, setImageVisible] = useState(true);

  const handleCloseClick = () => {
    setImageVisible(false);
  };

  return (
    <div>
      {adsData?.data?.length > 0 ? (
        <>
          {" "}
          <Splide
            options={{
              arrows: false,
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
              ?.filter((ads) => ads?.ad_placement === "sidebar")
              .map((ads) => {
                return (
                  <>
                    {imageVisible && (
                      <SplideSlide className="relative lg:h-[300px] h-[200px] rounded-md ">
                        <Image
                          src={ads?.ads_img}
                          alt="Image 1"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="rounded-md"
                        />
                        <span
                          className="bg-white p-1 shadow-lg absolute top-2 right-2 rounded-full cursor-pointer "
                          onClick={handleCloseClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M1 13L13 1M1 1L13 13"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </SplideSlide>
                    )}
                  </>
                );
              })}
          </Splide>
        </>
      ) : (
        <>
          {" "}
          <NoDataFound />{" "}
        </>
      )}
    </div>
  );
};

export default Add;

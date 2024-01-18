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
        {imageVisible && (
          <SplideSlide className="relative h-[300px] rounded-md ">
            <Image
              src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              sizes="(max-width: 768px) 100vw, 33vw"
              fill={true}
              className="rounded-md"
            />
            <span
              className="bg-white p-3 shadow-lg absolute top-2 right-2 rounded-full cursor-pointer"
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

        {imageVisible && (
          <SplideSlide className="relative h-[300px] rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              sizes="(max-width: 768px) 100vw, 33vw"
              fill={true}
              className="rounded-md"
            />
            <span
              className="bg-white p-3 shadow-lg absolute top-2 right-2 rounded-full cursor-pointer"
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

        {/* {adsData?.data?.map((ads) => {
          return (
            <>
              <SplideSlide>
                <img src="image1.jpg" alt="Image 1" />
              </SplideSlide>
            </>
          );
        })} */}
      </Splide>
    </div>
  );
};

export default Add;

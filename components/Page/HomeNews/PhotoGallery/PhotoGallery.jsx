"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "@/components/ui/Title/Title";
import "./PhotoGallery.css";
import Link from "next/link";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const PhotoGallery = ({ photos }) => {
  console.log(photos);
  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center flex-wrap gap-5 justify-between">
          <Title>ফটো গ্যালারি</Title>
          <Link href="/photo-gallery">
            <Title> দর্শন গ্যালারি</Title>
          </Link>
        </div>
      </div>
      {photos?.data?.length > 0 ? (
        <>
          {" "}
          <Splide
            options={{
              arrows: true,
              pagination: false,
              perPage: 3,
              gap: 30,
              perMove: 1,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            {photos?.data?.map((photo) => {
              return (
                <>
                  <SplideSlide className="relative ">
                    <Image
                      src={photo?.photo}
                      alt="Image"
                      width={300}
                      height={350}
                      className="rounded-md w-full h-[350px]"
                    />
                  </SplideSlide>
                </>
              );
            })}
          </Splide>
        </>
      ) : (
        <>
          {" "}
          <NoDataFound />
        </>
      )}
    </div>
  );
};

export default PhotoGallery;

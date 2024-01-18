"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "@/components/ui/Title/Title";
import "./PhotoGallery.css";
import Link from "next/link";
const PhotoGallery = ({ photos }) => {
  return (
    <div className="py-16">
      <div className="mb-5">
        <div className="flex items-center flex-wrap gap-5 justify-between">
          <Title className="lg:text-[24px] text-[16px]">ফটো গ্যালারি</Title>
          <Link href="/photo-gallery">
            <button className="lg:text-[24px] text-[16px] font-[600] border-2 rounded-full px-8 py-2">
              গ্যালারি
            </button>
          </Link>
        </div>
      </div>

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
        <SplideSlide className="relative h-[200px]">
          <Image
            src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            fill
            className="rounded-md"
          />
        </SplideSlide>
        <SplideSlide className="relative h-[200px] ">
          <Image
            src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            fill
            className="rounded-md"
          />
        </SplideSlide>
        <SplideSlide className="relative h-[200px] ">
          <Image
            src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            fill
            className="rounded-md"
          />
        </SplideSlide>
        <SplideSlide className="relative h-[200px] ">
          <Image
            src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
            fill
            className="rounded-md"
          />
        </SplideSlide>

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

export default PhotoGallery;

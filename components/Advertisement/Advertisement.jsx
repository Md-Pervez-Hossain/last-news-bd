"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import HomeBanner from "../Page/HomeNews/HomeBanner/HomeBanner";
import Image from "next/image";
import newsPic from "../../assets/images/advertisement_pic.png";
import NoDataFound from "../Share/NoDataFound/NoDataFound";
import Title from "../ui/Title/Title";
import { PrimaryButton } from "../Share/Buttons/Buttons";
const Advertisement = ({ addPackage, adsData }) => {
  console.log(addPackage);
  return (
    <div>
      <Container>
        <HomeBanner adsData={adsData} />
        <div className="my-12">
          <h2 className="text-center text-[32px] font-[600]">
            Choose Your Plan
          </h2>
        </div>
        <div className=" grid lg:grid-cols-3 gap-10">
          {addPackage?.data?.length > 0 ? (
            <>
              {addPackage?.data?.map((pac) => {
                return (
                  <>
                    <div className=" shadow-lg p-4 text-center  rounded-lg">
                      <p className="text-[24px] mb-3 font-[600]">{pac?.name}</p>
                      <p className="text-base">
                        Ads Duration : {pac?.ad_limit} Days
                      </p>
                      <p className="text-base">Amount : {pac?.amount} BDT</p>
                      <PrimaryButton className="my-4 text-base font-[600] ">
                        Select
                      </PrimaryButton>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <NoDataFound />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Advertisement;

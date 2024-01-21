"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import HomeBanner from "../Page/HomeNews/HomeBanner/HomeBanner";

import NoDataFound from "../Share/NoDataFound/NoDataFound";

import { PrimaryButton } from "../Share/Buttons/Buttons";
const Advertisement = ({ addPackage, adsData }) => {
  return (
    <div>
      <Container>
        <HomeBanner adsData={adsData} />
        <div className="my-12">
          <h2 className="text-center lg:text-[32px] text-[18px] font-[600]">
            আপনার পছন্দ বাছাই করুন
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
                      <PrimaryButton
                        disabled
                        className="my-4 text-base font-[500] "
                      >
                        নির্বাচন করুন
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

"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import HomeBanner from "../HomeNews/HomeBanner/HomeBanner";

const AboutUs = ({ aboutUsData, adsData }) => {
  console.log(aboutUsData);
  return (
    <div>
      <Container>
        <div>
          <HomeBanner adsData={adsData} />
        </div>
        {aboutUsData?.data?.length > 0 ? (
          aboutUsData?.data?.map((about) => {
            return (
              <>
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: about?.content,
                    }}
                  />
                }
              </>
            );
          })
        ) : (
          <NoDataFound />
        )}
      </Container>
    </div>
  );
};

export default AboutUs;

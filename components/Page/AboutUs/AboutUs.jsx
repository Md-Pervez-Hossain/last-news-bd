"use client";
import Container from "@/components/ui/Container/Container";
import React from "react";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const AboutUs = ({ aboutUsData }) => {
  console.log(aboutUsData);
  return (
    <div>
      <Container>
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

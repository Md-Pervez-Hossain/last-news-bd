/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Container from "../../ui/Container/Container";
import HomeBanner from "../HomeNews/HomeBanner/HomeBanner";
import Title from "@/components/ui/Title/Title";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";

const TermsAndConditions = ({ temsAndCondition }) => {
  console.log(temsAndCondition);
  return (
    <div>
      <Container>
        <HomeBanner />
        <div className="my-5 flex items-center justify-center">
          <Title>Terms And Condition</Title>
        </div>
        {temsAndCondition?.data?.length > 0 ? (
          temsAndCondition?.data?.map((termCon) => {
            return (
              <>
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: termCon?.content,
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

export default TermsAndConditions;

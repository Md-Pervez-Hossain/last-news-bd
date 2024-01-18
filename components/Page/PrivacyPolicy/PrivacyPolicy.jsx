import React from "react";
import Container from "../../ui/Container/Container";
import HomeBanner from "../HomeNews/HomeBanner/HomeBanner";
import Title from "@/components/ui/Title/Title";

const PrivacyPolicy = ({ adsData }) => {
  return (
    <div>
      <Container>
        <HomeBanner adsData={adsData} />

        <div className="my-5 flex items-center justify-center">
          <Title>Privacy Policy</Title>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;

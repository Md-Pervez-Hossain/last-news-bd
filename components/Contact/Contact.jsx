import React from "react";
import Container from "../ui/Container/Container";
import HomeBanner from "../Page/HomeNews/HomeBanner/HomeBanner";
import ContactInfo from "./ContactInfo";
import SocialNetwork from "./SocialNetwork";
import ContactForm from "./ContactForm";
import {
  fetchAdsData,
  fetchContactInfoData,
  fetchSocialData,
} from "@/app/libs/fetchData";

const Contact = async () => {
  const contactInfo = await fetchContactInfoData();
  const socialData = await fetchSocialData();
  const adsData = await fetchAdsData();
  return (
    <div className="my-16">
      <Container>
        <HomeBanner adsData={adsData} />
        <ContactInfo contactInfo={contactInfo} />
        <div className="my-10 grid grid-cols-3 gap-10">
          <div className="lg:col-span-1 col-span-3">
            <SocialNetwork socialData={socialData} />
          </div>
          <div className="lg:col-span-2 col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

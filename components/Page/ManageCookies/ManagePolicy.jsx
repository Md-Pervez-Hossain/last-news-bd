import Container from "@/components/ui/Container/Container";
import React from "react";
import HomeBanner from "../HomeNews/HomeBanner/HomeBanner";
import Title from "@/components/ui/Title/Title";

const ManageCookies = () => {
  return (
    <div>
      <Container>
        <HomeBanner />
        <div className="my-5 flex items-center justify-center">
          <Title>Manage Cookies</Title>
        </div>
      </Container>
    </div>
  );
};

export default ManageCookies;

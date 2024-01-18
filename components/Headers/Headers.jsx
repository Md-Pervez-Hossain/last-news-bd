import React from "react";
import Navigation from "./Navigation/Navigation";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import Menubar from "./Menubar/Menubar";
import {
  fetchData,
  fetchLogoData,
  fetchSocialData,
} from "@/app/libs/fetchData";

const Headers = async () => {
  const menuData = await fetchData();
  const socialData = await fetchSocialData();
  const logo = await fetchLogoData();
  return (
    <div className=" sticky top-0 z-[1000] ">
      <div>
        <Navigation socialData={socialData} />
      </div>
      <Menubar menuData={menuData} logo={logo} />
    </div>
  );
};

export default Headers;

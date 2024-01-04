import React from "react";
import Navigation from "./Navigation/Navigation";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import Menubar from "./Menubar/Menubar";
import { fetchData, fetchSocialData } from "@/app/libs/fetchData";

const Headers = async () => {
  const menuData = await fetchData();
  const socialData = await fetchSocialData();
  return (
    <div className="">
      <div>
        <Navigation socialData={socialData} />
      </div>
      <Menubar menuData={menuData} />
    </div>
  );
};

export default Headers;

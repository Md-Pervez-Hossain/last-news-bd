"use client";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Menubar from "./Menubar/Menubar";
import {
  useGetCategoryQuery,
  useGetLogoQuery,
  useGetSocialDataQuery,
} from "@/redux/api/apiSlice";

const Headers = () => {
  const { data: menuData } = useGetCategoryQuery();
  const { data: logoData } = useGetLogoQuery();
  const { data: socialData } = useGetSocialDataQuery();
  console.log(menuData);
  return (
    <div className=" sticky -top-[59.5px] z-[1000] ">
      <Navigation socialData={socialData} />
      <Menubar menuData={menuData} logo={logoData} />
    </div>
  );
};

export default Headers;

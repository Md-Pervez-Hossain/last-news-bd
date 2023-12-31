import React from "react";
import Navigation from "./Navigation/Navigation";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import Menubar from "./Menubar/Menubar";
import { fetchData } from "@/app/libs/fetchData";

const Headers = async () => {
  const menuData = await fetchData();
  // console.log(menuData);
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <Menubar menuData={menuData} />
    </div>
  );
};

export default Headers;

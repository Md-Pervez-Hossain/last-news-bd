import React from "react";
import Image from "next/image";
import globeIcon from "../../../assets/icons/Globe Icon.svg";
import newsIcon from "../../../assets/icons/News  Paper 1.svg";
import Container from "@/components/ui/Container/Container";
import { PrimaryButton } from "@/components/Share/Buttons/Buttons";

const MiddleMenu = () => {
  return (
    <div className="">
      <Container>
        <div className="flex justify-between gap-5 flex-wrap items-center py-5">
          <div className="flex items-center gap-3">
            <Image alt="image" width={20} height={20} src={globeIcon} />
            <h2>শুক্রবার, ২২ ডিসেম্বর ২০২৩</h2>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <input
              placeholder="search"
              className="px-4 py-2 rounded-full border-2 border-[#F5F5F5]"
            />
            <PrimaryButton className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
              Search
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiddleMenu;

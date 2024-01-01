import React from "react";
import { PrimaryButton } from "../Buttons/Buttons";
import Title from "@/components/ui/Title/Title";

const Search = () => {
  return (
    <div>
      <Title>খুজুন</Title>
      <div className="flex  items-center my-8">
        <input
          placeholder="খুজুন"
          className="    w-full  px-4 py-3 border-2 "
        />
        <PrimaryButton className="bg-secondary border-2 border-secondary text-white -ms-2 px-4 py-3 rounded-none focus:outline-none ">
          অনুসন্ধান
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Search;

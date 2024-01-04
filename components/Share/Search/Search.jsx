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
          className="    w-full  px-4 py-2 rounded-md border-2 focus:outline-none "
        />
        <button className="bg-secondary border-2 border-secondary text-white -ms-2 px-4 py-2  rounded-e-lg focus:outline-none ">
          অনুসন্ধান
        </button>
      </div>
    </div>
  );
};

export default Search;

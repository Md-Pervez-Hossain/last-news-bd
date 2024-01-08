"use client";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { PrimaryButtonWithIcons } from "../Share/Buttons/Buttons";
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleNewsletter = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://news-server-8hnz.onrender.com/api/v1/subscribe/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (response.status === 200) {
      setEmail("");
      toast.success("Successfully Added!");
    } else {
      toast.error("Subscription Failed!");
    }
  };
  return (
    <div>
      <form onSubmit={handleNewsletter}>
        <div className="flex  items-center  lg:my-5 mt-6 ">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="আপনার ইমেইল লিখুন"
            className=" w-full   lg:w-[200px]  px-4 py-2 rounded-lg focus:outline-none text-primary"
          />
          <PrimaryButtonWithIcons
            icon={<IoSend />}
            className="bg-secondary text-white px-4 py-3 -ms-5"
          ></PrimaryButtonWithIcons>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;

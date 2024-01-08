import React from "react";
import Image from "next/image";

import Link from "next/link";
import { fetchSocialData } from "@/app/libs/fetchData";
import Title from "../ui/Title/Title";
const SocialNetwork = async ({ socialData }) => {
  return (
    <div>
      <Title>Social Network</Title>
      <div className="flex items-center gap-5 my-5">
        {socialData?.data?.length > 0 ? (
          <>
            {socialData?.data?.map((social) => {
              return (
                <>
                  <div>
                    <Link href={social?.url_link}>
                      <img
                        src={social?.custom_icon}
                        alt="img"
                        style={{ objectFit: "contain" }}
                        className="group-hover:scale-105 transition-all duration-300"
                      />
                    </Link>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default SocialNetwork;

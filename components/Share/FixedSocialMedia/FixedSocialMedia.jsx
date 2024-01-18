import React from "react";
import Link from "next/link";
import { fetchSocialData } from "@/app/libs/fetchData";
import NoDataFound from "../NoDataFound/NoDataFound";

import Image from "next/image";
const FixedSocialMedia = async () => {
  const socialData = await fetchSocialData();
  return (
    <div className="flex flex-col flex-wrap items-center gap-3 cursor-pointer">
      {socialData?.data?.length > 0 ? (
        <>
          {socialData?.data?.map((social) => {
            return (
              <>
                <Link href={social?.url_link}>
                  <Image
                    src={social?.custom_icon}
                    alt="img"
                    style={{ objectFit: "contain" }}
                    width={20}
                    height={20}
                    className="group-hover:scale-105 transition-all duration-300 "
                  />
                </Link>
              </>
            );
          })}
        </>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default FixedSocialMedia;

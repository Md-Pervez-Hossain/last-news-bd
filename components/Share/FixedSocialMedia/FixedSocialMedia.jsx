import React from "react";
import Link from "next/link";
import { fetchSocialData } from "@/app/libs/fetchData";
import NoDataFound from "../NoDataFound/NoDataFound";
const FixedSocialMedia = async () => {
  const socialData = await fetchSocialData();
  return (
    <div>
      <div className="flex flex-col flex-wrap items-center gap-3 cursor-pointer">
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

export default FixedSocialMedia;

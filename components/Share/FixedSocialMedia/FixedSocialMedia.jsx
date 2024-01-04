import React from "react";
import Image from "next/image";
import faceBookIcon from "../../../assets/icons/icons8-facebook 1.svg";
import linkedenIcon from "../../../assets/icons/icons8-linkedin 1.svg";
import twitterIcon from "../../../assets/icons/icons8-twitter-circled 1.svg";
import instaGramIcon from "../../../assets/icons/icons8-instagram 1.svg";
import whatsAppIcon from "../../../assets/icons/whatsup.svg";
import shareIcon from "../../../assets/icons/sharelink.png";
import youtubeIcon from "../../../assets/icons/icons8-youtube 1.svg";
import gmailIcon from "../../../assets/icons/email.png";
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

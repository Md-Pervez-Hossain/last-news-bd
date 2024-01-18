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
const SocialMediaIcons = () => {
  return (
    <div>
      <div className="flex items-center gap-3 cursor-pointer">
        <Image
          src={faceBookIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={linkedenIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={twitterIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={instaGramIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={whatsAppIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={shareIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={youtubeIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
        <Image
          src={gmailIcon}
          alt="Picture of the Email"
          style={{ objectFit: "contain" }}
          width={30}
          height={30}
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;

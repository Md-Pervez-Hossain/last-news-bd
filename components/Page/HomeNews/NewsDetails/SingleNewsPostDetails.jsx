import React from "react";
import Image from "next/image";
import starIcon from "../../../../assets/icons/start_icon.svg";
import starFillIcon from "../../../../assets/icons/fillStar_icon.svg";
import commentIcon from "../../../../assets/icons/comments_icon.svg";
import newsPic from "../../../../assets/images/news_image.png";
import SocialMediaIcons from "@/components/Share/SocialMediaIcons/SocialMediaIcons";
import ZillaNews from "./ZillaNews";
const SingleNewsPostDetails = ({ postDetails }) => {
  console.log(postDetails);
  return (
    <div>
      <h2>{postDetails?.data?.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: postDetails?.data?.content,
        }}
      />
    </div>
  );
};

export default SingleNewsPostDetails;

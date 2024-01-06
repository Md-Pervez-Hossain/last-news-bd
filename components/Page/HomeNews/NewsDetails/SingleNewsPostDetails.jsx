import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import React from "react";
import Link from "next/link";
const SingleNewsPostDetails = ({ postDetails, socialData }) => {
  return (
    <div>
      <h2 className="lg:text-[24px] text-[16px] mb-3 font-[600]">
        {postDetails?.data?.title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: postDetails?.data?.content,
        }}
      />

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

export default SingleNewsPostDetails;

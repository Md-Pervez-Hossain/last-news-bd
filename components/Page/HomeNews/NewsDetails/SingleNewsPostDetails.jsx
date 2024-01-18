import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                      <Image
                        src={social?.logo}
                        alt="Image"
                        width={250}
                        height={250}
                        className="  cursor-pointer  w-[100px]  "
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

"use client";
import React from "react";
import Image from "next/image";
import paperIcon from "../../../assets/icons/paper_icon.png";
import languageIcon from "../../../assets/icons/language_type.svg";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import NoDataFound from "@/components/Share/NoDataFound/NoDataFound";
const Navigation = ({ socialData }) => {
  console.log(socialData?.data);
  return (
    <div className=" hidden xl:flex  py-5 bg-[#F5F5F5]">
      <Container>
        <div className="flex flex-wrap  justify-between gap-5 ]">
          <div className="flex items-center flex-wrap gap-10">
            <div className="flex items-center flex-wrap gap-3">
              <Image alt="image" width={20} height={20} src={paperIcon} />
              <h2>ই-পেপার</h2>
            </div>
            <div className="flex items-center gap-3">
              <Image alt="image" width={30} height={30} src={languageIcon} />
              <h2>E-Paper</h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="bg-secondary px-4 py-2 rounded-md text-white">
              সরকার অনুমোদিত পোর্টাল
            </h3>
            <h2>আমাদের অনুসরণ করো: </h2>
            <div className="flex flex-wrap items-center gap-3 cursor-pointer">
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
        </div>
      </Container>
    </div>
  );
};

export default Navigation;

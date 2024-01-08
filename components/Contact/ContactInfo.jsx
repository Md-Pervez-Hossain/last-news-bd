"use client";
import React from "react";
import Image from "next/image";
import addressIcon from "../../assets/icons/address_icon.svg";
import emailIcon from "../../assets/icons/email_icon.svg";
import { fetchContactInfoData } from "@/app/libs/fetchData";
import NoDataFound from "../Share/NoDataFound/NoDataFound";
const ContactInfo = ({ contactInfo }) => {
  console.log(contactInfo);
  return (
    <div className="mt-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className=" border-b-[4px] border-b-secondary shadow-xl p-5">
          <Image
            src={addressIcon}
            alt="Picture"
            style={{ objectFit: "contain" }}
          />
          <h4 className="lg:text-[24px] text-base font-[600] my-2">ঠিকানা</h4>
          <p>
            {contactInfo?.data?.length > 0 ? (
              contactInfo?.data?.[0].address
            ) : (
              <NoDataFound />
            )}
          </p>
        </div>

        <div className=" border-b-[4px] border-b-secondary shadow-xl p-5">
          <Image
            src={emailIcon}
            alt="Picture of the Email"
            style={{ objectFit: "contain" }}
          />
          <h4 className="text-[24px] font-[600] my-2">ইমেইল</h4>
          {contactInfo?.data?.length > 0 ? (
            contactInfo?.data?.[0].email
          ) : (
            <NoDataFound />
          )}
        </div>
        <div className=" border-b-[4px] border-b-secondary shadow-xl p-5">
          <Image
            src={addressIcon}
            alt="Picture of the author"
            style={{ objectFit: "contain" }}
          />
          <h4 className="text-[24px] font-[600] my-2">যোগাযোগ নাম্বার</h4>
          {contactInfo?.data?.length > 0 ? (
            contactInfo?.data?.[0].phone
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

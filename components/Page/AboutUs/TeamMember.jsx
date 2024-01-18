import React from "react";
import imag1 from "../../../assets/images/mahfuj.png";
import imag2 from "../../../assets/images/arif.png";
import imag3 from "../../../assets/images/nafis.png";
import imag4 from "../../../assets/images/arif-3.png";
import Image from "next/image";
import Title from "@/components/ui/Title/Title";
const TeamMember = () => {
  const teamMemberArray = [
    {
      id: 1,
      image: imag1,
      name: "Md. Mahfuzur Rahman",
      title: "Senior Reporter",
    },
    {
      id: 2,
      image: imag2,
      name: "Md Arif Patwary",
      title: "Junior Reporter",
    },
    {
      id: 3,
      image: imag3,
      name: "Nafiz Anam",
      title: "Senior Reporter",
    },
    {
      id: 4,
      image: imag4,
      name: "Md. Delwar Hossain",
      title: "Junior Reporter",
    },
  ];
  return (
    <div>
      <Title>Team Member</Title>
      <div className="grid grid-cols-4 gap-10">
        {teamMemberArray?.map((media) => {
          return (
            <>
              <div className="cursor-pointer overflow-hidden group">
                <div className="group-hover:scale-105 transition-all duration-500">
                  <Image
                    src={media?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                    width={1000}
                    height={500}
                  />
                </div>
                <h3 className="text-[24px] font-[600] pt-3 ">{media?.name}</h3>
                <p>{media?.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;

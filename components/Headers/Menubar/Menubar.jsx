"use client"
import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import { IoMdMenu } from "react-icons/io";
const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  console.log(pathname);
  const menubarArray = [
    {
      id: 1,
      title: "প্রথম পাতা",
      path: "/"
    },
    {
      id: 2,
      title: "জাতীয়",
      path: "/national"
    },
    {
      id: 3,
      title: "রাজনীতি",
      path: "/politics"
    },
    {
      id: 4,
      title: "অর্থনীতি",
      path: "/economy"
    },
    {
      id: 5,
      title: "আন্তর্জাতিক",
      path: "/international"
    },
    {
      id: 6,
      title: "খেলা",
      path: "/sports"
    },
    {
      id: 7,
      title: "আইন ও আদালত",
      path: "/law-justice"
    },
    {
      id: 8,
      title: "রাজধানী",
      path: "/capital"
    },
    {
      id: 9,
      title: "প্রশাসন",
      path: "/administration"
    },
    {
      id: 10,
      title: "শিক্ষা",
      path: "/education"
    },
    {
      id: 11,
      title: "জেলার খবর",
      path: "/district-news"
    },
    {
      id: 12,
      title: "প্রবাস",
      path: "/abroad"
    },
    {
      id: 13,
      title: "তথ্য প্রযুক্তি",
      path: "/information-technology"
    },
    {
      id: 14,
      title: "ইসলাম",
      path: "/islam"
    },
    {
      id: 15,
      title: "চাকরির খবর",
      path: "/job-news"
    },
  ]
  return (
    <div className='mb-16'>
      <div className='bg-primary py-8 '>
        <Container>
          <div >
            <h2 className="text-white mb-5  text-end lg:flex text-[32px] font-[600]">নিউজ</h2>
            <div className='hidden lg:flex items-center justify-between flex-wrap text-white'>
              {
                menubarArray?.map(item => {
                  return (
                    <>
                      <Link href={item?.path} className={`${pathname === item?.path ? "text-secondary border-b-2 border-b-secondary" : "text-white hover:text-secondary hover:border-b-2 hover:border-b-secondary transition-all duration-300 ease-in-out"}`}>{item?.title}</Link>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className='lg:hidden flex justify-end  '>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <IoClose className='text-white text-3xl' /> : <IoMdMenu className='text-white text-3xl' />}</button>
          </div>
          <div className={`md:hidden  z-50  w-[200px] h-full  text-start    absolute top-0    transition-all duration-500 ease-in-out   ${isOpen ? "left-0" : "-left-[250px]"}`}>
            <div className='flex flex-col gap-5 text-white bg-primary h-screen py-8 px-4'>
              {
                menubarArray?.map(item => {
                  return (
                    <>
                      <Link href={item?.path} className={`${pathname === item?.path ? "text-secondary border-b-2 border-b-secondary" : "text-white"}`}>{item?.title}</Link>
                    </>
                  )
                })
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menubar;
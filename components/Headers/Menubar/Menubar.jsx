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
      path: "/জাতীয়"
    },
    {
      id: 3,
      title: "রাজনীতি",
      path: "/রাজনীতি"
    },
    {
      id: 4,
      title: "অর্থনীতি",
      path: "/অর্থনীতি"
    },
    {
      id: 5,
      title: "আন্তর্জাতিক",
      path: "/আন্তর্জাতিক"
    },
    {
      id: 6,
      title: "খেলা",
      path: "/খেলা"
    },
    {
      id: 7,
      title: "আইন ও আদালত",
      path: "/আইন-আদালত"
    },
    {
      id: 8,
      title: "রাজধানী",
      path: "/রাজধানী"
    },
    {
      id: 9,
      title: "প্রশাসন",
      path: "/প্রশাসন"
    },
    {
      id: 10,
      title: "শিক্ষা",
      path: "/শিক্ষা"
    },
    {
      id: 11,
      title: "জেলার খবর",
      path: "/জেলার-খবর"
    },
    {
      id: 12,
      title: "প্রবাস",
      path: "/প্রবাস"
    },
    {
      id: 13,
      title: "তথ্য প্রযুক্তি",
      path: "/তথ্য-প্রযুক্তি"
    },
    {
      id: 14,
      title: "ইসলাম",
      path: "/ইসলাম"
    },
    {
      id: 15,
      title: "চাকরির খবর",
      path: "/চাকরির-খবর"
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
                      <Link href={item?.path} className={`${pathname === item?.path ? "text-secondary border-b-2 border-b-secondary" : "text-white hover:text-secondary transition-all duration-500 ease-in-out"}`}>{item?.title}</Link>
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
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
      title: "Home",
      path: "/"
    },
    {
      id: 2,
      title: "Politics",
      path: "/politics"
    },
    {
      id: 3,
      title: "Crime",
      path: "/crime"
    },
    {
      id: 4,
      title: "World",
      path: "/world"
    },
    {
      id: 5,
      title: "Business",
      path: "/business"
    },
    {
      id: 6,
      title: "Views",
      path: "/views"
    },
    {
      id: 7,
      title: "Game",
      path: "/game"
    },
    {
      id: 8,
      title: "Entertainment",
      path: "/entertainment"
    },
    {
      id: 9,
      title: "Jobs",
      path: "/jobs"
    },
    {
      id: 10,
      title: "Lifestyle",
      path: "/lifestyle"
    },
    {
      id: 11,
      title: "Technology",
      path: "/technology"
    },
    {
      id: 12,
      title: "Education",
      path: "/education"
    },
    {
      id: 13,
      title: "Special News",
      path: "/special-news"
    },
  ]
  return (
    <div className='mb-16'>
      <div className='bg-primary py-8 '>
        <Container>
          <div className='' >
            <div>
              <Title className="text-white mb-5  text-end lg:flex">News</Title>
              <div className=' '>
                <div className='hidden lg:flex items-center justify-between flex-wrap text-white'>
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

            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menubar;
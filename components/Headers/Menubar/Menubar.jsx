"use client"
import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const Menubar = () => {

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
    <div className='pb-16'>
      <div className='bg-primary py-8 '>
        <Container>
          <Title className="text-white mb-5">News</Title>
          <div className='flex items-center justify-between text-white'>
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
        </Container>
      </div>
    </div>
  );
};

export default Menubar;
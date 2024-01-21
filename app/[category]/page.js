"use client"
import React from 'react';
import HomeNews from '@/components/Page/HomeNews/HomeNews';
const page = ({ searchParams }) => {
  const query = searchParams?.name
  const search = searchParams?.search
  console.log(query, search);
  return (
    <div>
      <HomeNews query={query} search={search} />
    </div>
  );
};

export default page;
import Title from '@/components/ui/Title/Title';
import React from 'react';

import Container from '@/components/ui/Container/Container';
import Image from "next/image"
import image1 from "../../../../assets/images/other_news_1.png"
import image2 from "../../../../assets/images/other_news_2.png"
import image3 from "../../../../assets/images/other_news_3.png"
import image4 from "../../../../assets/images/other_news_4.png"
import image5 from "../../../../assets/images/other_news_5.png"
import image6 from "../../../../assets/images/other_news_6.png"
import image7 from "../../../../assets/images/other_news_7.png"
import image8 from "../../../../assets/images/other_news_8.png"
const HomeOtherNews = () => {
  const specialNews = [
    {
      id: 1,
      tag: "মধ্যপ্রাচ্য",
      title: "বিবিসির যাচাই গাজায় অর্ধনগ্ন ফিলিস্তিনিদের অস্ত্র সমর্পণের এই দৃশ্য কি সাজানো",
      image: image1,
      description: "গাজা উপত্যকায় অন্তর্বাস পরা আটক ফিলিস্তিনিরা কিছু অস্ত্র ইসরায়েলি বাহিনীর ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 2,
      tag: "গান",
      title: "ভ্যাট প্রদানে উদ্বুদ্ধ করতে মমতাজের গান",
      image: image2,
      description: "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 3,
      tag: "সুস্থতা",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image3,
      description: "চলে এসেছে ডিসেম্বর, শিশুদের পরীক্ষা শেষ। সপরিবার বেড়াতে যাওয়ার এটাই উপযুক্ত সময়। কিন্তু বেড়াতে যাওয়ার ক্ষেত্রে অনেক সময়ই পিছিয়ে যেতে হয় ভ্রমণে শিশু ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 4,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image4,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 5,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image5,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 6,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image6,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 7,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image7,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 8,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image8,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },


  ]
  return (
    <div>
      <Title>Others News</Title>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-8 cursor-pointer'>
        {
          specialNews?.map(news => {
            return (
              <>
                <div className='flex flex-col gap-5 group overflow-hidden' key={news.id}>
                  <div className='group-hover:scale-105 transition-all  duration-300'>
                    <Image src={news?.image}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h2 className='text-[18px]'>{`${news.title.slice(0, 30)}...`}</h2>
                  {/* <p className='text-[16px] text-[#646464]'>{`${news?.description.slice(0, 70)} ...`}</p> */}
                  <span className='text-[#646464] text-[14px]'>{news?.time}</span>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  );
};

export default HomeOtherNews;
import Container from '@/components/ui/Container/Container';
import React from 'react';
import image1 from "../../../assets/images/international_image_1.png"
import image2 from "../../../assets/images/international_image_2.png"
import image3 from "../../../assets/images/international_image_3.png"
import image4 from "../../../assets/images/international_image_4.png"
import image5 from "../../../assets/images/international_image_5.png"
import image6 from "../../../assets/images/international_image_6.png"
import Image from "next/image"
import Link from "next/link"
import Title from '@/components/ui/Title/Title';
const InterNationalNews = () => {
  const specialNews = [
    {
      id: 1,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image1,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনুচ্ছেদ খারিজ করার যে সিদ্ধান্ত রাষ্ট্রপতি নিয়েছিলেন, তা অসাংবিধানিক নয়। কারণ, সংবিধানের ৩৭০ অনুচ্ছেদ ছিল এক অস্থায়ী ব্যবস্থা। সুপ্রিম কোর্টের প্রধান বিচারপতি ডি ওয়াই চন্দ্রচূড় নেতৃত্বাধীন পাঁচ বিচারপতির বেঞ্চ আজ সোমবার এই রায় দেন।",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 2,
      tag: "গান",
      title: "ইতিহাসের এই দিনে: জাতিসংঘে চের ঐতিহাসিক ভাষণ",
      image: image2,
      description: "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ব্যস্ততার মধ্যেও নতুন একটি গানে কণ্ঠ দিতে মানিকগঞ্জ থেকে রামপুরা বনশ্রী এলাকার স্টুডিওতে এলেন। জাতীয় ভ্যাট দিবস ও ভ্যাট সপ্তাহ উপলক্ষে বাংলাদেশ ‘ভ্যাট’ শিরোনামের গানটি প্রকাশিত হয়েছে।",
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
      title: "ইতিহাসের এই দিনে: জাতিসংঘে চের ঐতিহাসিক ভাষণ",
      image: image5,
      description: "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 6,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image6,
      description: "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },

  ]

  return (
    <div>
      {
        specialNews?.map(news => {
          return (
            <>
              <div className='flex  flex-wrap lg:flex-nowrap items-center gap-5 mb-8 group overflow-hidden' key={news?.id}>
                <div className=' cursor-pointer group-hover:scale-105 transition-all ease-in-out duration-500'>
                  <Image src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <Link href={`/news-details/${news?.id}`}>
                    <h2 className=' mb-3 text-[22px]'>{`${news.title.slice(0, 30)}...`}</h2>
                  </Link>
                  <p className='text-[16px] text-[#646464] mb-3'>{`${news?.description.slice(0, 120)} ...`}</p>
                  <span className=' cursor-pointer text-[#646464] text-[14px]'>আরও পড়ুন</span>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  );
};

export default InterNationalNews;

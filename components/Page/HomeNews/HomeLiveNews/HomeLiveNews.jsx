import Title from "@/components/ui/Title/Title";
import React from "react";
import image1 from "../../../../assets/images/special_news_1.png";
import image2 from "../../../../assets/images/special_news_2.png";
import image3 from "../../../../assets/images/special_news_3.png";
import image4 from "../../../../assets/images/special_news_4.png";
import image5 from "../../../../assets/images/special_news_5.png";
import image6 from "../../../../assets/images/special_news_6.png";
import Image from "next/image";
import Link from "next/link";
const HomeLiveNews = ({ newsCategoryData }) => {
  console.log(newsCategoryData);

  const specialNews = [
    {
      id: 1,
      tag: "মধ্যপ্রাচ্য",
      title:
        "বিবিসির যাচাই গাজায় অর্ধনগ্ন ফিলিস্তিনিদের অস্ত্র সমর্পণের এই দৃশ্য কি সাজানো",
      image: image1,
      description:
        "গাজা উপত্যকায় অন্তর্বাস পরা আটক ফিলিস্তিনিরা কিছু অস্ত্র ইসরায়েলি বাহিনীর ",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 2,
      tag: "গান",
      title: "ভ্যাট প্রদানে উদ্বুদ্ধ করতে মমতাজের গান",
      image: image2,
      description:
        "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 3,
      tag: "সুস্থতা",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image3,
      description:
        "চলে এসেছে ডিসেম্বর, শিশুদের পরীক্ষা শেষ। সপরিবার বেড়াতে যাওয়ার এটাই উপযুক্ত সময়। কিন্তু বেড়াতে যাওয়ার ক্ষেত্রে অনেক সময়ই পিছিয়ে যেতে হয় ভ্রমণে শিশু ",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 4,
      tag: "মধ্যপ্রাচ্য",
      title:
        "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image4,
      description:
        "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 5,
      tag: "মধ্যপ্রাচ্য",
      title: "ইতিহাসের এই দিনে: জাতিসংঘে চের ঐতিহাসিক ভাষণ",
      image: image5,
      description:
        "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 6,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image6,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 7,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image2,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 8,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image5,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 9,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image4,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
  ];
  return (
    <div>
      <Title>সর্বশেষ সংবাদ</Title>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-8">
        {newsCategoryData?.data?.length > 0 &&
          newsCategoryData?.data?.map((news) => {
            return (
              <>
                <div
                  className="flex flex-col gap-5 overflow-hidden group shadow-xl"
                  key={news.id}
                >
                  <div className=" group-hover:scale-105 transition-all duration-300">
                    {/* <Image
                    src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                  /> */}
                    <img
                      src={news?.post_img}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-[18px] mb-3">{`${news.title}`}</h2>
                    <Link
                      href={`/news-details/${news?.slug}?post_no=${news?.post_no}`}
                    >
                      <span className=" cursor-pointer">আরও পড়ুন</span>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default HomeLiveNews;

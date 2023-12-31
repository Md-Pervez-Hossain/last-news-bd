import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import React from "react";
import image1 from "../../../../assets/images/latest_news-2.png";
import image2 from "../../../../assets/images/latest_news-1.png";
import image3 from "../../../../assets/images/latest_news_3.png";
import image4 from "../../../../assets/images/latest_news-4.png";
import image5 from "../../../../assets/images/latest_news-5.png";
import image6 from "../../../../assets/images/latest_news-6.png";
import image7 from "../../../../assets/images/latest_news-7.png";
import image8 from "../../../../assets/images/latest_news-8.png";
import image9 from "../../../../assets/images/latest_news-9.png";
import "./HomeSepicalNews.css";
import Link from "next/link";
import Image from "next/image";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const HomeSpecialNews = ({ newsCategoryData }) => {
  console.log(newsCategoryData);

  const specialNews = [
    {
      id: 1,
      tag: "মধ্যপ্রাচ্য",
      title: "ট্রেনের সঙ্গে মোটরসাইকেলের ধাক্কা, দুজন নিহত",
      image: image2,
      description:
        "টাঙ্গাইলের কালিহাতী উপজেলার হাতিয়ায় ট্রেনের ধাক্কায় দুই মোটরসাইকেল আরোহীর মৃত্যু হয়েছে। শুক্রবার (২২ ডিসেম্বর) বিকেল সাড়ে ৪টার দ ",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 2,
      tag: "গান",
      title: "দেড়যুগ পর পুনরায় চালু হলো মালঞ্চি স্টেশন",
      image: image1,
      description:
        "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই",
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
      title: "আজ থেকে নৈপুণ্য অ্যাপে মিলবে ষষ্ঠ-সপ্তম শ্রেণির রিপোর্ট কার্ড",
      image: image7,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 6,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image8,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
    {
      id: 6,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image9,
      description:
        "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },
  ];
  return (
    <div>
      <Title>Special News</Title>
      <div className="grid md:grid-cols-2 3 xl:grid-cols-3 gap-10 my-8">
        {newsCategoryData.data
          ?.filter((news) => news?.social_news === "true")
          ?.map((news) => {
            return (
              <>
                <div
                  className="flex flex-col gap-5 overflow-hidden group  shadow-lg rounded-lg"
                  key={news?.id}
                >
                  <div className=" group-hover:scale-105 transition-all duration-300 cursor-pointer">
                    {/* <Image
                    src={news?.image}
                    alt="Picture of the author"
                    style={{ objectFit: "contain" }}
                    width={500}
                  /> */}
                    <img
                      src={news?.post_img}
                      alt="Picture of the author"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-[18px] mb-3">{`${news.title}`}</h2>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: news?.content,
                      }}
                    /> */}
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

export default HomeSpecialNews;

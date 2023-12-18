import Title from '@/components/ui/Title/Title';
import React from 'react';
import image1 from "../../../../assets/images/news_image.png"
const HomeTodayNews = () => {
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
      image: image1,
      description: "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 3,
      tag: "সুস্থতা",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image1,
      description: "চলে এসেছে ডিসেম্বর, শিশুদের পরীক্ষা শেষ। সপরিবার বেড়াতে যাওয়ার এটাই উপযুক্ত সময়। কিন্তু বেড়াতে যাওয়ার ক্ষেত্রে অনেক সময়ই পিছিয়ে যেতে হয় ভ্রমণে শিশু ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 4,
      tag: "মধ্যপ্রাচ্য",
      title: "জম্মু-কাশ্মীরের বিশেষ মর্যাদা খারিজ বৈধ, সেপ্টেম্বরের মধ্যে ভোট করার তাগিদ",
      image: image1,
      description: "ভারতের জম্মু-কাশ্মীরের বিশেষ মর্যাদা প্রত্যাহারের কেন্দ্রীয় সিদ্ধান্ত সাংবিধানিক দিক থেকে বৈধ। ২০১৯ সালের ৫ আগস্ট এই রাজ্যের জন্য নির্ধারিত সংবিধানের ৩৭০ অনু",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 4,
      tag: "মধ্যপ্রাচ্য",
      title: "ইতিহাসের এই দিনে: জাতিসংঘে চের ঐতিহাসিক ভাষণ",
      image: image1,
      description: "গানের শিল্পী ও সংসদ সদস্য মমতাজ বেগমের এখনকার ব্যস্ততা আগামী সংসদ নির্বাচন নিয়ে। মাসের বেশির ভাগ সময় এখন তাই নিজ এলাকার মানুষের সঙ্গে কাটে। এই ",
      time: "২ ঘণ্টা আগে"
    },
    {
      id: 4,
      tag: "মধ্যপ্রাচ্য",
      title: "গাড়িতে উঠলেই শিশু বমি করে, কী করবেন",
      image: image1,
      description: "ইউক্রেনের প্রেসিডেন্ট ভলোদিমির জেলেনস্কিকে হোয়াইট হাউসে আমন্ত্রণ জানিয়েছেন যুক্তরাষ্ট্রের প্রেসিডেন্ট জো বাইডেন। সেখানে আগামীকাল মঙ্গলবার বৈঠক করবেন দুই নেতা। মস্কোর বিরুদ্ধে চল",
      time: "২ ঘণ্টা আগে",
    },

  ]
  return (
    <div>
      <Title>Todays News</Title>
      <div className='w-56 h-1 bg-secondary'></div>
      <div >
        {
          specialNews?.map(news => {
            return (
              <>
                <div className='flex flex-col gap-5 my-5' key={news.id}>
                  <h2 className='text-[18px]'>{`${news.title.slice(0, 50)}...`}</h2>

                  <div className='grid grid-cols-2 gap-5 items-center'>
                    <p className='text-[16px] text-[#646464]'>{`${news?.description.slice(0, 70)} ...`}</p>
                    <div className='newsBanner h-[100px] '></div>
                  </div>



                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default HomeTodayNews;
import React from "react";

const TrendingNewsTitle = ({ newsCategoryData }) => {
  const latestNewsTitleArray = [
    {
      id: 1,
      title: "কেন অনেক অভিবাসী কানাডা ছাড়ছেন",
    },
    {
      id: 2,
      title: "কল্যাণ পার্টি থেকে সৈয়দ ইবরাহিমকে বহিষ্কারের ঘোষণা",
    },
    {
      id: 3,
      title: "একসঙ্গে শাকিব–রাফী, ঝড় তুলতে আসছে ‘তুফান’",
    },
    {
      id: 4,
      title: "পুতিনের কাছে অসন্তোষ জানালেন নেতানিয়াহু",
    },
    {
      id: 5,
      title:
        "সেনা, পুলিশ, র‍্যাবের চাকরিচ্যুত ব্যক্তিদের নিয়ে গঠিত যে ডাকাত দল",
    },
    {
      id: 6,
      title: "বিপিএল শুরু ১৯ জানুয়ারি",
    },
    {
      id: 7,
      title: "ফরিদপুরের বাজারে কমতে শুরু করেছে পেঁয়াজের দাম",
    },

    {
      id: 8,
      title: "জানালেন মন্ত্রিপরিষদ সচিব পেঁয়াজের দাম নিয়ে মাঠপর্যায়ে",
    },

    {
      id: 9,
      title: "পুতিনের কাছে অসন্তোষ জানালেন নেতানিয়াহু",
    },
    {
      id: 10,
      title:
        "প্রতিমন্ত্রীর প্রতিনিধি ডিবি কার্যালয়ে গিয়ে চাকরি প্রার্থীদের টাকা ফেরত দিলেন",
    },
    {
      id: 11,
      title: "আসিফ নজরুলের কলাম ফুটবলার আমিনুল কি ভয়ঙ্কর অপরাধী?",
    },
  ];
  return (
    <div>
      {newsCategoryData?.data
        ?.filter((news) => news?.latest_news === "true")
        ?.map((item) => {
          return (
            <>
              <ul className="cursor-pointer">
                <li className="mb-5 hover:text-secondary transition-all duration-300 hover:ps-2 ">
                  {item.title}
                  <hr className="w-full h-[2px] bg-[#222222] opacity-10 mt-3" />
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default TrendingNewsTitle;

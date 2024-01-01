import React from "react";

const LatestNewsTitle = ({ newsCategoryData }) => {
  console.log(newsCategoryData);
  const latestNewsTitleArray = [
    {
      id: 1,
      title:
        "সেনা, পুলিশ, র‍্যাবের চাকরিচ্যুত ব্যক্তিদের নিয়ে গঠিত যে ডাকাত দল",
    },
    {
      id: 2,
      title: "বিপিএল শুরু ১৯ জানুয়ারি",
    },
    {
      id: 3,
      title: "ফরিদপুরের বাজারে কমতে শুরু করেছে পেঁয়াজের দাম",
    },
    {
      id: 4,
      title: "একসঙ্গে শাকিব–রাফী, ঝড় তুলতে আসছে ‘তুফান’",
    },
    {
      id: 5,
      title: "জানালেন মন্ত্রিপরিষদ সচিব পেঁয়াজের দাম নিয়ে মাঠপর্যায়ে",
    },
    {
      id: 6,
      title: "কেন অনেক অভিবাসী কানাডা ছাড়ছেন",
    },
    {
      id: 7,
      title: "কল্যাণ পার্টি থেকে সৈয়দ ইবরাহিমকে বহিষ্কারের ঘোষণা",
    },
    {
      id: 8,
      title: "পুতিনের কাছে অসন্তোষ জানালেন নেতানিয়াহু",
    },
    {
      id: 8,
      title: "পুতিনের কাছে অসন্তোষ জানালেন নেতানিয়াহু",
    },
    {
      id: 9,
      title:
        "প্রতিমন্ত্রীর প্রতিনিধি ডিবি কার্যালয়ে গিয়ে চাকরি প্রার্থীদের টাকা ফেরত দিলেন",
    },
    {
      id: 10,
      title: "আসিফ নজরুলের কলাম ফুটবলার আমিনুল কি ভয়ঙ্কর অপরাধী?",
    },
  ];

  return (
    <div>
      {newsCategoryData?.data?.length > 0 &&
        newsCategoryData?.data
          ?.filter((news) => news?.breaking_news === "true")
          .map((item) => {
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

export default LatestNewsTitle;

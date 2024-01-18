import React from "react";
import Image from "next/image";
import AboutImage from "../../../assets/images/about_us_image.png";
import Title from "@/components/ui/Title/Title";
const CompanyStory = () => {
  return (
    <div className="my-5 grid">
      <Image
        src={AboutImage}
        alt="Picture of the author"
        style={{ objectFit: "contain" }}
        width={1400}
        height={600}
        className="my-5"
      />
      <div>
        <Title>Story Of Company</Title>
        <div className="my-5">
          <p className="mb-3">
            সুদিক্ষণ প্রস্তুতি: ভার্চুয়াল রিয়্যালিটি রিপোর্টিং জনবল জয়ী করতে
            ইনোভেটিভ লাস্ট নিওজ বিডি সিটিভিল, [বর্তমান তারিখ]
          </p>
          <p className="mb-3">
            মিডিয়া ইন্ডাস্ট্রিতে একটি অতি আগ্রহী ধারণায়, সিটিভিলের অগ্রণী
            সংবাদপত্র, সিটিভিল টাইমস, এই বছরের জার্নালিজম এক্সেলেন্স
            অ্যাওয়ার্ডসে তাদের ভার্চুয়াল রিয়্যালিটি (VR) রিপোর্টিং নিয়ে
            শীর্ষ অধিকারী হিসেবে অংশ নেয়েছে।
          </p>
          <p className="mb-3">
            সংবাদপত্রের লাস্ট নিওজ বিডি, যা সর্বশেষ প্রযুক্তিগত উন্নতি সমর্থনে
            পরিচিত, ভার্চুয়াল রিয়্যালিটি ব্যবহার করার জন্য তাদের অনুপ্রবেশকর
            দৃষ্টিকোণে প্রশংসা পায়েছিল। এই প্রকল্পের পিছনে প্রজেক্টটির
            নেতৃত্বে, যোগদানকারী গবেষক সারা রেনল্ডস দ্বারা সৃষ্টি করা হয়েছিল,
            যা পড়াশোনার কাজে পড়ালেও পাঠকদেরকে গবেষণা করতে, প্রোডাক্ট লঞ্চে
            লাইভ হওয়ার চোখে দেখা করতে এবং আবারও মূল্যবান প্রযুক্তি সম্মেলনে
            ভার্চুয়ালি উপস্থিত থাকতে দেওয়ার মাধ্যমে পঠিতকে হৃদয়ে প্রবেশ করতে।
          </p>
          <p className="mb-3">
            গত রাতে সিটিভিল কনভেনশন সেন্টারে অনুষ্ঠিত এই পুরস্কার বিতরণে,
            সিটিভিল টাইমস দলটি প্রশংসার মধ্যে প্রশংসার ট্রফি গ্রহণ করতে দেখা
            গিয়েছিল। বিচারকদের কাছে লাস্ট নিওজ বিডিকে দৈত্যপূর্ণ প্রশংসা জানানো
            হয়েছিল, যা ঐকটি সার্থক জীবনের সবচেয়ে উচ্চ মর্যাদা প্রদান করে।
          </p>
          <p className="mb-3">
            সিটিভিল টাইমস এডিটর-ইন-চিফ, ডেভিড কার্টার, দলের অবদানে তার গর্ব
            প্রকাশ করেছিলেন। আমরা সমপ্রচারের শক্তিতে বিশ্বাস করি, এবং এই
            পুরস্কারটি আমাদের পড়ালাগা কথাগুলি আবিষ্কৃত করায় আমাদের পাঠক
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;

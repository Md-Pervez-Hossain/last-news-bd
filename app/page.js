
import { fetchAdsData, fetchHomeNewsData, fetchPhotoData, fetchSearchNewsData } from "./libs/fetchData";
import Container from "@/components/ui/Container/Container";
import LatestNews from "@/components/Page/HomeNews/LatestNews/LatestNews";
import HomeSpecialNews from "@/components/Page/HomeNews/HomeSpecialNews/HomeSpecialNews";
import Add from "@/components/Page/HomeNews/Adds/Add";
import NewsTitle from "@/components/Page/HomeNews/NewsTitle/NewsTitle";
import BreakingNews from "@/components/Page/HomeNews/BreakingNews/BreakingNews";
import PhotoGallery from "@/components/Page/HomeNews/PhotoGallery/PhotoGallery";
import HomeLiveNews from "@/components/Page/HomeNews/HomeLiveNews/HomeLiveNews";
import HomeTodayNews from "@/components/Page/HomeNews/HomeTodayNews/HomeTodayNews";
import RecentNews from "@/components/Page/HomeNews/RecentNews/RecentNews";
import MoreBreakingNews from "@/components/Page/HomeNews/MoreBreakingNews/MoreBreakingNews";
import HomeOtherNews from "@/components/Page/HomeNews/HomeOtherNews/HomeOtherNews";
import { Suspense } from 'react';
import HomeBanner from "@/components/Page/HomeNews/HomeBanner/HomeBanner";
export default async function Home({ searchParams }) {
  const key = JSON.stringify(searchParams);
  const search = searchParams?.search
  console.log("saearch", search);
  const homeData = await fetchHomeNewsData()
  const searchData = await fetchSearchNewsData(search)
  console.log(homeData);
  const adsData = await fetchAdsData()
  const photos = await fetchPhotoData()
  let p = "Loading...."
  return (
    <main>
      <Suspense key={key} fallback={p}>
        <Container>
          <div >
            <HomeBanner adsData={adsData} />
          </div>
          <div className="grid grid-cols-3 gap-10  ">
            <div className="lg:col-span-2 col-span-3">
              <LatestNews
                category_no="CTR1021"
                newsCategoryData={search ? searchData : homeData}
              />
              <HomeSpecialNews
                category_no="CTR1021"
                newsCategoryData={search ? searchData : homeData}
              />

            </div>
            <div className="lg:col-span-1 col-span-3 ">
              <Add adsData={adsData} />
              <NewsTitle
                category_no="CTR1021"
                newsCategoryData={search ? searchData : homeData}
              />
              <Add adsData={adsData} />
            </div>
          </div>
          <div className="py-8">
            <BreakingNews
              category_no="CTR1021"
              newsCategoryData={search ? searchData : homeData}
            />
          </div>
          <div className=" my-8 ">
            <HomeBanner adsData={adsData} />
          </div>
          <PhotoGallery photos={photos} />
          <div className="grid grid-cols-3 my-10 gap-10">
            <div className="lg:col-span-2 col-span-3">
              <HomeLiveNews
                category_no="CTR1021"
                newsCategoryData={search ? searchData : homeData}
              />
            </div>
            <div className="lg:col-span-1 col-span-3">
              <HomeTodayNews
                category_no="CTR1021"
                newsCategoryData={search ? searchData : homeData}
              />
            </div>
          </div>
          <RecentNews
            category_no="CTR1021"
            newsCategoryData={search ? searchData : homeData}
          />
          <div>
            <MoreBreakingNews
              category_no="CTR1021"
              newsCategoryData={search ? searchData : homeData}
            />
          </div>
          <div className="my-8">
            <HomeOtherNews
              category_no="CTR1021"
              newsCategoryData={search ? searchData : homeData}
            />
          </div>
        </Container>
      </Suspense>


    </main>
  )
}

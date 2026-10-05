import { HomePageApi } from "@/api/api";
import LatestHeadlines from "@/components/LatestHeadlines";
import MainNews from "@/components/MainNews";

const page = async() => {
  const homePage = await HomePageApi()
  const mainNews = homePage[0].articles
  console.log(mainNews[0])
  return (
    <>
    <LatestHeadlines/>
    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      {/* news */}
      <div className="col-span-2">
        <MainNews mainNews={mainNews}/>
      </div>
      {/* most read */}
      <div className="col-span-1"></div>
    </div>
    </>
  );
};

export default page;
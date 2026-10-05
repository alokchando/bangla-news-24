import { HomePageApi } from "@/api/api";
import LatestHeadlines from "@/components/LatestHeadlines";
import MainNews from "@/components/MainNews";
import NewsCard from "@/components/NewsCard";
import { NewsSectionType } from "@/type/type";

const Page = async () => {
  const homePage: NewsSectionType[] = await HomePageApi();

  const mainNews = homePage[0].articles;
  const otherNews = [homePage[1], homePage[3], ...homePage.slice(5, 7)];

  return (
    <main className="min-h-screen bg-black text-white">
      <LatestHeadlines />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* News */}
          <div className="lg:col-span-2">
            {/* Main News */}
            <MainNews mainNews={mainNews} />

            {/* More News */}
            <div className="mt-12 space-y-12">
              {otherNews.map((section) => (
                <section key={section.curationId}>
                  {/* Section Title */}
                  <div className="mb-5 flex items-center gap-2 border-b border-zinc-800 pb-3">
                    <div className="h-5 w-1 bg-red-500" />

                    <h2 className="text-lg font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* News Cards */}
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                    {section.articles.map((article) => (
                      <NewsCard key={article.id} news={article} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Most Read */}
          <aside className="hidden lg:block">
            {/* Leave this section blank for now */}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Page;

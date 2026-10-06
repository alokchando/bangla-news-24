import { OneCategoryApi } from "@/api/api";
import NewsCard from "@/components/NewsCard";
import { NewsItemType } from "@/type/type";

const Category = async ({ params }: {params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const category = await OneCategoryApi(id);


  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 border-b border-zinc-800 pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Category
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {category.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            সর্বশেষ খবর ও গুরুত্বপূর্ণ আপডেট
          </p>
        </div>

        {/* News */}
        <div className="grid gap-8 lg:grid-cols-3">
          {category.data.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Category;
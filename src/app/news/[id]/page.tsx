import { DetailsNews } from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import { DetailsNewsType } from "@/type/type";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const data: DetailsNewsType = await DetailsNews(id);

  
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
        >
          <span className="text-lg">←</span>
          Back to News
        </Link>


        {/* Title */}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {data.title}
        </h1>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Featured Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Article Content */}
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="whitespace-pre-line text-lg leading-9 text-gray-300 sm:text-xl sm:leading-10">
            {data.text}
          </p>
        </div>

        {/* Bottom Back Link */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            ← Read More News
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Page;
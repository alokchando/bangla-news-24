import { LatestHeadlinesApi } from "@/app/api/api";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const LatestHeadlines = async () => {
  const data = await LatestHeadlinesApi();

  return (
    <section className="border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-stretch px-6">
        {/* Latest Label */}
        <div className="relative flex shrink-0 items-center bg-red-600 px-6 py-3">
          <span className="text-sm font-bold text-white">সর্বশেষ</span>

          {/* Arrow */}
          <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 border-y-[10px] border-l-[10px] border-y-transparent border-l-red-600" />
        </div>

        {/* Headlines */}
        <div className="flex min-w-0 flex-1 items-center overflow-hidden pl-7">
          <MarqueeText duration={20} direction="right">
            <div className="flex items-center gap-12 whitespace-nowrap">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  <Link
                    href={`/news/${item.id}`}
                    className="transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </MarqueeText>
        </div>
      </div>
    </section>
  );
};

export default LatestHeadlines;

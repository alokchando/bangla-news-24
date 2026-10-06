import Image from "next/image";
import Link from "next/link";
import { NewsItemType } from "@/type/type";

interface NewsCardProps {
  news: NewsItemType;
}

const formatBanglaDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace("AM", "পূর্বাহ্ণ")
    .replace("PM", "অপরাহ্ণ");
};

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="group border-b border-zinc-800 pb-5">
      <Link href={`/news/${news.id}`} className="grid grid-cols-3 gap-3">
        <div className="col-span-1 overflow-hidden rounded-md">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={400}
            height={250}
            className="h-24 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-28"
          />
        </div>

        <div className="col-span-2">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-red-500">
            {news.category}
          </p>

          <h3 className="text-sm font-semibold leading-5 text-zinc-100 transition group-hover:text-red-500">
            {news.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs leading-4 text-zinc-500">
            {news.description}
          </p>

          {news.lastPublished && (
            <p className="mt-1 text-[10px] text-zinc-600">
              {formatBanglaDate(news.lastPublished)}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;

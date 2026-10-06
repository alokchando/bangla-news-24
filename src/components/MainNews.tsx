import { NewsItemType } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
export interface MainNewsProps {
  mainNews: NewsItemType[];
}
const MainNews = ({ mainNews }: MainNewsProps) => {
  const [firstNews, ...otherNews] = mainNews;
  return (
    <section className="bg-black text-white">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-3">
        
        {/* Main News */}

        <article className="lg:col-span-2">
              <Link href={`/news/${firstNews.id}`}>
          
          {/* <Link href={firstNews.link} className="group block"> */}
            
            <div className="overflow-hidden rounded-xl">
              
              <Image
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt}
                width={900}
                height={550}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="mt-5">
              
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                
                {firstNews.category}
              </p>
              <h2 className="text-3xl font-bold leading-tight transition group-hover:text-red-500 md:text-4xl">
                
                {firstNews.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">
                
                {firstNews.description}
              </p>
            </div>
                </Link>
        </article>
        {/* Other News */}
        <div className="divide-y divide-gray-800 border-t border-gray-800 lg:border-t-0">
          
          {otherNews.slice(0, 5).map((item) => (
            <article key={item.id} className="py-5 first:pt-0">
              
              <Link href={`/news/${item.id}`} className="group block">
                
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-500">
                  
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold leading-snug text-gray-100 transition group-hover:text-red-500">
                  
                  {item.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MainNews;
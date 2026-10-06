import { MostReadApi } from "@/api/api";
import Link from "next/link";
import React from "react";

const MostRead = async () => {
  const data = await MostReadApi();

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
        <h3 className="text-xl font-bold text-white">{data[0]?.category}</h3>

        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Most Read
        </span>
      </div>

      {/* News list */}
      <div className="divide-y divide-zinc-800">
        {data.map((item, index) => (
          <Link
            href={`/news/${item.id}`}
            key={item.id}
            className="group flex gap-4 py-4 first:pt-0 last:pb-0"
          >
            {/* Number */}
            <span className="min-w-[32px] text-3xl font-bold leading-none text-zinc-700 transition-colors group-hover:text-red-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1">
              <h4 className="text-[15px] font-semibold leading-6 text-zinc-200 transition-colors group-hover:text-white">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MostRead;
import { Navlinks } from "@/app/api/api";
import Link from "next/link";

const Navlink = async () => {
  const data = await Navlinks();

  const filterData = data.filter((n) => n.scrapable);

  return (
    <nav className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4">
        <Link
          href="/"
          className="whitespace-nowrap text-sm font-semibold text-red-500 transition hover:text-red-400"
        >
          হোম
        </Link>

        {filterData.map((n) => (
          <Link
            key={n.slug}
            href={`/Category/${n.slug}`}
            className="whitespace-nowrap text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navlink;

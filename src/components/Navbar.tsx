import React from "react";
import Image from "next/image";
import Link from "./NavLink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 Logo"
            width={70}
            height={70}
            className="h-16 w-16 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Bangla News <span className="text-red-500">24</span>
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              {date}
            </p>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-md border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:border-white hover:text-white">
            সাইন ইন
          </button>

          <button className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Link />
    </header>
  );
};

export default Navbar;
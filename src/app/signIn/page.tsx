"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const LoginPage = () => {
  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-10 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tight">
              Bangla <span className="text-red-500">News 24</span>
            </h1>
          </Link>

          <p className="mt-3 text-sm text-zinc-400">
            আপনার নির্ভরযোগ্য সংবাদ সঙ্গী
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">সাইন ইন করুন</h2>

            <p className="mt-2 text-sm text-zinc-400">
              আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন।
            </p>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <form className="space-y-5" onSubmit={onsubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                required
                className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-200"
                >
                  পাসওয়ার্ড
                </label>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                required
                className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              সাইন ইন
            </button>
          </form>

          {/* Sign up */}
          <p className="mt-7 text-center text-sm text-zinc-400">
            নতুন ব্যবহারকারী?{" "}
            <Link
              href="/signUp"
              className="font-medium text-red-400 transition hover:text-red-300"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          © 2026 Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </main>
  );
};

export default LoginPage;

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-4 text-white">
      <div className="max-w-lg text-center">
        <p className="mb-4 text-7xl font-bold text-[#ff0000]">404</p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          News Not Found
        </h1>

        <p className="mt-4 leading-7 text-gray-400">
          Sorry, the news article you are looking for does not exist or may
          have been removed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#ff0000] px-6 py-3 font-semibold text-black transition hover:bg-[#ff0000c1]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
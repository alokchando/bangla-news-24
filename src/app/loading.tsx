const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0d0f] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl animate-pulse">
        {/* Back link */}
        <div className="h-4 w-28 rounded bg-white/10" />

        {/* Topics */}
        <div className="mt-8 flex gap-2">
          <div className="h-7 w-20 rounded-full bg-white/10" />
          <div className="h-7 w-24 rounded-full bg-white/10" />
        </div>

        {/* Title */}
        <div className="mt-6 space-y-3">
          <div className="h-10 w-full max-w-4xl rounded bg-white/10" />
          <div className="h-10 w-3/4 max-w-3xl rounded bg-white/10" />
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl space-y-3">
          <div className="h-5 w-full rounded bg-white/10" />
          <div className="h-5 w-5/6 rounded bg-white/10" />
        </div>

        {/* Author + date */}
        <div className="mt-8 border-y border-white/10 py-5">
          <div className="h-4 w-64 rounded bg-white/10" />
        </div>

        {/* Main image */}
        <div className="mt-10 aspect-video rounded-2xl bg-white/10" />

        {/* Article body */}
        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          <div className="h-5 w-full rounded bg-white/10" />
          <div className="h-5 w-full rounded bg-white/10" />
          <div className="h-5 w-5/6 rounded bg-white/10" />

          <div className="mt-10 h-7 w-2/3 rounded bg-white/10" />

          <div className="h-5 w-full rounded bg-white/10" />
          <div className="h-5 w-full rounded bg-white/10" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
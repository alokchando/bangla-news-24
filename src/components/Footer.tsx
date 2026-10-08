const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              Bangla News 24
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              সর্বশেষ সংবাদ, একসাথে এক জায়গায়।
            </p>
          </div>

          {/* Source */}
          <div className="text-sm text-gray-500">
            Source:
            <span className="font-medium text-gray-300">
              BBC Bangla
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Bangla News 24. All rights reserved.
          </p>

          <p>
            Built with Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
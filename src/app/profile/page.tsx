"use client";

import { authClient } from "@/lib/auth-client";

const ProfileInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  if (!user) return null;

  const initial = user.name?.charAt(0).toUpperCase();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* User Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff0000] text-2xl font-bold text-black">
            {initial}
          </div>

          {/* Name & Email */}
          <div>
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>

            <p className="mt-1 text-sm text-white/50">{user.email}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
       

          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg bg-[#ff0000] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ff0000]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

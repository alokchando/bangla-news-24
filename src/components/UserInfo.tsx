"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const user = session?.user;
  return (
    <div>
      
      {user ? (
        <Link href={'/profile'}>
        <div className="flex items-center gap-3">
          
          {/* User Info */}
          <div className="hidden text-right sm:block">
            
            <p className="text-sm font-semibold text-white">
              
              {user.name}
            </p>
            <p className="max-w-[180px] truncate text-xs text-zinc-500">
              
              {user.email}
            </p>
          </div>
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white ring-2 ring-red-600/20">
            
            {user.name?.charAt(0).toUpperCase() || "U"}
          </div>
          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
          >
            
            সাইন আউট
          </button>
        </div>
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          
          {/* Sign In */}
          <Link
            href="/signIn"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
          >
            
            সাইন ইন
          </Link>
          {/* Sign Up */}
          <Link
            href="/signUp"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/10 transition hover:bg-red-500"
          >
            
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};
export default UserInfo;

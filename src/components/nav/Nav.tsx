"use client";
import Link from "next/link";
import React from "react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center w-full p-10">
      <div
        className="uppercase cursor-pointer font-bold"
        onClick={() => router.push("/")}
      >
        Dressy
      </div>
      <ul className="flex gap-4 items-center align-middle justify-center">
        <Link
          href="/login"
          className="flex items-center transition-all duration-200 max-h-10 bg-slate-900 text-white py-1.5 px-3.5 rounded-md cursor-pointer hover:bg-slate-700"
        >
          Se connecter
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

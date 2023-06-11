"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import SimpleBtn from "../buttons/SimpleBtn";

const Nav = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/dashboard/create-user");
  };

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
          className="flex items-center transition-all duration-200 max-h-10 bg-slate-900 text-white py-1.5 px-3.5 rounded-md cursor-pointer hover:rounded-3xl"
        >
          Se connecter
        </Link>
        <SimpleBtn title="Créer" onClick={handleNavigate} marinTop={0} />
      </ul>
    </nav>
  );
};

export default Nav;

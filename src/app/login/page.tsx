"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col w-full justify-center items-center">
      <h1 className="font-bold w-fit text-md sm:text-sm text-center p-3">
        Bienvenue 👋
      </h1>
      <form
        onSubmit={handleLogin}
        className="pt-8 w-96 flex flex-col gap-10 justify-center align-center bg-white p-10 mt-4 shadow-md rounded-md"
      >
        <input
          className="px-4 py-3 outline-none w-100 bg-slate-50 border-l-[2px] rounded-r-lg border-slate-950  focus:bg-slate-100 "
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="current-password"
          placeholder="Adresse email"
        />
        <input
          className="px-4 py-3 outline-none w-100 bg-slate-50 border-l-[2px] rounded-r-lg border-slate-950  focus:bg-slate-100  "
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          autoComplete="current-password"
        />

        <button className="bg-slate-800 py-3 text-white hover:bg-slate-700 rounded-md">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default page;

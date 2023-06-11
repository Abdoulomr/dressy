"use client";
import SimpleBtn from "@/components/buttons/SimpleBtn";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/dashboard/create-user");
  };
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-0 ">
      <h1 className="text-6xl w-fit p-0 text-center px-6 font-black text-slate-800 mx-auto w-90 mt-20 mb-14">
        Toutes vos commandes à portée de main
      </h1>
      <SimpleBtn title="Créer un admin" onClick={handleNavigate} marinTop={0} />
    </main>
  );
}

"use client";
import React from "react";
import { Loading } from "@nextui-org/react";

const loading = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-slate-900/50">
      {/* <span className="text-white">Loading...</span> */}
      <Loading type="points" size="lg" />
    </div>
  );
};

export default loading;

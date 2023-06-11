"use client";

import React from "react";

interface SelectInputProps {
  labelText: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ labelText }) => {
  return (
    <section className="flex flex-col gap-2">
      <span>{labelText}</span>
      <select
        name="exemlpe"
        className=" min-h-[50px] border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 focus:bg-slate-200"
      >
        <option value="">option 1</option>
        <option value="">option 2</option>
        <option value="">option 3</option>
      </select>
    </section>
  );
};

export default SelectInput;

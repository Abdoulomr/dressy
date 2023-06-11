"use client";

import React, { ChangeEvent } from "react";
import { Value } from "react-phone-number-input";

interface TextInputProps {
  onChange: (newValue: string, inputName: string) => void;
  labelText: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, labelText, name }) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event.target.name);
  };
  return (
    <section className="flex flex-col gap-2">
      <span>{labelText}</span>
      <input
        onChange={handleTextChange}
        type="text"
        name={name}
        className="w-79 border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 focus:bg-slate-200"
      />
    </section>
  );
};

export default TextInput;

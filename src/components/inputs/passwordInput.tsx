"use client";

import React, { ChangeEvent } from "react";
import { Value } from "react-phone-number-input";

interface PasswordInputProps {
  onChange: (newValue: string, inputName: string) => void;
  labelText: string;
  name: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  labelText,
  name,
}) => {
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event.target.name);
  };
  return (
    <section className="flex flex-col gap-2">
      <span>{labelText}</span>
      <input
        onChange={handlePasswordChange}
        autoComplete="current-password"
        type="password"
        name={name}
        className="w-79 border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 focus:bg-slate-200"
      ></input>
    </section>
  );
};

export default PasswordInput;

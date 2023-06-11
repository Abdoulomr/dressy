"use client";

import React, { ChangeEvent } from "react";

interface EmailInputProps {
  onChange: (newEmail: string) => void;
  labelText: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ onChange, labelText }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <section className="flex flex-col gap-2">
      <span>{labelText}</span>
      <input
        autoComplete="username"
        type="email"
        required={true}
        onChange={handleChange}
        className=" min-h-[50px] border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 focus:bg-slate-200"
      />
    </section>
  );
};

export default EmailInput;

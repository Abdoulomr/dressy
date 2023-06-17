import { ErrorMessage } from "@hookform/error-message";
import React, { ChangeEvent } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";

interface EmailInputProps {
  labelText: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
const emailPattern = {
  value: new RegExp(
    /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
  ),
  // value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Adresse email invalide",
};

const EmailInput: React.FC<EmailInputProps> = ({
  labelText,
  name,
  register,
  errors,
}) => {
  return (
    <section className="flex flex-col gap-2 relative">
      <span>{labelText}</span>
      <input
        className=" min-h-[50px] border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 "
        autoComplete="username"
        type="email"
        id={name}
        {...register(name, {
          required: "Ce champ est obligatoire",
          pattern: emailPattern,
        })}
      />
      <ErrorMessage errors={errors} name={name} as="small" />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <small>{message}</small>}
      />
    </section>
  );
};

export default EmailInput;

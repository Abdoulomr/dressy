"use client";
import { ErrorMessage } from "@hookform/error-message";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";

interface PasswordInputProps {
  labelText: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  labelText,
  name,
  register,
  errors,
}) => {
  return (
    <section className="flex flex-col gap-2 relative">
      <span>{labelText}</span>
      <input
        {...register(name, {
          required: "Ce champ est obligatoire",
          minLength: {
            value: 8,
            message: "Le mot de passe doit faire 8 carractères ou plus",
          },
          maxLength: {
            value: 30,
            message: "Le mot de passe ne doit pas dépasser 30 caractères",
          },
        })}
        autoComplete="current-password"
        type="password"
        name={name}
        className=" min-h-[50px] border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 "
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

export default PasswordInput;

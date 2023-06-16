"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import SubmitBtn from "@/components/inputs/SubmitBtn";

const Page = () => {
  const { register, handleSubmit, formState, control } = useForm({});
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    console.log(email, password);
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
        onSubmit={handleSubmit(onSubmit)}
        className="py-12 w-11/12 max-w-lg flex flex-col gap-10 justify-center align-center bg-white px-10 mt-4 shadow-md rounded-md"
      >
        <EmailInput
          labelText="Adresse Email"
          name="email"
          register={register}
          errors={errors}
        />
        <PasswordInput
          labelText="Mot de passe"
          name="password"
          register={register}
          errors={errors}
        />
        <SubmitBtn
          valueTitle="Se connecter"
          marinTop={0}
          bgColor="rgb(30 41 59)"
        />
      </form>
    </div>
  );
};

export default Page;

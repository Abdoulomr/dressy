"use client";
import React, { FormEvent, useState } from "react";
import SimpleBtn from "@/components/buttons/SimpleBtn";
import EmailInput from "@/components/inputs/EmailInput";
import PhoneTelInput from "@/components/inputs/PhoneInput";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/passwordInput";
import axios from "axios";
import { useMutation } from "react-query";
import dbConnect from "../../../../config/dbConnect";

export type FormValuesType = string | number | undefined;

export interface NewAdminDataType {
  [key: string]: FormValuesType;
}

const Page = () => {
  const [newAdminData, setNewAdminData] = useState<NewAdminDataType>({
    newAdminFirstName: "",
    newAdminLastName: "",
    newAdminPhoneNumber: "",
    newAdminEmail: "",
    newAdminPassword: "",
  });

  const handleEmailChange = (newEmail: string) => {
    setNewAdminData((prevState) => ({
      ...prevState,
      newAdminEmail: newEmail,
    }));
  };
  const handleTextInputChange = (newValue: string, name: string) => {
    setNewAdminData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const handlePasswordInputChange = (newValue: string, name: string) => {
    setNewAdminData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  //   const handleSubmit = async (e: FormEvent) => {
  //   const {
  //     newAdminFirstName,
  //     newAdminLastName,
  //     newAdminPhoneNumber,
  //     newAdminEmail,
  //     newAdminPassword,
  //   } = newAdminData;

  //   try {
  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         newAdminFirstName,
  //         newAdminLastName,
  //         newAdminPhoneNumber,
  //         newAdminEmail,
  //         newAdminPassword,
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     e.preventDefault();
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (e: FormEvent) => {
    const {
      newAdminFirstName,
      newAdminLastName,
      newAdminPhoneNumber,
      newAdminEmail,
      newAdminPassword,
    } = newAdminData;
    try {
      const { data } = await axios.post("/api/register", {
        newAdminFirstName,
        newAdminLastName,
        newAdminPhoneNumber,
        newAdminEmail,
        newAdminPassword,
      });
      console.log(data);
    } catch (err) {
      e.preventDefault();
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="text-slate-700 text-xl font-bold w-fit mx-auto">
        Créer un administrateur
      </h2>

      <form
        onSubmit={handleSubmit}
        // className="flex rounded-lg flex-wrap align-middle justify-center gap-9 gap-y-6 w-90 basis-9 max-w-screen-lg mx-auto px-4 py-12 bg-white shadow-md mt-5"
        className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 w-90 max-w-screen-lg mx-auto px-8 py-12 bg-white shadow-md mt-5 xs:px-5"
      >
        <TextInput
          name="newAdminFirstName"
          onChange={handleTextInputChange}
          labelText="Prénom"
        />
        <TextInput
          name="newAdminLastName"
          onChange={handleTextInputChange}
          labelText="Nom"
        />
        <PhoneTelInput
          newAdminData={newAdminData}
          setNewAdminData={setNewAdminData}
        />
        <EmailInput onChange={handleEmailChange} labelText="Adresse Email" />
        <PasswordInput
          name="newAdminPassword"
          onChange={handlePasswordInputChange}
          labelText="Mot de passe"
        />

        <SimpleBtn
          title="Créer l'administrateur"
          onClick={handleSubmit}
          marinTop={28}
        />
      </form>
    </>
  );
};

export default Page;

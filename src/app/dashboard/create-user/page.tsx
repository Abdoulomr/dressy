"use client";
import EmailInput from "@/components/inputs/EmailInput";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import style from "../../../styles/PhoneTelInput.module.css";
import fr from "react-phone-number-input/locale/fr.json";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "../../../components/inputs/PasswordInput";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import SubmitBtn from "@/components/inputs/SubmitBtn";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const Page = () => {
  const { register, handleSubmit, formState, control } = useForm({});
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    const {
      newAdminFirstName,
      newAdminLastName,
      newAdminPhoneNumber,
      newAdminEmail,
      newAdminPassword,
    } = data;
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
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-slate-700 text-2xl font-bold w-fit mx-auto mb-10">
        Ajouter un administrateur
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid rounded-lg xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 w-11/12 max-w-screen-lg mx-auto px-8 py-12 bg-white shadow-md mt-5 xs:px-5"
      >
        <TextInput
          name="newAdminFirstName"
          register={register}
          labelText="Prénom"
          errors={errors}
        />
        <TextInput
          name="newAdminLastName"
          register={register}
          labelText="Nom"
          errors={errors}
        />
        <div className="flex flex-col gap-2 relative">
          <span>Téléphone</span>
          <Controller
            name="newAdminPhoneNumber"
            control={control}
            rules={{
              required: "Ce champ est obligatoire",
              validate: (value) => isValidPhoneNumber(value),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                className={`${style.phoneTelInput} min-h-[50px] flex gap-3 border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100`}
                value={value}
                onChange={onChange}
                labels={fr}
                defaultCountry="SN"
                id="phone-input"
              />
            )}
          />
          {errors["newAdminPhoneNumber"] && (
            <small>Numéro de téléphone invalide</small>
          )}
        </div>
        <EmailInput
          labelText="Adresse Email"
          name="newAdminEmail"
          register={register}
          errors={errors}
        />
        <PasswordInput
          labelText="Mot de passe"
          name="newAdminPassword"
          register={register}
          errors={errors}
        />
        <SubmitBtn
          valueTitle="Ajouter"
          marinTop={28}
          bgColor="rgb(5 150 105)"
        />
      </form>
    </>
  );
};

export default Page;

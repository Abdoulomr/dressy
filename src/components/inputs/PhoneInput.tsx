"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import style from "../../styles/PhoneTelInput.module.css";
import fr from "react-phone-number-input/locale/fr.json";
import { NewAdminDataType } from "@/app/dashboard/create-user/page";

interface PhoneTelInputProps {
  newAdminData: object;
  setNewAdminData: Dispatch<SetStateAction<NewAdminDataType>>;
}

const PhoneTelInput: React.FC<PhoneTelInputProps> = ({
  newAdminData,
  setNewAdminData,
}) => {
  const [value, setValue] = useState<string | undefined>();

  const handlePhoneChange = (newPhone: string) => {
    setNewAdminData({ ...newAdminData, newAdminPhoneNumber: newPhone });
  };

  const handlePhoneInputDataChange = () => {
    if (value && isValidPhoneNumber(value)) {
      handlePhoneChange(value);
    } else setNewAdminData({ ...newAdminData, newAdminPhoneNumber: "" });
  };

  useEffect(() => {
    handlePhoneInputDataChange();
  }, [value]);

  return (
    <section className="flex flex-col gap-2">
      <span>Téléphone</span>
      <PhoneInput
        className={`${style.phoneTelInput} w-64 flex gap-3 border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 focus:bg-slate-200`}
        placeholder="Enter phone number"
        // type="tel"
        value={value}
        labels={fr}
        defaultCountry="SN"
        onChange={(value) => setValue(value)}
      />
    </section>
  );
};

export default PhoneTelInput;

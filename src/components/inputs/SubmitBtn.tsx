import React, { FormEvent } from "react";

interface SimpleBtnProps {
  valueTitle: string;
  bgColor: string;
  marinTop: number;
}

const SubmitBtn: React.FC<SimpleBtnProps> = ({
  valueTitle,
  bgColor,
  marinTop,
}) => {
  return (
    <input
      value={valueTitle}
      type="submit"
      style={{ marginTop: `${marinTop}px`, backgroundColor: `${bgColor}` }}
      className={`m-0 min-h-[45px] px-12 py-2 rounded-md hover:cursor-pointer  text-white focus:outline-none focus:bg-green-700 hover:opacity-90`}
    />
  );
};

export default SubmitBtn;

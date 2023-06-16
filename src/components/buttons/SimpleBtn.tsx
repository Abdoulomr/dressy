import React, { FormEvent } from "react";

interface SimpleBtnProps {
  title: string;
  bgColor: string;
  onClick: (e: FormEvent) => void;
  marinTop: number;
  btnType: "button" | "submit" | "reset" | undefined;
}

const SimpleBtn: React.FC<SimpleBtnProps> = ({
  title,
  bgColor,
  onClick,
  marinTop,
  btnType,
}) => {
  return (
    <button
      onClick={onClick}
      type={btnType}
      style={{ marginTop: `${marinTop}px`, backgroundColor: `${bgColor}` }}
      className={`m-0 px-12 py-2 rounded-md  text-white focus:outline-none focus:bg-green-700 hover:opacity-90`}
    >
      {title}
    </button>
  );
};

export default SimpleBtn;

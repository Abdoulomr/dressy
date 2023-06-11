import React, { FormEvent } from "react";

interface SimpleBtnProps {
  title: string;
  onClick: (e: FormEvent) => void;
  marinTop: number;
}

const SimpleBtn: React.FC<SimpleBtnProps> = ({ title, onClick, marinTop }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ marginTop: `${marinTop}px` }}
      className="m-0 px-12 py-2 rounded-md text-white bg-green-500   hover:bg-green-700 focus:outline-none focus:bg-green-700"
    >
      {title}
    </button>
  );
};

export default SimpleBtn;

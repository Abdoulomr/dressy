import { ErrorMessage } from "@hookform/error-message";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";

interface TextInputProps {
  labelText: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TextInput: React.FC<TextInputProps> = ({
  labelText,
  name,
  register,
  errors,
}) => {
  return (
    <section className="flex flex-col gap-2 relative">
      <span>{labelText}</span>
      <input
        type="text"
        {...register(name, {
          required: "Ce champ est obligatoire",
          // minLength: 2,
          // maxLength: 40,
        })}
        className="min-h-[50px] border-none outline-none px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100"
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

export default TextInput;

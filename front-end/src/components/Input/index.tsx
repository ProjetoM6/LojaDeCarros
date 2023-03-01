import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import InputStyled, { LabelStyled } from "./style";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
}
const Input = ({
  label,
  name,
  register,
  placeholder,
  type,
  ...rest
}: IInputProps) => {
  return (
    <LabelStyled className="body-2-500">
      {label}
      <InputStyled
        type={type || "text"}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </LabelStyled>
  );
};

export default Input;

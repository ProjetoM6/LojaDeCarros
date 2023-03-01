import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import InputRadioStyled from "./style";

interface IInputRadio extends InputHTMLAttributes<HTMLInputElement> {
  txt: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}
const InputRadio = ({ txt, register, name, ...rest }: IInputRadio) => {
  return (
    <InputRadioStyled className="radio">
      <label className="labelRadio">
        <input
          type="radio"
          {...register(name)}
          {...rest}
          className="inputRadio"
        />
        <span className="textSelect">{txt}</span>
      </label>
    </InputRadioStyled>
  );
};

export default InputRadio;

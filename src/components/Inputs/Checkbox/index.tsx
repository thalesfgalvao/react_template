import { useState } from "react";
import * as S from "./style";

interface ICheckBoxInput {
  value: string;
  checked?: boolean;
  id?: string;
  name?: string;
}

const CheckBoxInput = ({ value, id, name }: ICheckBoxInput) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <S.Label>
        <S.CheckBox
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        {value}
      </S.Label>
    </>
  );
};

export default CheckBoxInput;

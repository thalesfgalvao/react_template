import { useState } from "react";
import * as S from "./style";

interface ICheckBoxInput {
  value: string;
  checked?: boolean;
}

const CheckBoxInput = ({ value }: ICheckBoxInput) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <S.Label>
        <S.CheckBox type="checkbox" checked={checked} onChange={handleChange} />
        {value}
      </S.Label>
    </>
  );
};

export default CheckBoxInput;

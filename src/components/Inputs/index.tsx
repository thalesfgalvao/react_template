import { useState } from "react";
import * as S from "./style";

interface IInputProps {
  small?: string;
  placeholder?: string;
}

const Input = ({ small, placeholder }: IInputProps) => {
  const [isLogged, setIsLogegd] = useState(false);
  return (
    <S.InputWrapper>
      <S.Input placeholder={placeholder} />
      {isLogged ? <S.Blink>Test</S.Blink> : <S.Small>{small}</S.Small>}
    </S.InputWrapper>
  );
};

export default Input;

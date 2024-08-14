import * as S from "./style";

interface IInputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
}

const Input = ({ type, id, name, placeholder }: IInputProps) => {
  return (
    <S.InputWrapper>
      <S.Input type={type} id={id} name={name} placeholder={placeholder} />
    </S.InputWrapper>
  );
};

export default Input;

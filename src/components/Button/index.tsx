import * as S from "./style";

interface IButtonProps {
  value: string;
  kind?: "default" | "success" | "error";
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const Button = ({ value, kind, type, disabled }: IButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button type={type} kind={kind} disabled={disabled}>
        {value}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;

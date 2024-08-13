import * as S from "./style";

interface IButtonProps {
  value: string;
  kind?: "default" | "success" | "error";
}

const Button = ({ value, kind }: IButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button kind={kind}>{value}</S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;

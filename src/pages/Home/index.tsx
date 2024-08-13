import Button from "../../components/Button";
import Input from "../../components/Inputs";
import CheckBoxInput from "../../components/Inputs/Checkbox";
import * as S from "./style";

const Home = () => {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.LoginTitle>Login</S.LoginTitle>
        <Input placeholder="Insira seu email" />
        <Input placeholder="***************" />
        <CheckBoxInput value="Lembrar minha senha" />
        <Button kind="success" value="Entrar" />
        <Button kind="default" value="Criar sua conta" />
      </S.LoginWrapper>
    </S.Wrapper>
  );
};

export default Home;

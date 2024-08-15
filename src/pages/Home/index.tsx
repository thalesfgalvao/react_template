import * as S from "./style";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import CheckBoxInput from "../../components/Inputs/Checkbox";
import Form from "../../components/Form";

interface FormValues {
  email: string;
  password: string;
}

const Home = () => {
  const initialValues: FormValues = { email: "", password: "" };
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.LoginTitle>Login</S.LoginTitle>
        <Form initialValues={initialValues}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu email"
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
          />
          <CheckBoxInput value="Lembrar minha senha" />
          <Button type="submit" kind="success" value="Entrar" />
          <Button kind="default" value="Criar sua conta" />
        </Form>
      </S.LoginWrapper>
    </S.Wrapper>
  );
};

export default Home;

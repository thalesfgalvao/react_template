import * as S from "./style";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.TitleNotFound>Error 404</S.TitleNotFound>
      <S.BodyContent>Página não encontrada</S.BodyContent>
      <S.Label>Page not found</S.Label>
    </S.Wrapper>
  );
};

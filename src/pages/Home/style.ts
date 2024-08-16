import styled, { css } from "styled-components";
export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.background.dark};
  `}
`;

export const LoginWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    width: 50vw;
    height: 50vh;
    max-width: 40rem;
    max-height: 50rem;
    background-color: ${theme.background.light};
    border-radius: 2rem;
  `}
`;

export const LoginTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-weight: bolder;
    text-align: center;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

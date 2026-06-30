import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleNotFound = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.headline};
    font-size: ${theme.sizes.huge};
    font-weight: 700;
  `}
`;

export const BodyContent = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.body};
    font-size: ${theme.sizes.medium};
    font-weight: 400;
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-size: ${theme.sizes.xsmall};
    font-weight: 300;
  `}
`;

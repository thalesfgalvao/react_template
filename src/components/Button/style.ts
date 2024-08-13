import styled, { css } from "styled-components";

interface IButtonStyledProps {
  kind?: "default" | "success" | "error";
}

export const ButtonWrapper = styled.div``;

export const Button = styled.button<IButtonStyledProps>`
  ${({ kind, theme }) =>
    kind === "default" &&
    css`
      background-color: ${theme.colors.white};
    `}

  ${({ kind, theme }) =>
    kind === "success" &&
    css`
      background-color: ${theme.colors.successColor};
    `}

    ${({ kind, theme }) =>
    kind === "error" &&
    css`
      background-color: ${theme.colors.errorColor};
    `}

  border-radius: 0.8rem 0;
  width: 100%;
  border: 0;
  padding: 1rem;
  outline: none;
  font-weight: lighter;

  &:hover {
    cursor: pointer;
    transition: 200ms;
    font-weight: bolder;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  }
`;

import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Small = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.errorColor};
    font-weight: bolder;
  `}
`;

export const Input = styled.input`
  border-bottom: 0.1rem solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 1rem;
  outline: none;

  &:focus {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.8rem 0;
    font-weight: bold;
  }
`;

export const Blink = styled.small`
  opacity: 0;
`;

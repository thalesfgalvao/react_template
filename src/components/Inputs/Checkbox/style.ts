import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    font-size: ${theme.fonts.sizes.xsmall};
  `}
`;

export const CheckBox = styled.input``;

import styled, { css } from 'styled-components';
import { CardVariant } from '../../types';

interface CardIProps {
  variant: CardVariant;
}

const variantStyles = {
  primary: css<CardIProps>`
    border-radius: 4px;

    &::before {
      content: '';
      width: 100%;
      height: 7px;
      display: block;
      background-color: ${({ theme }) => theme.color.bg.primary.default};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  `,

  simple: css``,
};

export const Card = styled.div<CardIProps>`
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.border.secondary};

  ${({ variant }) => variantStyles[variant]}
`;

export const Inner = styled.div`
  padding: 1.5rem;
`;

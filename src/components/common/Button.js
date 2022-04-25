/*
 * 버튼
 */
import React from 'react';
import styled from 'styled-components';
// styles
import { Logo, StyledBurger } from '../../styles/common/Button';
import {
  buttonColor,
  mainTextColor,
  objectLevelThreeColor,
} from '../../styles/theme';

export const RawButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  background: transparent;

  font-size: 0.9rem;
  font-family: MinSans-Medium;

  user-select: none;
`;

export const Button = styled(RawButton)`
  ${buttonColor}
  border-radius: 12px;
`;

export const UnderlinedButton = styled(RawButton)`
  padding: 0.5rem;
  text-decoration: underline;
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border: 1px solid ${mainTextColor};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  &:hover {
    background-color: ${objectLevelThreeColor};
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen();
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const LogoButton = ({ title }) => <Logo>{title}</Logo>;

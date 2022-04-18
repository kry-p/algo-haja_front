import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

import { buttonColor, mainTextColor } from '../../styles/theme';

const Logo = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;

  font-family: 'Yeongdo-Regular';
  font-size: 1.5rem;
  transition: color 0.5s ease-in-out;
  color: ${mainTextColor};
`;

export const Button = styled.button`
  ${buttonColor}
  border-radius: 12px;
  font-family: 'MinSans-Medium';
  font-size: 0.875rem;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;

  transition: background-color 0.25s;
  user-select: none;
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;
`;

export const FooterButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid white;
  background-color: black;
  border-radius: 1.25rem;
  padding-top: 0.25rem;

  transition: background-color 0.25s ease-in-out;
  &:hover {
    background-color: ${palette.gray[8]};
  }
`;

export const BorderlessInput = styled.input`
  background-color: ${palette.gray[9]};
  color: white;
  color: white;
  border-radius: 24px;
  border: rgba(0, 0, 0, 0);
  font-family: 'MinSans-Medium';
  font-size: 0.875rem;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;

  transition: background-color 0.25s;
  user-select: none;

  &:hover {
    background-color: ${palette.gray[8]};
  }
`;

const StyledBurger = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 2.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    right: calc((100vw - 1024px) / 3 + 2rem);
  }

  div {
    width: 1.5rem;
    height: 0.075rem;
    background: ${mainTextColor};
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
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

import React from 'react';
import styled from 'styled-components';

import {
  buttonColor,
  mainTextColor,
  objectLevelThreeColor,
} from '../../styles/theme';

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
  border: 0px;
  font-family: 'MinSans-Medium';
  font-size: 0.875rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  user-select: none;
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid ${mainTextColor};
  border-radius: 12px;
  padding: 0.25rem 0.547rem;

  &:hover {
    background-color: ${objectLevelThreeColor};
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

  @media (min-width: 512px) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 0.075rem;
    background: ${mainTextColor};
    transition: all 0.3s ease-in-out; // div 적용 예외 (메뉴 버튼 애니메이션)
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

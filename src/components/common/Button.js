/*
 * 버튼
 */
// React core
import React from 'react';
import styled, { css } from 'styled-components';
// Style
import { Logo, StyledBurger } from '../../styles/common/Button';
import {
  buttonColor,
  mainTextColor,
  objectLevelTwoColor,
  paginationColor,
} from '../../styles/theme';

// 기본 버튼
export const RawButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  background: transparent;

  font-size: 0.9rem;
  font-family: Pretendard-Regular;

  user-select: none;
`;

// 머터리얼 스타일 버튼
export const Button = styled(RawButton)`
  ${buttonColor}
  border-radius: 12px;
`;

// 호버링 시 밑줄이 표시되는 버튼 (일부 링크용)
export const HoverToUnderlineButton = styled(RawButton)`
  div:nth-child(n) {
    padding-left: 1rem;
  }
  div:first-child {
    padding-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

// 페이지네이션 버튼
export const PaginationButton = styled(Button)`
  background: ${objectLevelTwoColor};
  ${(props) =>
    props.enabled &&
    css`
      ${paginationColor}
    `}
  color: ${mainTextColor};
  margin: 0rem 0.5rem;
  padding: 0.5rem;
`;

// 항상 밑줄이 표시되는 버튼
export const UnderlinedButton = styled(RawButton)`
  padding: 0.5rem;
  text-decoration: underline;
`;

// 아이콘 버튼
export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border: 1px solid ${mainTextColor};
  border-radius: 12px;

  background-color: transparent;
  &:hover {
    background-color: ${objectLevelTwoColor};
  }
`;

// 햄버거 버튼
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

// 로고 버튼
export const LogoButton = ({ title, ...props }) => (
  <Logo {...props}>{title}</Logo>
);

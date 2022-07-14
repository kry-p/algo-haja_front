/*
 * 버튼
 */
// React core
import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
// Style
import { Logo, StyledBurger } from '../../styles/common/Button';
import {
  accentColor,
  buttonColor,
  mainTextColor,
  objectLevelTwoColor,
} from '../../styles/theme';

import { IoArrowBack } from '@react-icons/all-files/io5/IoArrowBack';

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

  ${(props) =>
    props.dense &&
    css`
      padding: 0.5rem 0rem;
    `}
`;

// 머터리얼 스타일 버튼
export const StyledButton = styled((props) => <RawButton {...props} />)`
  ${buttonColor}
  border-radius: 12px;
`;

// 호버링 시 밑줄이 표시되는 버튼 (일부 링크용)
export const StyledHoverButton = styled((props) => <RawButton {...props} />)`
  font-size: 1rem;
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
export const PaginationButton = styled((props) => <StyledButton {...props} />)`
  background: ${objectLevelTwoColor};
  ${(props) =>
    props.enabled &&
    css`
      ${accentColor}
    `}
  color: ${mainTextColor};
  margin: 0rem 0.5rem;
  padding: 0.5rem 0.75rem;
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

export const Button = ({ text, ...props }) => (
  <StyledButton {...props}>{text}</StyledButton>
);

export const HoverToUnderlineButton = ({ text, icon, ...props }) => (
  <StyledHoverButton {...props}>
    {icon}
    <div>{text}</div>
  </StyledHoverButton>
);

export const BackwardButton = () => {
  const navigate = useNavigate();
  return (
    <HoverToUnderlineButton
      text="이전으로 돌아가기"
      icon={<IoArrowBack size={20} />}
      onClick={() => navigate(-1)}
    />
  );
};

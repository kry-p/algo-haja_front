/**
 * Button
 */
import styled from 'styled-components';
import { mainTextColor } from '../theme';

export const Logo = styled.button`
  padding: 0.5rem 0.5rem;

  border: transparent;
  color: ${mainTextColor};
  background-color: transparent;

  font-family: 'Yeongdo-Regular';
  font-size: 1.5rem;
`;

// Hamburger button
export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: fixed;
  top: 1.5rem;
  right: 2.125rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;

  border: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;

  cursor: pointer;
  z-index: 10;

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
    position: relative;
    width: 1.5rem;
    height: 0.075rem;

    background: ${mainTextColor};
    transition: all 0.3s ease-in-out; // div 적용 예외 (메뉴 버튼 애니메이션)
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

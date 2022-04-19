import styled, { css } from 'styled-components';
import {
  backgroundColor,
  mainTextColor,
  objectLevelTwoColor,
  subTextColor,
} from '../../../styles/theme';

export const DRAWER_WIDTH = 300;

export const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const Spacer = styled.div`
  height: 6rem;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 4.5rem;
  position: absolute;

  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // transition 적용 예외
  background: ${backgroundColor};
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.shadowEnabled &&
    css`
      box-shadow: 0rem 0rem 0.25rem 0.125rem rgba(0, 0, 0, 0.1);
    `}

  .left {
    padding-left: 2rem;
  }

  .right {
    padding-right: 2rem;
  }

  @media (min-width: 512px) {
    .left {
      padding-left: 2rem;
    }

    .right {
      padding-right: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .left {
      padding-left: calc((100vw - 1024px) / 3 + 2rem);
    }

    .right {
      padding-right: calc((100vw - 1024px) / 3 + 2rem);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0rem;
  right: -300px;

  width: 270px;
  height: 100vh;

  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  background-color: ${backgroundColor};

  box-shadow: 0rem 0rem 0.25rem 0.125rem rgba(0, 0, 0, 0.1);

  z-index: 2;

  @media (min-width: 512px) {
    display: none;
  }
`;

export const MenuDesktop = styled.div`
  display: flex;
  .item {
    margin-right: 0.5rem;
  }
  @media (max-width: 511px) {
    display: none;
  }
`;

export const MenuItemDesktop = styled.button`
  background: rgba(0, 0, 0, 0);
  border: 0px;
  font-size: medium;
  font-family: MinSans-Medium;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MenuMobile = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  justify-items: center;
  align-items: center;
`;

export const MenuItemMobile = styled.div`
  width: 100%;
  height: 4rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  font-size: large;

  color: ${mainTextColor};

  .description {
    padding-top: 0.25rem;
    font-size: 0.9rem;

    color: ${subTextColor};
  }

  &:hover {
    background: ${objectLevelTwoColor};
  }
`;

// Styled-components
import styled, { css } from 'styled-components';
import {
  subTextColor,
  objectLevelOneColor,
  objectLevelThreeColor,
  accentColor,
} from '../theme';

/**
 * Settings content wrapper
 */
export const ContentWrapper = styled.div`
  display: grid;
  gap: 1rem;
  @media (max-width: 511px) {
    grid-template-rows: 1fr auto;
  }
  @media (min-width: 512px) {
    align-items: start;
    grid-template-columns: 6rem auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 16rem auto;
  }
`;

/**
 * Menu
 */
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${objectLevelThreeColor};
  border-radius: 1rem;
  background: ${objectLevelOneColor};
  overflow: hidden;
  ${(props) =>
    props.left &&
    css`
      margin: 0rem 1rem;
      @media (min-width: 512px) {
        margin: 0rem 0rem 1rem 1rem;
      }
    `}
  ${(props) =>
    props.right &&
    css`
      margin: 0rem 1rem;
      @media (min-width: 512px) {
        margin: 0rem 1rem 1rem 0rem;
      }
    `}
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  ${(props) =>
    props.selected &&
    css`
      ${accentColor};
    `}
  &:hover {
    background: ${accentColor};
  }
`;

export const MenuItemContent = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  justify-items: center;
  align-items: center;
  width: 100%;
  @media (min-width: 512px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  .text {
    justify-self: start;
    @media (min-width: 512px) and (max-width: 767px) {
      display: none;
    }
  }
`;

/**
 * Settings component
 */
export const Settings = styled.div`
  display: grid;
  gap: 1rem;
  width: calc(100% - 2rem);
  padding: 2rem 0rem;
`;

export const SettingsItem = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: start;
  @media (min-width: 512px) {
    grid-template-columns: 6rem auto;
  }
  .title {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1rem;
  }
`;

export const SettingsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: larger;
`;

export const SettingsSubtitle = styled.div`
  padding: 0.5rem 0rem;
  color: ${subTextColor};
  font-size: 0.9rem;
`;

export const SettingsDescription = styled.div`
  display: grid;
  grid-template-columns: auto 4rem;
  gap: 1rem;
  width: 100%;
  ${(props) =>
    props.xlarge &&
    css`
      grid-template-columns: auto;
      width: 100%;

      @media (min-width: 512px) {
        width: 80%;
      }
    `}
  ${(props) =>
    props.large &&
    css`
      width: 15rem;
      @media (min-width: 320px) {
        width: 16rem;
      }
    `}
  ${(props) =>
    props.medium &&
    css`
      width: 12.5rem;
      @media (min-width: 320px) {
        width: 14rem;
      }
    `}
    ${(props) =>
    props.small &&
    css`
      width: 10rem;
      @media (min-width: 320px) {
        width: 12rem;
      }
    `}
`;

/**
 * Misc.
 */
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${objectLevelThreeColor};
`;

/**
 * Submit
 */
export const SubmitArea = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

import styled from 'styled-components';
import { backgroundColor, mainTextColor } from '../../../styles/theme';

export const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  width: 100%;
`;

export const PageTypoNotFound = styled.span`
  font-family: 'MinSans-Thin';
  font-size: 6rem;
  padding-bottom: 1.5rem;
  user-select: none;
  color: ${mainTextColor};

  @media (min-width: 512px) {
    font-size: 10rem;
  }
`;

export const MenuNotFound = styled.div`
  display: grid;
  padding-top: 1rem;
  gap: 0.5rem;
  grid-template-rows: 1fr;
  @media (min-width: 512px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const PageStyleNotFound = styled.div`
  font-family: 'MinSans-Medium';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${backgroundColor};

  width: 100%;
  height: 100%;
`;

export const PageDescriptionNotFound = styled.span`
  user-select: none;
  color: ${mainTextColor};
`;

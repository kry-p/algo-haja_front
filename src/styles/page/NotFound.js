import styled from 'styled-components';
import { mainTextColor } from '../theme';

export const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  width: 100%;
`;

export const PageTypoNotFound = styled.span`
  padding-bottom: 1.5rem;
  color: ${mainTextColor};
  font-family: 'MinSans-Thin';
  font-size: 6rem;
  user-select: none;
  @media (min-width: 512px) {
    font-size: 10rem;
  }
`;

export const MenuNotFound = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 1fr;

  padding-top: 1rem;
  @media (min-width: 512px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const PageStyleNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-family: 'MinSans-Medium';
`;

export const PageDescriptionNotFound = styled.span`
  user-select: none;
  color: ${mainTextColor};
`;

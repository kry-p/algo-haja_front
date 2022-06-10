/**
 * Styles for landing page
 */
import styled from 'styled-components';
import { headlineBackgroundFilter, mainTextColor } from '../theme';

export const MainHeadlineBackground = styled.div`
  ${headlineBackgroundFilter}
  position: absolute;

  width: 100vw;
  height: 75vh;
  background: url(/resources/image/bg.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 62.5%;
`;

export const MainHeadline = styled.div`
  display: grid;
  grid-template-rows: 1fr 12rem 1fr;
  justify-items: center;

  width: 100vw;
  height: 75vh;

  @media (min-width: 384px) {
    grid-template-rows: 1fr 15rem 1fr;
  }

  @media (min-width: 768px) {
    grid-template-rows: 1fr 12rem 1fr;
  }
`;

export const MainHeadlineTitle = styled.div`
  display: grid;
  gap: 1rem;

  color: ${mainTextColor};
  font-size: 3rem;
  z-index: 1;

  @media (min-width: 384px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    font-size: 5rem;

    div:first-child {
      grid-column: 1 / span 2;
    }
  }
`;

export const MainHeadlineDescription = styled.div`
  width: calc(0.8 * 100vw);

  color: ${mainTextColor};
  z-index: 1;

  padding: 1rem;
  font-size: 1.1rem;
  line-height: 2rem;

  @media (min-width: 384px) {
    width: 320px;
    font-size: 1.2rem;
  }

  @media (min-width: 512px) {
    width: 384px;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: 720px;
  }
`;

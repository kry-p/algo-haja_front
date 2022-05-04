import styled from 'styled-components';
import { headlineBackgroundFilter, mainTextColor } from '../theme';

export const AppStyle = styled.div`
  width: 100vw;
`;

export const PageMain = styled.div`
  width: 100%;
`;

export const MainBlock = styled.div`
  height: 100vh;
`;

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

export const MainHeadlineDescription = styled.div`
  color: ${mainTextColor};
  z-index: 1;

  width: 70%;
  padding: 2rem;
  font-size: 1.1rem;

  @media (min-width: 384px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    width: calc(1024px * 0.7);
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

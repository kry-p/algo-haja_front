import styled from 'styled-components';

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding-bottom: 1rem;
`;

export const SafeArea = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: calc((100vw - 1024px) / 3 + 1024px);
  }
`;

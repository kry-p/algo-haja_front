import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${FadeIn} 0.15s ease-in;
  transition: opacity 0.15s ease-out;

  z-index: 10;
`;

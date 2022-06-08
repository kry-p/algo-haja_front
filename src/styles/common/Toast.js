import styled from 'styled-components';
import { toastColor } from '../theme';

export const ToastContainer = styled.div`
  ${toastColor}
  position: fixed;
  top: 5rem;
  border-radius: 12px;
  width: calc(80vw);
  margin-left: calc(10vw);
  margin-right: calc(10vw);
  z-index: 5;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 512px) {
    width: calc(384px);
    margin-left: calc(0.5 * (100vw - 384px));
    margin-right: calc(0.5 * (100vw - 384px));
  }
`;

export const ToastContent = styled.div`
  width: 100%;
  display: grid;

  padding: 1rem 0rem;
  grid-template-columns: 3.5rem auto;

  align-items: start;
  line-height: 1.5rem;

  font-family: 'MinSans-Light';
`;

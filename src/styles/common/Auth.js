import styled from 'styled-components';
import { errorMessageColor } from '../theme';

export const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(/resources/image/bg.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 62.5%;

  width: 100%;
`;

export const AuthFormBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
`;

export const SuggestBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.div`
  margin: 0.5rem 0rem;
  color: ${errorMessageColor};
  overflow: hidden;
  font-size: 0.875rem;
  text-align: center;
  line-height: 200%;

  transition: all 0.25s cubic-bezier(0.8, 0, 0.2, 1);
`;

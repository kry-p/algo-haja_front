/**
 * Authentication
 */
import styled from 'styled-components';
import { errorMessageColor } from '../theme';

export const AuthTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(/resources/image/bg.jpg);
  background-size: cover;
  background-position: 50% 62.5%;

  width: 100%;
`;

export const AuthTopButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const AuthContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
`;

export const AuthContentForm = styled.form`
  display: grid;
`;

export const AuthContentSuggest = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0rem;
  font-size: 0.9rem;
  span {
    padding-right: 0.5rem;
  }
`;

export const AuthContentError = styled.div`
  margin: 0.5rem 0rem;
  color: ${errorMessageColor};
  overflow: hidden;
  font-size: 0.875rem;
  text-align: center;
  line-height: 200%;

  transition: all 0.3s cubic-bezier(0.8, 0, 0.2, 1);
`;

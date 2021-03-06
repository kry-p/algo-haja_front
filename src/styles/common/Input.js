/**
 * Input
 */
import styled from 'styled-components';
import { mainTextColor, objectLevelTwoColor, subTextColor } from '../theme';

const Input = styled.input`
  width: 100%;

  padding: 0.5rem 0rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subTextColor};

  color: ${mainTextColor};
  background: transparent;

  font-size: 1rem;
  outline: none;
  & + & {
    margin-top: 1rem;
  }

  &:disabled {
    color: ${subTextColor};
  }
`;

export default Input;

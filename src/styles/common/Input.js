import styled from 'styled-components';
import { mainTextColor, objectLevelThreeColor } from '../theme';

const Input = styled.input`
  width: 100%;

  padding-bottom: 0.5rem;

  background: transparent;
  border: none;
  border-bottom: 1px solid ${objectLevelThreeColor};

  font-size: 1rem;
  color: ${mainTextColor};
  outline: none;
  & + & {
    margin-top: 1rem;
  }
`;

export default Input;

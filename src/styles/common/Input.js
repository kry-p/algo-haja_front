import styled from 'styled-components';
import { mainTextColor, subTextColor } from '../theme';

const Input = styled.input`
  width: 100%;

  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${subTextColor};

  color: ${mainTextColor};
  background: transparent;

  font-size: 1rem;
  outline: none;
  & + & {
    margin-top: 1rem;
  }
`;

export default Input;

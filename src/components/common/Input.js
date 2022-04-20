import styled from 'styled-components';
import { mainTextColor, objectLevelThreeColor } from '../../styles/theme';

const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${objectLevelThreeColor};
  color: ${mainTextColor};
  outline: none;
  width: 100%;
  padding-bottom: 0.5rem;
  background: rgba(0, 0, 0, 0);
  & + & {
    margin-top: 1rem;
  }
`;

export const LoginRegisterFormInput = styled(Input)`
  width: 210px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: 320px) {
    width: 240px;
  }
`;

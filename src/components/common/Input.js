/*
 * 입력 창
 */
import styled from 'styled-components';
import Input from '../../styles/common/Input';

export const LoginRegisterFormInput = styled(Input)`
  border-radius: 0;
  font-size: 0.9rem;
  width: 12rem;

  transition: all 0.5s ease-in-out;
  @media (min-width: 320px) {
    width: 14rem;
  }
`;

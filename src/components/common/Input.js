/*
 * 입력 창
 */
import styled from 'styled-components';
import Input from '../../styles/common/Input';

export const LoginRegisterFormInput = styled(Input)`
  width: 12rem;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  transition: all 0.5s ease-in-out;
  @media (min-width: 320px) {
    width: 14rem;
  }
`;

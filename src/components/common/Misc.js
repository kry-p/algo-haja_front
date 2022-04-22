/*
 * 기타 컴포넌트
 */
import styled from 'styled-components';
import { buttonColor } from '../../styles/theme';

const SolvedBadge = styled.div`
  display: flex;
  align-items: center;

  padding: 0.325rem 0.5rem;

  background-color: ${buttonColor};
  border-radius: 0.5rem;

  color: white;
  font-size: small;
`;

export default SolvedBadge;

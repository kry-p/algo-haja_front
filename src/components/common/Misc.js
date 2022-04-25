/*
 * 기타 컴포넌트
 */
import styled from 'styled-components';
import { badgeColor } from '../../styles/theme';

export const SolvedBadge = styled.div`
  ${badgeColor}
  display: flex;
  align-items: center;

  padding: 0.325rem 0.5rem;

  border-radius: 0.5rem;

  color: white;
  font-size: small;
`;

export const RoundedCornerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
`;

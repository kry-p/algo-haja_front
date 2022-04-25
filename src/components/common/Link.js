/*
 * 초록 모자 쓴 애
 */
import styled from 'styled-components';
import { mainTextColor, subTextColor } from '../../styles/theme';

export const Link = styled.a`
  color: ${subTextColor};
`;

export const TableItemLink = styled(Link)`
  color: ${mainTextColor};
  user-select: none;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

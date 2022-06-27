/**
 * 초록 모자 쓴 애
 */
// React-router
import { Link as RouterLink } from 'react-router-dom';
// Styled-components
import styled from 'styled-components';
// Style
import { mainTextColor, subTextColor } from '../../styles/theme';

export const Link = styled(RouterLink)`
  color: ${subTextColor};
`;

export const ExternalLink = styled.a`
  color: ${subTextColor};
`;

export const TableItemLink = styled(RouterLink)`
  color: ${mainTextColor};
  user-select: none;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

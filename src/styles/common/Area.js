/**
 * Area
 */
import React from 'react';
import styled from 'styled-components';
import useWindow from '../../lib/hooks/useWindow';
import { backgroundColor, objectLevelOneColor } from '../theme';

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding-bottom: 1rem;
  background: ${backgroundColor};
`;

export const SafeArea = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: calc((100vw - 1024px) / 3 + 1024px);
  }
`;

export const ContentArea = ({ children, ignoreMinHeight, ...props }) => {
  const window = useWindow();
  return (
    <Content
      style={{
        minHeight: !ignoreMinHeight && `calc(${window.height}px - 23rem)`,
      }}
      {...props}
    >
      {children}
    </Content>
  );
};

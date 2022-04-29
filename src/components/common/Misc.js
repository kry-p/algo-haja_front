/*
 * 기타 컴포넌트
 */
import React from 'react';
import styled from 'styled-components';
import { badgeColor } from '../../styles/theme';

import { AiTwotoneStar } from 'react-icons/ai';
import {
  getSolvedacTierColor,
  getSolvedacTierLevel,
} from '../../lib/solvedacTier';

export const SolvedBadge = styled.div`
  ${badgeColor}
  display: flex;
  align-items: center;

  padding: 0.325rem 0.5rem;

  border-radius: 0.5rem;

  color: white;
  font-size: small;
`;

export const SolvedacRatingBadge = ({ rating }) => {
  const tierLevel = getSolvedacTierLevel(rating);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '0.5rem',
      }}
    >
      <div style={{ zIndex: '1' }}>{getSolvedacTierLevel(rating)}</div>
      <AiTwotoneStar
        size={36}
        style={{
          position: 'absolute',
          color: getSolvedacTierColor(rating),
        }}
      />
    </div>
  );
};

export const RoundedCornerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
`;

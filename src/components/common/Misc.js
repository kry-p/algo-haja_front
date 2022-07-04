/**
 * 기타 컴포넌트
 */
// React core
import React from 'react';
import styled from 'styled-components';
// Style
import { badgeColor, resultBadgeColor } from '../../styles/theme';
// Icon
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
// Library
import {
  getSolvedacTierColor,
  getSolvedacTierLevel,
} from '../../lib/solvedacTier';

// 풀이 여부 뱃지
export const SolvedBadge = styled.div`
  ${badgeColor}
  display: flex;
  align-items: center;

  height: 1.25rem;

  padding: 0.325rem 0.5rem;

  border-radius: 0.5rem;

  color: white;
  font-size: small;
`;

// solved.ac 레이팅 뱃지
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
        fontSize: '0.8rem',
      }}
    >
      <div style={{ zIndex: '1' }}>{tierLevel}</div>
      <AiFillStar
        size={36}
        style={{
          position: 'absolute',
          color: getSolvedacTierColor(rating),
        }}
      />
    </div>
  );
};

// 둥근 모서리 처리
export const RoundedCornerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;
`;

// 연동 여부 뱃지
export const ResultBadge = styled.div`
  ${resultBadgeColor};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;

  border-radius: 0.75rem;
`;

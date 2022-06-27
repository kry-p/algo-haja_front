/**
 * 카드
 */
// React core
import React from 'react';
import styled, { css } from 'styled-components';
// Component
import { SolvedBadge } from './Misc';
// Style
import palette from '../../lib/palette';
import {
  authCardBackgroundColor,
  objectLevelOneColor,
  objectLevelTwoColor,
} from '../../styles/theme';
// Icon
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// 카드 기본형
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${objectLevelOneColor};
  border-radius: 12px;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);

  .text {
    display: -webkit-box;

    height: 2.25rem;

    overflow: hidden;

    text-align: left;
    white-space: normal;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

// 카드 뱃지 (풀이 여부 표시)
export const CardBadge = styled.div`
  padding: 0.5rem 0.5rem;
  margin: 0.25rem;

  background: ${objectLevelTwoColor};
  border-radius: 1rem;

  font-size: 0.75rem;

  ${(props) =>
    props.big &&
    css`
      font-size: 0.9rem;
      padding: 0.625rem 1rem;
      border-radius: 2rem;
      margin: 0rem 0.5rem 0.5rem 0rem;
    `}
`;

// 문제 카드
export const ProblemCardBlock = styled(Card)`
  width: 100%;
  height: 8.5rem;
  transition: all 0.25s ease-in-out;

  .category {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 100%;
    height: 2.25rem;

    overflow: hidden;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

// 로그인 / 회원가입 카드 인터페이스
export const AuthCardBlock = styled(Card)`
  ${authCardBackgroundColor}
  width: 12.5rem;
  padding: 1.5rem 2rem;

  backdrop-filter: blur(10px);

  transition: all 0.5s ease-in-out;
  @media (min-width: 320px) {
    width: 15rem;
  }
`;

export const ProblemCard = ({ title, solved, rating, tags }) => {
  const starsGenerator = (stars) => {
    const starsArray = [];
    for (let step = 0; step < stars; step++) starsArray.push(true);
    for (let step = 0; step < 5 - stars; step++) starsArray.push(false);
    return starsArray;
  };

  return (
    <ProblemCardBlock>
      <div
        style={{
          display: 'flex',
          height: '85%',
          width: '100%',
          margin: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>{title}</div>
          <SolvedBadge solved={solved}>Solved</SolvedBadge>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {starsGenerator(rating).map((item, index) =>
              item ? (
                <AiFillStar size={18} color={palette.yellow[5]} key={index} />
              ) : (
                <AiOutlineStar size={18} key={index} />
              )
            )}
          </div>
          <div />
        </div>
        <div className="category">
          {!!tags
            ? tags.map((item) => <CardBadge key={item}>{item}</CardBadge>)
            : null}
        </div>
      </div>
    </ProblemCardBlock>
  );
};

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import {
  objectLevelOneColor,
  objectLevelTwoColor,
  buttonColor,
} from '../../styles/theme';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${objectLevelOneColor};

  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    height: 2.25rem;
  }
`;

const CardBadge = styled.div`
  margin: 0.25rem;
  background: ${objectLevelTwoColor};
  border-radius: 1rem;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
`;

const SolvedBadge = styled.div`
  background-color: ${buttonColor};
  padding: 0.325rem 0.5rem;
  border-radius: 0.5rem;
  color: white;
  font-size: small;
`;

export const ProblemCardBlock = styled(Card)`
  width: 15rem;
  height: 10.5rem;
  transition: all 0.25s ease-in-out;

  @media (min-width: 320px) {
    width: 18rem;
  }

  @media (min-width: 512px) {
    width: 15rem;
  }

  @media (min-width: 800px) {
    width: 20rem;
  }

  .category {
    width: 100%;
    display: flex;

    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;

    height: 2.25rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const AuthCardBlock = styled(Card)`
  padding: 1.5rem 2rem;
  transition: all 0.5s ease-in-out;

  width: 12.5rem;

  @media (min-width: 320px) {
    width: 15rem;
  }
`;

export const ProblemCard = ({
  title,
  solved,
  description,
  stars,
  categories,
}) => {
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
          <SolvedBadge
            accent
            style={{
              visibility: solved ? 'visible' : 'hidden',
            }}
          >
            Solved
          </SolvedBadge>
        </div>
        <div
          style={{
            fontFamily: 'MinSans-Thin',
            lineHeight: 'normal',
            fontSize: 'small',
            width: '100%',
          }}
          className="text"
        >
          {description}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {starsGenerator(stars).map((item, index) =>
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
          {!!categories
            ? categories.map((item) => <CardBadge key={item}>{item}</CardBadge>)
            : null}
        </div>
      </div>
    </ProblemCardBlock>
  );
};

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import { cardColor, cardBadgeColor } from '../../styles/theme';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${cardColor};

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

    height: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const CardBadge = styled.div`
  margin: 0.25rem;
  background: ${cardBadgeColor};
  border-radius: 1rem;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
`;

export const ProblemCard = styled(Card)`
  width: 15rem;
  height: 10.5rem;

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
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;

    height: 2.25rem;
    @media (min-width: 320px) {
    }
  }
`;

export const StyledProblemCard = ({
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
    <ProblemCard>
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
          <div
            style={{
              backgroundColor: palette.orange[6],
              padding: '0.325rem 0.5rem',
              borderRadius: '0.5rem',
              color: 'white',
              fontSize: 'small',
              visibility: solved ? 'visible' : 'hidden',
            }}
          >
            Solved
          </div>
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
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
          className="category"
        >
          {!!categories
            ? categories.map((item) => <CardBadge key={item}>{item}</CardBadge>)
            : null}
        </div>
      </div>
    </ProblemCard>
  );
};

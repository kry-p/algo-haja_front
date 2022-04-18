import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  @media (min-width: 320px) {
    width: 320px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 512px) {
    width: 100%;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 512px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledArticle = ({ title, contents, more }) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Article>
        <div
          style={{
            padding: '0.75rem',
            fontSize: 'larger',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Cards>
            {contents.map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
          </Cards>
        </div>
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              border: 'none',
              textDecoration: 'underline',
              background: 'rgba(0, 0, 0, 0)',
            }}
            onClick={() => navigate(more)}
          >
            더 보기
          </button>
        </div>
      </Article>
    </div>
  );
};

export default StyledArticle;

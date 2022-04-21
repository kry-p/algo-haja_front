import styled from 'styled-components';
import {
  codeHighlightColor,
  objectLevelFourColor,
} from '../../../styles/theme';

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  @media (min-width: 320px) {
    width: 300px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 512px) {
    width: 95%;
  }
`;

export const Cards = styled.div`
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

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProblemArticleBlock = styled(Article)`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
`;

export const ProblemArticleParagraphTitle = styled.div`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid ${objectLevelFourColor};
`;

export const Solution = styled.div`
  ${codeHighlightColor};
  padding: 1rem;
  font-family: D2Coding;
  border-radius: 8px;
  transition: 0s;

  overflow: scroll;
`;

import styled from 'styled-components';
import { codeHighlightColor, objectLevelFourColor } from '../theme';

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArticleBlock = styled.div`
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

export const ProblemArticleBlock = styled(ArticleBlock)`
  width: 80%;
  display: grid;
  gap: 1.2rem;
`;

export const ProblemArticleParagraphTitle = styled.div`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid ${objectLevelFourColor};
`;

export const ProblemArticleParagraphDescription = styled.div`
  display: grid;
  gap: 1rem;

  line-height: normal;

  .disclaimer .sub-title {
    font-family: MinSans-Medium;
    font-size: 1rem;
  }

  .content {
    font-family: MinSans-Thin;
  }

  .solution-code {
    ${codeHighlightColor};
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 8px;

    font-family: D2Coding;

    transition: 0s;
    overflow: scroll;
  }
`;

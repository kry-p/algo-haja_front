import styled from 'styled-components';
import { codeHighlightColor, objectLevelFourColor } from '../theme';

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableArticleWrapper = styled(ArticleWrapper)`
  flex-direction: column;
  margin: 0 2.5vw 0;

  @media (min-width: 512px) {
    margin: 0 5vw 0;
  }

  @media (min-width: 768px) {
    margin: 0 7.5vw 0;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;

  @media (min-width: 320px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 512px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ArticleTitle = styled.div`
  padding: 0.75rem;
  font-size: 1.5rem;
`;

export const DashboardArticleTitle = styled(ArticleTitle)`
  font-size: 1.3rem;
`;

export const ProblemArticleBlock = styled(ArticleBlock)`
  display: grid;
  gap: 1.2rem;
  padding-bottom: 2rem;
  width: 80%;
`;

export const ProblemArticleParagraphTitle = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid ${objectLevelFourColor};
  font-size: 1.2rem;
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

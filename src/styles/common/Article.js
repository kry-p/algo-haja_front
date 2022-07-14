/**
 * Article
 */
import styled from 'styled-components';
import { codeHighlightColor, objectLevelThreeColor } from '../theme';

/**
 * Wrapper
 */
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

/**
 * Title
 */
export const ArticleTitle = styled.div`
  padding: 0.75rem 0rem;
  font-size: 1.5rem;
`;

export const DashboardTitle = styled(ArticleTitle)`
  font-size: 1.3rem;
  padding-bottom: 2rem;
`;

export const ArticleParagraphTitle = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid ${objectLevelThreeColor};
  font-size: 1.2rem;
`;

/**
 * Description
 */
export const DashboardDescription = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArticleParagraphDescription = styled.div`
  display: grid;
  gap: 1rem;

  line-height: 1.5rem;

  .disclaimer .sub-title {
    font-family: Pretendard-Regular;
    font-size: 1rem;
  }

  .content {
    font-family: Pretendard-ExtraLight;
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

/**
 * Block
 */
export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;

  @media (min-width: 320px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const ProblemArticleBlock = styled(ArticleBlock)`
  display: grid;
  gap: 1.2rem;
  padding-bottom: 2rem;
  width: 80%;
`;

export const CardBlock = styled.div`
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

export const MoreButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

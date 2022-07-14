// React core
import React, { Fragment } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Component
import { Link } from '../common/Link';
// Style
import {
  ArticleWrapper,
  ArticleBlock,
  CardBlock,
  DashboardTitle,
  DashboardDescription,
  MoreButtonBlock,
} from '../../../styles/common/Article';

// 대시보드 (카드 뷰)
const DashboardArticle = ({ title, contents, more }) => {
  const navigate = useNavigate();
  return (
    <ArticleWrapper>
      <ArticleBlock>
        <DashboardTitle>{title}</DashboardTitle>
        <DashboardDescription>
          <CardBlock>
            {!!contents &&
              contents.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))}
          </CardBlock>
        </DashboardDescription>
        <MoreButtonBlock>
          <Link to={more}>더 보기</Link>
        </MoreButtonBlock>
      </ArticleBlock>
    </ArticleWrapper>
  );
};

export default DashboardArticle;

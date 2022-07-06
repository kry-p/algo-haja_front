import React, { Fragment } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Component
import { UnderlinedButton } from '../Button';
import {
  ArticleWrapper,
  ArticleBlock,
  MoreButtonBlock,
  CardBlock,
  DashboardTitle,
  DashboardDescription,
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
          <UnderlinedButton onClick={() => navigate(more)}>
            더 보기
          </UnderlinedButton>
        </MoreButtonBlock>
      </ArticleBlock>
    </ArticleWrapper>
  );
};

export default DashboardArticle;

/*
 * 문서 구성요소
 */
import React, { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import Highlight from 'react-highlight';
import { useNavigate } from 'react-router-dom';
// components
import { Link } from './Link';
import { RawButton, UnderlinedButton } from './Button';
import { SolvedBadge } from './Misc';
import {
  ArticleBlock,
  ProblemArticleBlock,
  Cards,
  ArticleWrapper,
  ProblemArticleParagraphTitle,
  ProblemArticleParagraphDescription,
  DashboardArticleTitle,
} from '../../styles/common/Article';
// icons
import { BsArrowLeft } from 'react-icons/bs';
// modules
import tierGenerator from '../../lib/solvedacTier';

// test
import styled from 'styled-components';

export const ProblemArticle = ({
  title,
  problemNo,
  solvedacTier,
  solved,
  trying,
  description,
  mySolutionList,
  groupSolutionList,
}) => {
  return (
    <ArticleWrapper>
      <ProblemArticleBlock>
        <div>
          <RawButton>
            <BsArrowLeft size={20} />
            <div style={{ paddingLeft: '1rem' }}>문제 목록으로 돌아가기</div>
          </RawButton>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '2rem' }}>{title}</div>
          <SolvedBadge solved={solved} trying={trying}>
            {solved ? 'Solved' : trying ? 'Trying' : 'Not tried'}
          </SolvedBadge>
        </div>
        <div>{`#${problemNo}`}</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SVG src={`/resources/tier/${solvedacTier}.svg`} width="24" />
          <div style={{ paddingLeft: '0.8rem', fontSize: '1.2rem' }}>
            {tierGenerator(solvedacTier, 'ko')}
          </div>
        </div>
        <ProblemArticleParagraphTitle>문제</ProblemArticleParagraphTitle>
        <ProblemArticleParagraphDescription>
          <div className="disclaimer">
            주의 : 이 내용은 BOJ 웹사이트의 텍스트만을 가져온 것이므로 정확하지
            않을 수 있습니다.
            <br />
            되도록{' '}
            <Link href={`https://acmicpc.net/problem/${problemNo}`}>원문</Link>
            을 참고해 주시기를 부탁드리며, 내용이 달라진 경우{' '}
            <Link href="#">수동 갱신</Link>을 해 주세요.
          </div>
          <div className="content">{description}</div>
        </ProblemArticleParagraphDescription>
        <ProblemArticleParagraphTitle>내 풀이</ProblemArticleParagraphTitle>
        <div>
          {!!mySolutionList
            ? mySolutionList.map((item, index) => {
                return (
                  <ProblemArticleParagraphDescription key={index}>
                    <div>{'풀이 ' + (index + 1)}</div>
                    <div className="solution-code">
                      <Highlight>{item}</Highlight>
                    </div>
                  </ProblemArticleParagraphDescription>
                );
              })
            : '풀이가 없습니다.'}
        </div>
        <ProblemArticleParagraphTitle>
          그룹 내 사용자의 풀이
        </ProblemArticleParagraphTitle>
        <div>
          {!!groupSolutionList
            ? groupSolutionList.map((item, index) => {
                return (
                  <ProblemArticleParagraphDescription key={index}>
                    <div>{'풀이 ' + (index + 1)}</div>
                    <div className="solution-code">
                      <Highlight>{item}</Highlight>
                    </div>
                  </ProblemArticleParagraphDescription>
                );
              })
            : '풀이가 없습니다.'}
        </div>
      </ProblemArticleBlock>
    </ArticleWrapper>
  );
};

export const DashboardArticle = ({ title, contents, more }) => {
  const navigate = useNavigate();
  return (
    <ArticleWrapper>
      <ArticleBlock>
        <DashboardArticleTitle>{title}</DashboardArticleTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Cards>
            {!!contents &&
              contents.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))}
          </Cards>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '1rem',
          }}
        >
          <UnderlinedButton onClick={() => navigate(more)}>
            더 보기
          </UnderlinedButton>
        </div>
      </ArticleBlock>
    </ArticleWrapper>
  );
};

/*
 * 문서 구성요소
 */
// React core
import React, { Fragment } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// React-highlight
import Highlight from 'react-highlight';
// Components
import { Link } from './Link';
import { HoverToUnderlineButton, UnderlinedButton } from './Button';
import { SolvedacRatingBadge, SolvedBadge } from './Misc';
import {
  ArticleBlock,
  ProblemArticleBlock,
  Cards,
  ArticleWrapper,
  ProblemArticleParagraphTitle,
  ProblemArticleParagraphDescription,
  DashboardArticleTitle,
} from '../../styles/common/Article';
// Icons
import { BsArrowLeft } from 'react-icons/bs';
// Modules
import { getSolvedacTierText } from '../../lib/solvedacTier';

// 문제 상세정보
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
          <HoverToUnderlineButton>
            <BsArrowLeft size={20} />
            <div style={{ paddingLeft: '1rem' }}>문제 목록으로 돌아가기</div>
          </HoverToUnderlineButton>
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
          <SolvedacRatingBadge rating={solvedacTier} />
          <div style={{ paddingLeft: '0.8rem', fontSize: '1.2rem' }}>
            {getSolvedacTierText(solvedacTier, 'ko')}
          </div>
        </div>
        <ProblemArticleParagraphTitle>문제</ProblemArticleParagraphTitle>
        <ProblemArticleParagraphDescription>
          {!!description ? (
            <>
              <div className="disclaimer">
                주의 : 아래 내용은 BOJ 웹사이트의 텍스트만을 가져온 것이므로
                정확하지 않을 수 있습니다.
                <br />
                되도록{' '}
                <Link href={`https://acmicpc.net/problem/${problemNo}`}>
                  원문
                </Link>
                을 참고해 주시기를 부탁드리며, 내용이 달라진 경우{' '}
                <Link href="#">수동 갱신</Link>을 해 주세요.
              </div>
              <div className="content">{description}</div>
            </>
          ) : (
            <>
              <div className="disclaimer">
                문제 정보가 없습니다. 문제를 최초로 확인한 경우 내용이 아직
                가져와지지 않아 표시되지 않을 수 있습니다.
                <br />
                내용이 계속 나오지 않을 경우 <Link href="#">수동 갱신</Link>을
                해 주세요.
              </div>
            </>
          )}
        </ProblemArticleParagraphDescription>
        <ProblemArticleParagraphTitle>내 풀이</ProblemArticleParagraphTitle>
        <div>
          {!!mySolutionList ? (
            mySolutionList.map((item, index) => {
              return (
                <ProblemArticleParagraphDescription key={index}>
                  <div>{'풀이 ' + (index + 1)}</div>
                  <div className="solution-code">
                    <Highlight>{item}</Highlight>
                  </div>
                </ProblemArticleParagraphDescription>
              );
            })
          ) : (
            <div>
              풀이가 없습니다. <Link href="#">여기</Link>를 눌러 풀이를 수동으로
              추가할 수 있습니다.
            </div>
          )}
        </div>
        <ProblemArticleParagraphTitle>
          그룹 내 다른 사용자의 풀이
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

// 대시보드 (카드 뷰)
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

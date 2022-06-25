/**
 * 문서 구성요소
 */
// React core
import React, { Fragment } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// React-highlight
import Highlight from 'react-highlight';
// Toast
import { toast } from 'react-toastify';
// Components
import { Link } from './Link';
import { HoverToUnderlineButton, UnderlinedButton } from './Button';
import { SolvedacRatingBadge, SolvedBadge } from './Misc';
import { CardBadge } from './Card';
import {
  ArticleWrapper,
  ArticleBlock,
  ProblemArticleBlock,
  MoreButtonBlock,
  CardBlock,
  DashboardArticleTitle,
  ProblemArticleParagraphTitle,
  DashboardArticleDescription,
  ProblemArticleParagraphDescription,
} from '../../styles/common/Article';
// Icons
import { BsArrowLeft } from 'react-icons/bs';
// Modules
import { getSolvedacTierText } from '../../lib/solvedacTier';
import { updateProblemInfo } from '../../lib/api/problem';

// 문제 상세정보
export const ProblemArticle = ({
  problemId,
  user,
  problem,
  loading,
  error,
}) => {
  const navigate = useNavigate();
  if (error) {
    if (error.response && error.response.status == 404) {
      return (
        <ArticleWrapper>
          <ProblemArticleBlock>
            <div>
              <HoverToUnderlineButton onClick={() => navigate(-1)}>
                <BsArrowLeft size={20} />
                <div>이전으로 돌아가기</div>
              </HoverToUnderlineButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '2rem' }}>404</div>
            </div>
            가져올 수 없는 문제입니다. 아래와 같은 문제가 있을 수 있습니다.
            <ul style={{ lineHeight: '1.5rem' }}>
              <li>• BOJ 문제 목록에 없는 문제를 잘못 요청했습니다.</li>
              <li>
                • 해당 문제가 가져와지지 않았습니다. 해당 문제가 BOJ에 있을 경우{' '}
                <Link
                  href="#"
                  onClick={async () => {
                    updateProblemInfo({ problemId });
                    toast.info(
                      '문제 정보를 요청했습니다. 반영에는 수 분이 걸릴 수 있습니다.'
                    );
                  }}
                >
                  가져오도록 요청
                </Link>
                할 수 있습니다.
              </li>
            </ul>
          </ProblemArticleBlock>
        </ArticleWrapper>
      );
    }
  }

  if (loading || !problem) {
    return (
      <ArticleWrapper>
        <ProblemArticleBlock>
          <div>
            <HoverToUnderlineButton onClick={() => navigate(-1)}>
              <BsArrowLeft size={20} />
              <div>이전으로 돌아가기</div>
            </HoverToUnderlineButton>
          </div>
          문제 목록을 가져오는 중입니다.
        </ProblemArticleBlock>
      </ArticleWrapper>
    );
  }

  return (
    <ArticleWrapper>
      <ProblemArticleBlock>
        <div>
          <HoverToUnderlineButton onClick={() => navigate(-1)}>
            <BsArrowLeft size={20} />
            <div>이전으로 돌아가기</div>
          </HoverToUnderlineButton>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '2rem' }}>{problem.problem.problemName}</div>
          {problem.username && (
            <SolvedBadge solved={problem.userSolved} trying={problem.userTried}>
              {problem.userSolved
                ? 'Solved'
                : problem.userTried
                ? 'Trying'
                : 'Not tried'}
            </SolvedBadge>
          )}
        </div>
        <div>{`#${problem.problem.problemId}`}</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SolvedacRatingBadge rating={problem.problem.solvedacTier} />
          <div style={{ paddingLeft: '0.8rem', fontSize: '1.2rem' }}>
            {getSolvedacTierText(problem.problem.solvedacTier, 'ko')}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          {!!problem.problem.tags.ko
            ? problem.problem.tags.ko.map((item) => (
                <CardBadge big key={item}>
                  {item}
                </CardBadge>
              ))
            : null}
        </div>
        <ProblemArticleParagraphTitle>문제</ProblemArticleParagraphTitle>
        <ProblemArticleParagraphDescription>
          <div className="disclaimer">
            주의 : 각 문제의 저작권은 BOJ에 귀속되어 있으므로 문제 내용을
            제공하지 않습니다.
            <br />
            <Link
              href={`https://acmicpc.net/problem/${problem.problem.problemId}`}
            >
              링크
            </Link>
            에서 문제 정보를 확인해 주세요.
          </div>
        </ProblemArticleParagraphDescription>
        <ProblemArticleParagraphTitle>내 풀이</ProblemArticleParagraphTitle>
        <div>
          {!!problem.solve ? (
            problem.solve.user && problem.solve.user.length != 0 ? (
              problem.solve.user.map((item, index) => {
                return (
                  <ProblemArticleParagraphDescription key={index}>
                    <div>{'풀이 ' + (index + 1)}</div>
                    <div className="solution-code">
                      <Highlight>{item.source}</Highlight>
                    </div>
                  </ProblemArticleParagraphDescription>
                );
              })
            ) : (
              <div>
                풀이가 없습니다. <Link href="#">여기</Link>를 눌러 추가해
                주세요.
              </div>
            )
          ) : (
            <div>
              풀이를 확인하려면 <Link href="/login">로그인</Link>하세요.
            </div>
          )}
        </div>
        <ProblemArticleParagraphTitle>
          그룹 내 다른 사용자의 풀이
        </ProblemArticleParagraphTitle>
        <ProblemArticleParagraphDescription>
          <div className="disclaimer">
            공사 중입니다. 그룹 기능이 추가되면 제공될 예정입니다.
          </div>
        </ProblemArticleParagraphDescription>
        {/* <div>
          {!!problem.solve ? (
            problem.solve.group && problem.solve.group.length != 0 ? (
              problem.solve.group.map((item) => {
                return (
                  <>
                    <div style={{ fontSize: 'large', paddingBottom: '1rem' }}>
                      {item.groupName} 그룹
                    </div>
                    {item.solve.length == 0 ? (
                      <ProblemArticleParagraphDescription>
                        그룹 내 다른 사용자의 풀이가 없습니다.
                      </ProblemArticleParagraphDescription>
                    ) : (
                      item.solve
                        .filter(
                          (solve) => solve.actualUsername != user.username
                        )
                        .map((solve, index) => {
                          return (
                            <ProblemArticleParagraphDescription key={index}>
                              <div>{solve.actualUsername}</div>
                              <div className="solution-code">
                                <Highlight>{solve.source}</Highlight>
                              </div>
                            </ProblemArticleParagraphDescription>
                          );
                        })
                    )}
                  </>
                );
              })
            ) : (
              <div>
                그룹 사용자의 풀이가 없습니다. 그룹에 올바르게 소속되어 있는지
                확인해 주세요.
              </div>
            )
          ) : (
            <div>
              풀이를 확인하려면 <Link href="/login">로그인</Link>하세요.
            </div>
          )}
        </div> */}
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
        <DashboardArticleDescription>
          <CardBlock>
            {!!contents &&
              contents.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))}
          </CardBlock>
        </DashboardArticleDescription>
        <MoreButtonBlock>
          <UnderlinedButton onClick={() => navigate(more)}>
            더 보기
          </UnderlinedButton>
        </MoreButtonBlock>
      </ArticleBlock>
    </ArticleWrapper>
  );
};

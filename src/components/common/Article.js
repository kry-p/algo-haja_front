/**
 * 문서 구성요소
 */
// React core
import React, { Fragment, useState } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// React-highlight
import Highlight from 'react-highlight';
// React-toastify
import { toast } from 'react-toastify';
// Component
import { Link } from './Link';
import { Button, HoverToUnderlineButton, UnderlinedButton } from './Button';
import {
  ArticleWrapper,
  ArticleBlock,
  ProblemArticleBlock,
  MoreButtonBlock,
  CardBlock,
  DashboardTitle,
  ArticleParagraphTitle,
  DashboardDescription,
  ArticleParagraphDescription,
} from '../../styles/common/Article';
// Icon
import { IoArrowBack } from '@react-icons/all-files/io5/IoArrowBack';
// Module
import { ProblemError404, ProblemTitle, ProblemDescription } from './Problem';
import { CodeInput } from './Input';
import { addSolve } from '../../lib/api/problem';

// 문제 상세정보
export const ProblemArticle = ({
  problemId,
  // user,
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
                <IoArrowBack size={20} />
                <div>이전으로 돌아가기</div>
              </HoverToUnderlineButton>
            </div>
            <ProblemError404 problemId={problemId} />
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
              <IoArrowBack size={20} />
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
            <IoArrowBack size={20} />
            <div>이전으로 돌아가기</div>
          </HoverToUnderlineButton>
        </div>
        <ProblemTitle problem={problem} />
        <ArticleParagraphTitle>문제</ArticleParagraphTitle>
        <ProblemDescription problemId={problem.problem.problemId} />
        <ArticleParagraphTitle>내 풀이</ArticleParagraphTitle>
        <div>
          {!!problem.solve ? (
            problem.solve.user && problem.solve.user.length != 0 ? (
              <>
                <div className="disclaimer" style={{ paddingBottom: '1rem' }}>
                  풀이를 추가하려면{' '}
                  <Link to={`/problem/submit/${problemId}`}>여기</Link>를
                  누르세요.
                </div>
                {problem.solve.user.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <ArticleParagraphDescription key={index}>
                        <div>{'풀이 ' + (index + 1)}</div>
                        <div className="solution-code">
                          <Highlight>{item.source}</Highlight>
                        </div>
                      </ArticleParagraphDescription>
                    </Fragment>
                  );
                })}
              </>
            ) : (
              <div className="disclaimer">
                풀이가 없습니다.{' '}
                <Link to={`/problem/submit/${problemId}`}>여기</Link>를 눌러
                추가해 주세요.
              </div>
            )
          ) : (
            <div>
              풀이를 확인하려면 <Link to="/login">로그인</Link>하세요.
            </div>
          )}
        </div>
        <ArticleParagraphTitle>
          그룹 내 다른 사용자의 풀이
        </ArticleParagraphTitle>
        <ArticleParagraphDescription>
          <div className="disclaimer">
            공사 중입니다. 그룹 기능이 추가되면 제공될 예정입니다.
          </div>
        </ArticleParagraphDescription>
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
                      <ArticleParagraphDescription>
                        그룹 내 다른 사용자의 풀이가 없습니다.
                      </ArticleParagraphDescription>
                    ) : (
                      item.solve
                        .filter(
                          (solve) => solve.actualUsername != user.username
                        )
                        .map((solve, index) => {
                          return (
                            <ArticleParagraphDescription key={index}>
                              <div>{solve.actualUsername}</div>
                              <div className="solution-code">
                                <Highlight>{solve.source}</Highlight>
                              </div>
                            </ArticleParagraphDescription>
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

export const ProblemSubmitArticle = ({ problem, loading, error }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(``);
  if (error) {
    if (error.response && error.response.status == 404) {
      return (
        <ArticleWrapper>
          <ProblemArticleBlock>
            <div>
              <HoverToUnderlineButton onClick={() => navigate(-1)}>
                <IoArrowBack size={20} />
                <div>이전으로 돌아가기</div>
              </HoverToUnderlineButton>
            </div>
            <ProblemError404 problemId={problemId} />
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
              <IoArrowBack size={20} />
              <div>이전으로 돌아가기</div>
            </HoverToUnderlineButton>
          </div>
          문제 정보를 가져오는 중입니다.
        </ProblemArticleBlock>
      </ArticleWrapper>
    );
  }

  return (
    <ArticleWrapper>
      <ProblemArticleBlock>
        <div>
          <HoverToUnderlineButton onClick={() => navigate(-1)}>
            <IoArrowBack size={20} />
            <div>이전으로 돌아가기</div>
          </HoverToUnderlineButton>
        </div>
        <ProblemTitle problem={problem} />
        <ArticleParagraphTitle>문제풀이 등록</ArticleParagraphTitle>
        <ArticleParagraphDescription>
          <div className="disclaimer">
            주의 : 알고하자는 BOJ 채점서버와 연계되지 않으므로 코드의 오류를
            검증할 수 없습니다.
            <br />
            BOJ에서 AC를 받은 뒤 등록을 권장합니다.
          </div>
          <CodeInput code={code} onChange={setCode} />
        </ArticleParagraphDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            accent
            onClick={async () => {
              if (code.length === 0) {
                toast.error('내용이 없습니다.');
                return;
              }

              try {
                await addSolve({
                  problemId: problem.problem.problemId,
                  source: code,
                });
                toast.info('풀이가 추가되었습니다.');
                navigate(-1);
              } catch (err) {
                if (err.request.status === 409)
                  toast.error(
                    '풀이를 추가할 수 없습니다. 동일한 풀이가 있습니다.'
                  );
                else
                  toast.error(
                    '풀이를 추가할 수 없습니다. 서버가 다운되었을 수 있습니다.'
                  );
              }
            }}
          >
            등록하기
          </Button>
        </div>
      </ProblemArticleBlock>
    </ArticleWrapper>
  );
};

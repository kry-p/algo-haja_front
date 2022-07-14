// React core
import React, { Fragment, useState } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// React-highlight
import Highlight from 'react-highlight';
// Component
import Spinner from '../common/Spinner';
import { Link } from '../common/Link';
import { HoverToUnderlineButton } from '../common/Button';
import {
  ArticleWrapper,
  ProblemArticleBlock,
  ArticleParagraphTitle,
  ArticleParagraphDescription,
} from '../../styles/common/Article';
// Icon
import { IoArrowBack } from '@react-icons/all-files/io5/IoArrowBack';
// Module
import {
  ProblemError404,
  ProblemTitle,
  ProblemDescription,
} from '../common/Problem';

// 문제 상세정보
export const Problem = ({
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
              <HoverToUnderlineButton
                text="이전으로 돌아가기"
                icon={<IoArrowBack size={20} />}
                onClick={() => navigate(-1)}
              />
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
            <HoverToUnderlineButton
              text="이전으로 돌아가기"
              icon={<IoArrowBack size={20} />}
              onClick={() => navigate(-1)}
            />
          </div>
          <Spinner />
        </ProblemArticleBlock>
      </ArticleWrapper>
    );
  }

  return (
    <ArticleWrapper>
      <ProblemArticleBlock>
        <div>
          <HoverToUnderlineButton
            text="이전으로 돌아가기"
            icon={<IoArrowBack size={20} />}
            onClick={() => navigate(-1)}
          />
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

export default Problem;

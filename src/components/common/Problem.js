/**
 * 문제 정보
 */
// React core
import React from 'react';
import styled from 'styled-components';
// React-toastify
import { toast } from 'react-toastify';
// Component
import { SolvedacRatingBadge, SolvedBadge } from './Misc';
import { CardBadge } from './Card';
import { Link, ExternalLink } from './Link';
// Style
import { ProblemArticleParagraphDescription } from '../../styles/common/Article';
// Library
import { updateProblemInfo } from '../../lib/api/problem';
import { getSolvedacTierText } from '../../lib/solvedacTier';

const ProblemTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProblemTitleBlockText = styled.div`
  font-size: 2rem;
`;

export const ProblemTitle = ({ problem }) => {
  return (
    <>
      <ProblemTitleBlock>
        <ProblemTitleBlockText>
          {problem.problem.problemName}
        </ProblemTitleBlockText>
        {problem.username && (
          <SolvedBadge solved={problem.userSolved} trying={problem.userTried}>
            {problem.userSolved
              ? 'Solved'
              : problem.userTried
              ? 'Trying'
              : 'Not tried'}
          </SolvedBadge>
        )}
      </ProblemTitleBlock>
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
    </>
  );
};

export const ProblemDescription = ({ problemId }) => {
  return (
    <ProblemArticleParagraphDescription>
      <div className="disclaimer">
        주의 : 각 문제의 저작권은 BOJ에 귀속되어 있으므로 문제 내용을 제공하지
        않습니다.
        <br />
        <ExternalLink href={`https://acmicpc.net/problem/${problemId}`}>
          링크
        </ExternalLink>
        에서 문제 정보를 확인해 주세요.
        <br />
        문제 정보가 올바르지 않은 것 같다면{' '}
        <Link
          to="#"
          onClick={async () => {
            try {
              await updateProblemInfo({ problemId });
              toast.info(
                '문제 정보 업데이트를 요청했습니다. 반영에는 수 분이 걸릴 수 있습니다.'
              );
            } catch (err) {
              toast.error(
                '문제 정보를 업데이트할 수 없습니다. 서버가 다운되었을 수 있습니다.'
              );
            }
          }}
        >
          업데이트
        </Link>
        를 요청할 수 있습니다.
      </div>
    </ProblemArticleParagraphDescription>
  );
};

export const ProblemError404 = ({ problemId }) => {
  return (
    <>
      <ProblemTitleBlock>
        <ProblemTitleBlockText>404</ProblemTitleBlockText>
      </ProblemTitleBlock>
      가져올 수 없는 문제입니다. 아래와 같은 문제가 있을 수 있습니다.
      <ul style={{ lineHeight: '1.5rem' }}>
        <li>• BOJ 문제 목록에 없는 문제를 잘못 요청했습니다.</li>
        <li>
          • 해당 문제가 가져와지지 않았습니다. 해당 문제가 BOJ에 있을 경우{' '}
          <Link
            to="#"
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
    </>
  );
};

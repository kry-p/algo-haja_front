// React core
import React from 'react';
// Style
import { Settings } from '../../../../styles/page/Mypage';
import { ArticleParagraphTitle } from '../../../../styles/common/Article';
// Component
import { ResultBadge, SolvedacRatingBadge } from '../../../common/Misc';
// Library
import { getSolvedacTierText } from '../../../../lib/solvedacTier';
// Icon
import { IoCheckmark } from '@react-icons/all-files/io5/IoCheckmark';
import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';

const Succeed = ({ bojId, isSucceed }) => {
  return (
    <>
      {bojId === '' ? (
        <div>해당없음</div>
      ) : (
        <ResultBadge success={isSucceed} failure={!isSucceed}>
          {isSucceed ? <IoCheckmark size={16} /> : <IoCloseOutline size={16} />}
        </ResultBadge>
      )}
    </>
  );
};

const PrimitiveInfo = ({ user }) => {
  return (
    <Settings>
      <div style={{ fontSize: 'xx-large' }}>{user.username}</div>
      <div>{`BOJ ID : ${
        user.userData.bojId !== '' ? user.userData.bojId : '없음'
      }`}</div>
      <ArticleParagraphTitle>solved.ac 레이팅</ArticleParagraphTitle>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <SolvedacRatingBadge rating={user.userData.solvedacRating} />
        <div style={{ paddingLeft: '0.8rem', fontSize: '1.2rem' }}>
          {getSolvedacTierText(user.userData.solvedacRating, 'ko')}
        </div>
      </div>
      <ArticleParagraphTitle>문제</ArticleParagraphTitle>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '8rem 4rem',
          gap: '1rem',
        }}
      >
        <div>해결한 문제</div>
        <div>{user.userData.solvedProblem.length}</div>
        <div>시도 중인 문제</div>
        <div>{user.userData.triedProblem.length}</div>
      </div>
      <ArticleParagraphTitle>최근 연동 결과</ArticleParagraphTitle>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '6rem 4rem',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div>BOJ</div>
        <div>
          <Succeed
            bojId={user.userData.bojId}
            isSucceed={user.latestRequestSucceed.boj}
          />
        </div>
        <div>solved.ac</div>
        <div>
          <Succeed
            bojId={user.userData.bojId}
            isSucceed={user.latestRequestSucceed.solvedac}
          />
        </div>
      </div>
      <div style={{ fontSize: '0.9rem', lineHeight: '1.2rem' }}>
        연동이 정상적으로 되지 않을 경우 아래와 같은 원인일 수 있습니다.
        <ul
          style={{
            lineHeight: '1.5rem',
            listStyleType: 'disc',
            padding: '1rem',
          }}
        >
          <li>BOJ ID가 올바르지 않습니다.</li>
          <li>BOJ에서 solved.ac와 연동하지 않았습니다.</li>
          <li>BOJ나 solved.ac가 다운되었습니다.</li>
          <li>연동 주기가 도래하지 않았습니다. 매 15분을 주기로 연동됩니다.</li>
        </ul>
        위 사항을 모두 확인한 이후에도 연동이 계속 실패한다면 운영진에게 문의
        바랍니다.
      </div>
    </Settings>
  );
};

export default PrimitiveInfo;

/**
 * 404 페이지
 * 라우팅 목록에 없는 모든 요청은 여기로 리디렉션
 */
// React core
import React from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Hook
import useWindow from '../lib/hooks/useWindow';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import { Button } from '../components/common/Button';
// Style
import {
  PageNotFound,
  PageTypoNotFound,
  PageDescriptionNotFound,
  MenuNotFound,
  PageStyleNotFound,
} from '../styles/page/NotFound';

const NotFoundPage = () => {
  const windowInfo = useWindow(); // window info hook
  const navigate = useNavigate(); // router hook
  return (
    <>
      <AppbarContainer fullPage title="알고하자" />
      <PageNotFound
        style={{
          height: `${windowInfo.height}px`,
        }}
      >
        <PageStyleNotFound>
          <PageTypoNotFound>몰?루</PageTypoNotFound>
          <PageDescriptionNotFound>
            요청하신 페이지를 찾을 수 없습니다.
          </PageDescriptionNotFound>
          <MenuNotFound>
            <Button accent onClick={() => navigate(-1)}>
              이전 페이지로 돌아가기
            </Button>
            <Button onClick={() => navigate('/')}>홈으로</Button>
          </MenuNotFound>
        </PageStyleNotFound>
      </PageNotFound>
    </>
  );
};

export default NotFoundPage;

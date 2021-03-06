/**
 * 사용 가이드 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
import {
  GuideWrapper,
  GuideParagraphMainTitle,
  GuideParagraphMainSubtitle,
  GuideParagraphTitle,
  GuideParagraphDescription,
  GuideParagraphUnorderedList,
} from '../styles/page/Guide';
// Constant
import { TITLE } from '../lib/constants';

const GuidePage = () => {
  return (
    <>
      <AppbarContainer title={TITLE} />
      <ContentArea>
        <SafeArea>
          <GuideWrapper>
            <GuideParagraphMainTitle>사용 가이드</GuideParagraphMainTitle>
            <GuideParagraphMainSubtitle>v1</GuideParagraphMainSubtitle>
            <GuideParagraphDescription>
              알고하자는 지금까지 푼 알고리즘 문제를 돌아보고 함께 학습할 수
              있는 공간을 지향합니다.
              <br />
              알고하자가 제공하는 서비스는 아래와 같습니다.
            </GuideParagraphDescription>
            <GuideParagraphUnorderedList>
              <li>내가 푼 문제 목록</li>
              <li>문제풀이 수동 등록</li>
              <li>Git 저장소 등록 (문제풀이 자동 반영)</li>
            </GuideParagraphUnorderedList>
            <GuideParagraphDescription>
              또, 준비 중인 서비스는 아래와 같습니다.
            </GuideParagraphDescription>
            <GuideParagraphUnorderedList>
              <li>스터디 그룹 기능</li>
              <li>문제풀이 수동 삭제 (Git 저장소는 불가)</li>
              <li>문제 목록 정렬 / 필터</li>
              <li>문제 별점</li>
              <li>문제 대시보드 (상황에 따른 문제 목록 제공)</li>
            </GuideParagraphUnorderedList>
            <GuideParagraphDescription>
              기능 추가와 관련된 제언은 jhjung.dev@gmail.com으로 받고 있으며,
              빠른 시일 내에 확인 후 피드백을 드리겠습니다.
            </GuideParagraphDescription>
            <GuideParagraphTitle>회원가입</GuideParagraphTitle>
            <GuideParagraphDescription>
              상단 버튼을 눌러 로그인 페이지로 들어간 뒤 회원가입을 하실 수
              있습니다.
              <br />
              회원으로 가입하시면 알고하자의 모든 서비스를 이용하실 수 있습니다.
            </GuideParagraphDescription>
            <GuideParagraphTitle>문제</GuideParagraphTitle>
            <GuideParagraphDescription>
              마이페이지의 정보 수정에서 BOJ ID를 등록하시면 사용자가 풀거나
              시도했던 문제를 확인하실 수 있습니다.
              <br />
              또, 개인 Git 저장소를 등록하시면 저장소에 등록된 풀이를 자동으로
              문제풀이 목록에 반영하며, 문제 상세 정보에서 바로 확인하실 수
              있습니다.
            </GuideParagraphDescription>
            <GuideParagraphDescription>
              Git 저장소에 저장된 각 문제풀이는 문제번호별로 디렉터리에 나누어
              저장되어 있어야 합니다.
              <br />
              예) /baekjoon/1000/main.cpp
            </GuideParagraphDescription>
            <GuideParagraphTitle>그룹</GuideParagraphTitle>
            <GuideParagraphDescription>
              그룹 기능은 현재 공사 중입니다. 서비스 준비가 완료되면 관련
              가이드가 추가될 예정입니다.
            </GuideParagraphDescription>
          </GuideWrapper>
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default GuidePage;

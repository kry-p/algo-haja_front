/**
 * 테스트용 페이지
 * 각종 컴포넌트를 만들고 의도한 대로 작동하는지 테스트하는 페이지입니다.
 *
 * SafeArea 안에 테스트하고자 하는 요소를 삽입하면 됩니다.
 */
// React core
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
// Constant
import { TITLE } from '../lib/constants';
import {
  objectLevelOneColor,
  objectLevelTwoColor,
  objectLevelThreeColor,
  subTextColor,
} from '../styles/theme';
import Input from '../styles/common/Input';
import { Button } from '../components/common/Button';

import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';

const ContentWrapper = styled.div`
  display: grid;
  gap: 1rem;

  @media (max-width: 511px) {
    grid-template-rows: 1fr auto;
  }

  @media (min-width: 512px) {
    align-items: start;
    grid-template-columns: 6rem auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: 16rem auto;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${objectLevelOneColor};
  border: 1px solid ${objectLevelThreeColor};
  border-radius: 1rem;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.left &&
    css`
      margin: 0rem 1rem;

      div:nth-child(2n) {
        background: ${objectLevelTwoColor};
      }

      div {
        &:hover {
          background: ${objectLevelThreeColor};
        }
      }

      @media (min-width: 512px) {
        margin: 0rem 0rem 1rem 1rem;
      }
    `}

  ${(props) =>
    props.right &&
    css`
      margin: 0rem 1rem;
      @media (min-width: 512px) {
        margin: 0rem 1rem 1rem 0rem;
      }
    `}
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  width: 100%;
`;

const Settings = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 2rem 0rem;
  width: calc(100% - 2rem);
`;

const SettingsItem = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: start;

  @media (min-width: 512px) {
    grid-template-columns: 6rem auto;
  }

  .title {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1rem;
  }
`;

const SettingsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-size: larger;
`;

const SettingsSubtitle = styled.div`
  padding: 0.5rem 0rem;
  font-size: 0.9rem;
  color: ${subTextColor};
`;

const SettingsDescription = styled.div`
  display: grid;
  grid-template-columns: auto 4rem;
  gap: 1rem;
  width: 100%;

  ${(props) =>
    props.xlarge &&
    css`
      width: 100%;
      grid-template-columns: auto;

      @media (min-width: 384px) {
        width: 320px;
      }
    `}

  ${(props) =>
    props.large &&
    css`
      width: 15rem;
      @media (min-width: 320px) {
        width: 16rem;
      }
    `}

  ${(props) =>
    props.medium &&
    css`
      width: 12.5rem;
      @media (min-width: 320px) {
        width: 14rem;
      }
    `}
      

    ${(props) =>
    props.small &&
    css`
      width: 10rem;
      @media (min-width: 320px) {
        width: 12rem;
      }
    `}
`;

const SubmitArea = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
`;

const PrimitiveInfoPage = () => (
  <Settings>
    <SettingsTitle>
      계정 기본 정보
      <SettingsSubtitle>
        메일 인증을 하거나 비밀번호를 변경할 수 있습니다.
      </SettingsSubtitle>
    </SettingsTitle>
    <SettingsItem>
      <div className="title">이메일</div>
      <SettingsDescription large>
        <Input />
        <Button accent>인증</Button>
      </SettingsDescription>
    </SettingsItem>
    <SettingsItem>
      <div className="title">비밀번호</div>
      <SettingsDescription medium>
        <Input type="password" />
      </SettingsDescription>
    </SettingsItem>
    <SettingsItem>
      <div className="title">비밀번호 확인</div>
      <SettingsDescription medium>
        <Input type="password" />
      </SettingsDescription>
    </SettingsItem>
    <SubmitArea>
      <Button accent>수정</Button>
    </SubmitArea>
  </Settings>
);

const BojPage = () => (
  <Settings>
    <SettingsTitle>
      BOJ 연동
      <SettingsSubtitle>
        BOJ 계정을 링크하실 수 있습니다. BOJ에서 연동되어 있을 경우
        solved.ac와는 자동으로 링크됩니다.
      </SettingsSubtitle>
    </SettingsTitle>
    <SettingsItem>
      <div className="title">BOJ ID</div>
      <SettingsDescription medium>
        <Input />
      </SettingsDescription>
    </SettingsItem>
    <SettingsItem>
      <div className="title">알고하자 PW</div>
      <SettingsDescription medium>
        <Input />
      </SettingsDescription>
    </SettingsItem>
    <SubmitArea>
      <Button accent>수정</Button>
    </SubmitArea>
  </Settings>
);

const PersonalGitPage = () => (
  <Settings>
    <SettingsTitle>
      개인 Git 저장소
      <SettingsSubtitle>
        문제풀이가 저장된 Git 저장소와 연동하실 수 있습니다.
      </SettingsSubtitle>
    </SettingsTitle>
    <SettingsItem>
      <div className="title">저장소 URL</div>
      <SettingsDescription xlarge>
        <Input />
      </SettingsDescription>
    </SettingsItem>
    <SettingsItem>
      <div className="title">디렉토리</div>
      <SettingsDescription xlarge>
        <Input />
      </SettingsDescription>
    </SettingsItem>
    <SettingsSubtitle>
      문제번호의 중복을 막기 위해 저지 사이트별로 분리한 경우 BOJ 문제의 풀이가
      저장된 경로를 입력합니다.
      <br />
      저장소 기준의 상대 경로로 입력하며, 비워 둘 경우 저장소 전체에서
      문제풀이를 찾습니다.
      <br />
      예) /baekjoon
    </SettingsSubtitle>
    <SettingsItem>
      <div className="title">알고하자 PW</div>
      <SettingsDescription medium>
        <Input />
      </SettingsDescription>
    </SettingsItem>
    <SubmitArea>
      <Button accent>수정</Button>
    </SubmitArea>
  </Settings>
);

const MenuItemContent = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  justify-items: center;
  align-items: center;
  width: 100%;

  @media (min-width: 512px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  .text {
    justify-self: start;
    @media (min-width: 512px) and (max-width: 767px) {
      display: none;
    }
  }
`;

const TestPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<PrimitiveInfoPage />, <BojPage />, <PersonalGitPage />];
  return (
    <>
      <AppbarContainer title={TITLE} />
      <ContentArea>
        <SafeArea>
          <div style={{ fontSize: 'xx-large', padding: '1rem 2rem' }}>
            계정 설정
          </div>
          <ContentWrapper>
            <MenuWrapper left>
              <MenuItem onClick={() => setCurrentPage(0)}>
                <MenuItemContent>
                  <AiOutlineUser size={24} />
                  <span className="text">기본 정보</span>
                </MenuItemContent>
              </MenuItem>
              <MenuItem onClick={() => setCurrentPage(1)}>
                <MenuItemContent>
                  <AiOutlineCheck size={24} />
                  <span className="text">BOJ 연동</span>
                </MenuItemContent>
              </MenuItem>
              <MenuItem onClick={() => setCurrentPage(2)}>
                <MenuItemContent>
                  <AiOutlineGithub size={24} />
                  <span className="text"> 개인 Git 저장소</span>
                </MenuItemContent>
              </MenuItem>
            </MenuWrapper>
            <MenuWrapper right>{pages[currentPage]}</MenuWrapper>
          </ContentWrapper>
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default TestPage;

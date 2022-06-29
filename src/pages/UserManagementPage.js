// React core
import React, { useState } from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import Footer from '../components/common/Footer';
import { Button } from '../components/common/Button';
// Style
import { ContentArea, SafeArea } from '../styles/common/Area';
import Input from '../styles/common/Input';
import {
  ContentWrapper,
  Settings,
  SettingsTitle,
  SettingsSubtitle,
  SettingsItem,
  SettingsDescription,
  MenuWrapper,
  MenuItem,
  MenuItemContent,
  SubmitArea,
} from '../styles/page/Settings';
// Constant
import { TITLE } from '../lib/constants';
// Icon
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';

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

const UserManagementPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<PrimitiveInfoPage />, <BojPage />, <PersonalGitPage />];
  const menus = [
    { text: '기본 정보', icon: <AiOutlineUser size={24} /> },
    { text: 'BOJ 연동', icon: <AiOutlineCheck size={24} /> },
    { text: '개인 Git 저장소', icon: <AiOutlineGithub size={24} /> },
  ];
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
              {menus.map((menu, index) => (
                <MenuItem
                  key={index}
                  selected={currentPage === index}
                  onClick={() => setCurrentPage(index)}
                >
                  <MenuItemContent>
                    {menu.icon}
                    <span className="text">{menu.text}</span>
                  </MenuItemContent>
                </MenuItem>
              ))}

              {/* <MenuItem onClick={() => setCurrentPage(0)}>
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
              </MenuItem> */}
            </MenuWrapper>
            <MenuWrapper right>{pages[currentPage]}</MenuWrapper>
          </ContentWrapper>
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default UserManagementPage;

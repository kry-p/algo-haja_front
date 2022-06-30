// React core
import React, { useState } from 'react';
// Style
import {
  ContentWrapper,
  MenuWrapper,
  MenuItem,
  MenuItemContent,
} from '../../styles/page/Settings';
// Subpage
import PrimitiveInfo from './page/PrimitiveInfo';
import Boj from './page/Boj';
import PersonalGit from './page/PersonalGit';
// Icon
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';

const Modify = ({ user, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const menus = [
    { text: '기본 정보', icon: <AiOutlineUser size={24} /> },
    { text: 'BOJ 연동', icon: <AiOutlineCheck size={24} /> },
    { text: '개인 Git 저장소', icon: <AiOutlineGithub size={24} /> },
  ];

  if (error) {
    if (error.response && error.response.status == 404) {
      return <div>오류 발생!</div>;
    }
  }

  if (loading || !user) {
    return <div>로딩 중</div>;
  }

  const pages = [
    <PrimitiveInfo user={user} />,
    <Boj user={user} />,
    <PersonalGit user={user} />,
  ];

  return (
    <>
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
        </MenuWrapper>
        <MenuWrapper right>{pages[currentPage]}</MenuWrapper>
      </ContentWrapper>
    </>
  );
};
export default Modify;

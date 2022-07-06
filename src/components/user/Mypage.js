// React core
import React, { useState } from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// Component
import Spinner from '../common/Spinner';
// Style
import {
  ContentWrapper,
  MenuWrapper,
  MenuItem,
  MenuItemContent,
} from '../../styles/page/Mypage';
// Subpage
import Group from './page/view/Group';
import PrimitiveInfo from './page/view/PrimitiveInfo';
// Icon
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { IoPeopleOutline } from '@react-icons/all-files/io5/IoPeopleOutline';
import { IoPencilOutline } from '@react-icons/all-files/io5/IoPencilOutline';

const Mypage = ({ user, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const menus = [
    { text: '기본 정보', icon: <IoPersonOutline size={24} /> },
    { text: '소속 그룹', icon: <IoPeopleOutline size={24} /> },
  ];

  if (error) {
    if (error.response && error.response.status == 404) {
      return <div>오류 발생!</div>;
    }
  }

  if (loading || !user) {
    return (
      <>
        <div style={{ fontSize: 'xx-large', padding: '1rem 2rem' }}>
          내 정보
        </div>
        <Spinner />
      </>
    );
  }

  const pages = [<PrimitiveInfo user={user} />, <Group user={user} />];

  return (
    <>
      <div style={{ fontSize: 'xx-large', padding: '1rem 2rem' }}>내 정보</div>
      <ContentWrapper>
        <div>
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
          <MenuWrapper left style={{ marginTop: '1rem' }}>
            <MenuItem onClick={() => navigate('/mypage/modify')}>
              <MenuItemContent>
                <IoPencilOutline size={24} />
                <span className="text">정보 수정</span>
              </MenuItemContent>
            </MenuItem>
          </MenuWrapper>
        </div>

        <MenuWrapper right>{pages[currentPage]}</MenuWrapper>
      </ContentWrapper>
    </>
  );
};
export default Mypage;

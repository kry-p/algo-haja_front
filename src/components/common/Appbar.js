/**
 * 상단 앱바
 */
// React core
import React, { useState } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Hook
import useScroll from '../../lib/hooks/useScroll';
// Component
import { Button, LogoButton, Burger, IconButton } from './Button';
// Style
import {
  DRAWER_WIDTH,
  HeaderBlock,
  AppbarBlock,
  Drawer,
  Spacer,
  MenuDesktop,
  MenuItemDesktop,
  MenuMobile,
  MenuItemMobile,
} from '../../styles/common/Appbar';
// Icon
import { IoMoonOutline } from '@react-icons/all-files/io5/IoMoonOutline';
import { IoMoon } from '@react-icons/all-files/io5/IoMoon';
// Constant
import { MENU } from '../../lib/constants';

const Appbar = ({ title, fullPage, user, onLogout, onToggleDarkmode }) => {
  // Hooks
  const navigate = useNavigate();
  const scroll = useScroll();
  // State
  const [drawerXPosition, setDrawerXPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const darkmode = useSelector((state) => state.option.darkmode);

  const toggleOpen = () => {
    setOpen(!open);
    if (open) setDrawerXPosition(0);
    else setDrawerXPosition(-DRAWER_WIDTH);
  };

  return (
    <>
      <HeaderBlock>
        <AppbarBlock shadowEnabled={scroll > 0}>
          <div className="left">
            <LogoButton title={title} onClick={() => navigate('/')} />
          </div>
          <div className="right">
            <MenuDesktop className="menu-desktop">
              {MENU.map((item) => (
                <MenuItemDesktop
                  className="item"
                  onClick={() => navigate(item[1])}
                  key={item}
                >
                  {item[0] === 'MY' ? (user ? user.username : 'MY') : item[0]}
                </MenuItemDesktop>
              ))}
              {user ? (
                <Button
                  accent
                  className="item"
                  onClick={() => onLogout()}
                  text="로그아웃"
                />
              ) : (
                <Button
                  accent
                  className="item"
                  onClick={() => navigate('/login')}
                  text="로그인"
                />
              )}
              <IconButton onClick={onToggleDarkmode}>
                {darkmode ? <IoMoonOutline size={16} /> : <IoMoon size={16} />}
              </IconButton>
            </MenuDesktop>
            <Burger className="menu-mobile" open={open} setOpen={toggleOpen} />
            <Drawer
              style={{
                transform: `translatex(${drawerXPosition}px)`,
              }}
            >
              <MenuMobile>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '80%',
                    height: '4.5rem',
                  }}
                >
                  <IconButton onClick={onToggleDarkmode}>
                    {darkmode ? (
                      <IoMoonOutline size={16} />
                    ) : (
                      <IoMoon size={16} />
                    )}
                  </IconButton>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',
                    paddingBottom: '1rem',
                  }}
                >
                  <div>{user ? user.username : '로그인하세요'}</div>
                  {user ? (
                    <Button accent className="item" text="로그아웃" />
                  ) : (
                    <Button
                      accent
                      className="item"
                      onClick={() => navigate('/login')}
                      text="로그인"
                    />
                  )}
                </div>
                {MENU.map((item) => (
                  <MenuItemMobile
                    className="item"
                    onClick={() => navigate(item[1])}
                    key={item}
                  >
                    <div>{item[0]}</div>
                    <div className="description">{item[2]}</div>
                  </MenuItemMobile>
                ))}
              </MenuMobile>
            </Drawer>
          </div>
        </AppbarBlock>
      </HeaderBlock>
      {!fullPage && <Spacer />}
    </>
  );
};

export default Appbar;

/*
 * 상단 앱 바
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// hooks
import useScroll from '../../lib/hooks/useScroll';
// components
import { Button, LogoButton, Burger, IconButton } from './Button';
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
import AuthTemplate from '../auth/AuthTemplate';
import AuthForm from '../auth/AuthForm';
import Modal from './Modal';
// icons
import { MdOutlineDarkMode } from 'react-icons/md';
// redux actions
import { toggleDarkmode } from '../../modules/option';

const mainRouteData = [
  ['문제', '#', ''],
  ['그룹', '#'],
  ['MY', '#'],
];

const Appbar = ({ title, fullPage }) => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scroll = useScroll();

  // state
  const [modalEnabled, setModalEnabled] = useState(false);
  const [drawerXPosition, setDrawerXPosition] = useState(0);
  const [open, setOpen] = useState(false);
  // state (Redux)
  const option = useSelector((state) => state.option);

  // state actions
  const toggleMenuOpen = () => {
    if (open) setDrawerXPosition(0);
    else setDrawerXPosition(-DRAWER_WIDTH);
  };
  const toggleOpen = () => {
    setOpen(!open);
    toggleMenuOpen();
  };

  return (
    <>
      <HeaderBlock>
        <AppbarBlock shadowEnabled={scroll > 0}>
          <div className="left">
            <LogoButton title={title} />
          </div>
          <div className="right">
            <MenuDesktop className="menu-desktop">
              {mainRouteData.map((item) => (
                <MenuItemDesktop
                  className="item"
                  onClick={() => navigate(item[1])}
                  key={item}
                >
                  {item[0]}
                </MenuItemDesktop>
              ))}
              <Button
                accent
                className="item"
                onClick={() => setModalEnabled(!modalEnabled)}
              >
                로그인
              </Button>
              <IconButton onClick={() => dispatch(toggleDarkmode())}>
                <MdOutlineDarkMode size={18} />
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
                  <IconButton onClick={() => dispatch(toggleDarkmode())}>
                    <MdOutlineDarkMode size={18} />
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
                  <div>로그인하세요</div>
                  <Button accent onClick={() => setModalEnabled(!modalEnabled)}>
                    로그인
                  </Button>
                </div>
                {mainRouteData.map((item) => (
                  <MenuItemMobile
                    className="item"
                    onClick={() => navigate(item[1])}
                    key={item}
                  >
                    <div>{item[0]}</div>
                    <div className="description">메뉴 1 상세정보</div>
                  </MenuItemMobile>
                ))}
              </MenuMobile>
            </Drawer>
          </div>
        </AppbarBlock>
      </HeaderBlock>
      {modalEnabled && (
        <Modal onClose={() => setModalEnabled(false)}>
          <AuthTemplate>
            <AuthForm type={option.currentAuth} />
          </AuthTemplate>
        </Modal>
      )}
      {!fullPage && <Spacer />}
    </>
  );
};

export default Appbar;

/*
 * Appbar
 */
import React, { useState } from 'react';

import { Button, LogoButton, Burger, IconButton } from './Button';
import useScroll from '../../lib/hooks/useScroll';

import { MdOutlineDarkMode } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { toggleDarkmode } from '../../modules/option';

import {
  DRAWER_WIDTH,
  HeaderBlock,
  AppBar,
  Drawer,
  Spacer,
  MenuDesktop,
  MenuItemDesktop,
  MenuMobile,
  MenuItemMobile,
} from '../styles/common/Appbar';

const mainRouteData = [
  ['문제', '#'],
  ['그룹', '#'],
  ['MY', '#'],
];

const Appbar = ({ title, fullPage }) => {
  const dispatch = useDispatch();
  const [xPosition, setXPosition] = useState(0);
  const scroll = useScroll();
  const toggleMenuOpen = () => {
    if (open) setXPosition(0);
    else setXPosition(-DRAWER_WIDTH);
  };
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    toggleMenuOpen();
  };

  return (
    <>
      <HeaderBlock>
        <AppBar shadowEnabled={scroll > 0}>
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
              <Button accent className="item">
                로그인
              </Button>
              <IconButton onClick={() => dispatch(toggleDarkmode())}>
                <MdOutlineDarkMode size={18} style={{ paddingTop: '0.2rem' }} />
              </IconButton>
            </MenuDesktop>
            <Burger className="menu-mobile" open={open} setOpen={toggleOpen} />
            <Drawer
              style={{
                transform: `translatex(${xPosition}px)`,
              }}
            >
              <MenuMobile>
                <div
                  style={{
                    height: '4.5rem',
                    display: 'flex',
                    width: '80%',
                    alignItems: 'center',
                  }}
                >
                  <IconButton onClick={() => dispatch(toggleDarkmode())}>
                    <MdOutlineDarkMode
                      size={18}
                      style={{ paddingTop: '0.2rem' }}
                    />
                  </IconButton>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '80%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '1rem',
                  }}
                >
                  <div>로그인하세요</div>
                  <Button accent>로그인</Button>
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
        </AppBar>
      </HeaderBlock>
      {fullPage ? null : <Spacer />}
    </>
  );
};

export default Appbar;

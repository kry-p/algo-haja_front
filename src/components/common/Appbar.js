/*
 * Appbar
 * note: menu button does not implemented
 */
import React, { useState } from 'react';

import { LogoButton, Burger } from './Button';

import {
  DRAWER_WIDTH,
  HeaderBlock,
  AppBar,
  Drawer,
  Menu,
  MenuItem,
  Spacer,
} from '../styles/common/Appbar';

const mainRouteData = [];

const Appbar = ({ title, type, fullPage }) => {
  const [xPosition, setXPosition] = useState(0);
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
        <AppBar>
          <div className="left">
            {type === 'management' ? (
              <LogoButton title={title} cali={false} />
            ) : (
              <LogoButton title={title} cali={true} />
            )}
          </div>
          <div className="right">
            <Burger open={open} setOpen={toggleOpen} />
            <Drawer
              style={{
                transform: `translatex(${xPosition}px)`,
              }}
            >
              <Menu>
                {type === 'management'
                  ? managementRouteData.map((item) => {
                      return <MenuItem key={item} item></MenuItem>;
                    })
                  : mainRouteData.map((item) => {
                      return <MenuItem key={item} item></MenuItem>;
                    })}
              </Menu>
            </Drawer>
          </div>
        </AppBar>
      </HeaderBlock>
      {fullPage ? null : <Spacer />}
    </>
  );
};

export default Appbar;

/*
 * 앱 바 컨테이너
 * Disclaimer: Container includes Redux states.
 */
// React core
import React from 'react';
// Component
import Appbar from '../components/common/Appbar';
// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkmode } from '../modules/option';
import { logout } from '../modules/user';

const AppbarContainer = ({ title, fullPage }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onLogout = () => {
    dispatch(logout());
  };
  const onToggleDarkmode = () => {
    dispatch(toggleDarkmode());
  };
  return (
    <Appbar
      title={title}
      fullPage={fullPage}
      onToggleDarkmode={onToggleDarkmode}
      user={user}
      onLogout={onLogout}
    />
  );
};

export default AppbarContainer;

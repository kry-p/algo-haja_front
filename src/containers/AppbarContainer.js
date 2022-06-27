/**
 * 앱 바 컨테이너
 */
// React core
import React from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// React Redux
import { useDispatch, useSelector } from 'react-redux';
// React-toastify
import { toast } from 'react-toastify';
// Component
import Appbar from '../components/common/Appbar';
// Reducer
import { toggleDarkmode } from '../modules/option';
import { logout } from '../modules/user';

const AppbarContainer = ({ title, fullPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.info('로그아웃되었습니다.');
  };
  const onToggleDarkmode = () => {
    dispatch(toggleDarkmode());
  };
  return (
    <>
      <Appbar
        title={title}
        fullPage={fullPage}
        onToggleDarkmode={onToggleDarkmode}
        user={user}
        onLogout={onLogout}
      />
    </>
  );
};

export default AppbarContainer;

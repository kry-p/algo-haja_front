import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Mypage from '../components/user/Mypage';
import { toast } from 'react-toastify';
import { readUser } from '../modules/user';

const MypageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userdata, error, loading } = useSelector(({ user, loading }) => ({
    userdata: user.userData,
    error: user.error,
    loading: loading['user/READ_USERDATA'],
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.error('먼저 로그인해 주세요.');
    }
    dispatch(readUser());

    return () => {};
  }, [user, dispatch]);

  return <Mypage user={userdata} error={error} loading={loading} />;
};

export default MypageContainer;

/**
 * 문제 목록 컨테이너
 */
// React core
import React, { useEffect } from 'react';
// React router
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// React-toastify
import { toast } from 'react-toastify';
// Component
import { ProblemTable } from '../components/common/Table';
// Reducer
import { readUserList, unloadList } from '../modules/problems';
// Query String
import qs from 'qs';

const ProblemTableContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();
  const { page } = qs.parse(location.search, { ignoreQueryPrefix: true });

  const { problems, error, loading } = useSelector(({ problems, loading }) => ({
    problems: problems.list,
    error: problems.error,
    loading: loading['problems/READ_LIST'],
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const getType = (type) => {
    const types = new Map([['user', '사용자가 풀거나 시도한 문제']]);
    const typeText = types.get(type);
    return typeText ? typeText : types.get('user');
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.error('문제 정보를 확인하려면 로그인해 주세요.');
    }
    if (type === 'user') {
      dispatch(readUserList());
    } else {
      toast.error('잘못된 요청입니다. 사용자가 푼 문제를 표시합니다.');
      dispatch(readUserList());
    }

    return () => {
      dispatch(unloadList());
    };
  }, [user, dispatch]);

  return (
    <ProblemTable
      title={getType(type)}
      data={problems}
      loading={loading}
      error={error}
      location={location.pathname}
      currentPage={page ? page : 1}
    />
  );
};

export default ProblemTableContainer;

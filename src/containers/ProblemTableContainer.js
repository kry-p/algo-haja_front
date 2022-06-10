import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProblemTable } from '../components/common/Table';
import { readUserList, unloadList } from '../modules/problems';
import { toast } from 'react-toastify';

const ProblemTableContainer = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  }, [dispatch]);

  return (
    <ProblemTable
      title={getType(type)}
      data={problems}
      loading={loading}
      error={error}
    />
  );
};

export default ProblemTableContainer;

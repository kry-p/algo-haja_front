/**
 * 문제풀이 등록 컨테이너
 */
// React core
import React, { useEffect } from 'react';
// React router
import { useParams, useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React-toastify
import { toast } from 'react-toastify';
// Component
import ProblemSubmit from '../components/article/ProblemSubmit';
// Reducer
import { readProblem, unloadProblem } from '../modules/problem';

const ProblemSolveSubmitContainer = () => {
  const { problemId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { problem, error, loading } = useSelector(({ problem, loading }) => ({
    problem: problem.problem,
    error: problem.error,
    loading: loading['problem/READ_PROBLEM'],
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.error('문제 풀이를 등록하려면 로그인해 주세요.');
    }
    dispatch(readProblem(problemId));
    return () => {
      dispatch(unloadProblem());
    };
  }, [dispatch, problemId]);

  return <ProblemSubmit problem={problem} loading={loading} error={error} />;
};

export default ProblemSolveSubmitContainer;

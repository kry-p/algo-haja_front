import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProblemArticle } from '../components/common/Article';
import { readProblem, unloadProblem } from '../modules/problem';
import { toast } from 'react-toastify';

const ProblemArticleContainer = () => {
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
      toast.error('문제 정보를 확인하려면 로그인해 주세요.');
    }
    dispatch(readProblem(problemId));
    return () => {
      dispatch(unloadProblem());
    };
  }, [dispatch, problemId]);
  return (
    <ProblemArticle
      problemId={problemId}
      user={user}
      problem={problem}
      loading={loading}
      error={error}
    />
  );
};

export default ProblemArticleContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProblemArticle } from '../components/common/Article';
import { readProblem, unloadProblem } from '../modules/problem';

const ProblemArticleContainer = () => {
  const { problemId } = useParams();
  const dispatch = useDispatch();
  const { problem, error, loading } = useSelector(({ problem, loading }) => ({
    problem: problem.problem,
    error: problem.error,
    loading: loading['problem/READ_PROBLEM'],
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  useEffect(() => {
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

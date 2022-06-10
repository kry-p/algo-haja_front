import React, { useEffect } from 'react';
import { DashboardArticle } from '../components/common/Article';
import { useSelector, useDispatch } from 'react-redux';

const ProblemDashboardContainer = ({ type }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  return <DashboardArticle />;
};

export default ProblemDashboardContainer;

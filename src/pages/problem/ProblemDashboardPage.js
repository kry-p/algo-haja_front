/**
 * 문제 대시보드 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
import ProblemDashboardContainer from '../../containers/ProblemDashboardContainer';
// Component
import Footer from '../../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../../styles/common/Area';

const ProblemDashboardPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemDashboardContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemDashboardPage;

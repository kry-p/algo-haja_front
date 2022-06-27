/**
 * 문제풀이 등록 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
// Component
import Footer from '../../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../../styles/common/Area';
import ProblemSolveSubmitContainer from '../../containers/ProblemSolveSubmitContainer';

const ProblemSolveSubmitPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemSolveSubmitContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemSolveSubmitPage;

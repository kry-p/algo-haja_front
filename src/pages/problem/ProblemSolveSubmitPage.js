/**
 * 문제풀이 등록 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
import ProblemSolveSubmitContainer from '../../containers/ProblemSolveSubmitContainer';
// Component
import Footer from '../../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../../styles/common/Area';
// Constant
import { TITLE } from '../../lib/constants';

const ProblemSolveSubmitPage = () => {
  return (
    <>
      <AppbarContainer title={TITLE} />
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

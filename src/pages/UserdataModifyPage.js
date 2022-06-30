/**
 * 사용자 정보 수정 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
import UserdataModifyContainer from '../containers/UserdataModifyContainer';
// Constant
import { TITLE } from '../lib/constants';

const ProblemSolveSubmitPage = () => {
  return (
    <>
      <AppbarContainer title={TITLE} />
      <ContentArea>
        <SafeArea>
          <UserdataModifyContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemSolveSubmitPage;

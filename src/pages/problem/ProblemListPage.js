/**
 * 문제 상세정보 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
import ProblemTableContainer from '../../containers/ProblemTableContainer';
// Component
import Footer from '../../components/common/Footer';
// Style
import { ContentArea, SafeArea } from '../../styles/common/Area';

const ProblemListPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemTableContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemListPage;

/**
 * 문제 상세정보 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
import ProblemArticleContainer from '../../containers/ProblemArticleContainer';
// Component
import Footer from '../../components/common/Footer';
// Style
import { ContentArea, SafeArea } from '../../styles/common/Area';

const ProblemDescriptionPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemArticleContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemDescriptionPage;

/*
 * 문제 상세정보 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
// Components
import Footer from '../../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../../styles/common/Area';
import ProblemArticleContainer from '../../containers/ProblemArticleContainer';

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

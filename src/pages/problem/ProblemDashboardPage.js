/*
 * 문제 대시보드 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../../containers/AppbarContainer';
// Components
import Footer from '../../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../../styles/common/Area';
import ProblemDashboardContainer from '../../containers/ProblemDashboardContainer';

const ProblemDashboardPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemDashboardContainer />
          {/* <DashboardArticle
            title="테스트"
            contents={[
              <ProblemCard
                title="제목"
                solved={true}
                rating={3}
                tags={['수학', 'asdf', 'adfsfads', 'asdffds']}
              />,
              <ProblemCard
                title="제목"
                solved={true}
                rating={3}
                tags={['수학', 'asdf', 'adfsfads', 'asdffds']}
              />,
              <ProblemCard
                title="제목"
                solved={true}
                rating={3}
                tags={['수학', 'asdf', 'adfsfads', 'asdffds']}
              />,
              <ProblemCard
                title="제목"
                solved={true}
                rating={3}
                tags={['수학', 'asdf', 'adfsfads', 'asdffds']}
              />,
            ]}
          /> */}
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default ProblemDashboardPage;

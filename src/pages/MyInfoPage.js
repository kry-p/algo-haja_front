/**
 * 사용자 정보 수정 페이지
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
import MypageContainer from '../containers/MypageContainer';
// Component
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
// Constant
import { TITLE } from '../lib/constants';

const MyInfoPage = () => {
  return (
    <>
      <AppbarContainer title={TITLE} />
      <ContentArea>
        <SafeArea>
          <MypageContainer />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default MyInfoPage;

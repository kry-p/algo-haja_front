/**
 * 테스트용 페이지
 * 각종 컴포넌트를 만들고 의도한 대로 작동하는지 테스트하는 페이지입니다.
 *
 * SafeArea 안에 테스트하고자 하는 요소를 삽입하면 됩니다.
 */
// React core
import React, { useState } from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';

const TestPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea />
      </ContentArea>
      <Footer />
    </>
  );
};
export default TestPage;

import React from 'react';
import Appbar from '../components/common/Appbar';

import { ContentArea, SafeArea } from '../styles/common/Area';

const MainPage = () => {
  return (
    <>
      <Appbar title="알고하자" />
      <ContentArea>
        <SafeArea></SafeArea>
      </ContentArea>
    </>
  );
};
export default MainPage;

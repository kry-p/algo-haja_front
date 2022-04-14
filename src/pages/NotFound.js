import React, { useState, useEffect } from 'react';

import useWindow from '../lib/hooks/useWindow';

import { Button } from '../components/common/Button';
import {
  PageNotFound,
  PageTypoNotFound,
  PageDescriptionNotFound,
  MenuNotFound,
  PageStyleNotFound,
} from '../components/styles/page/NotFound';
import Appbar from '../components/common/Appbar';

const NotFound = () => {
  const windowInfo = useWindow();
  const [height, setHeight] = useState(windowInfo.height);

  // For Server-side Rendering
  useEffect(() => {
    setHeight(windowInfo.height);
  }, [windowInfo]);

  return (
    <>
      <Appbar cali fullPage title="알고하자" />
      <PageNotFound
        style={{
          height: `${height}px`,
        }}
      >
        <PageStyleNotFound>
          <PageTypoNotFound>몰?루</PageTypoNotFound>
          <PageDescriptionNotFound>
            요청하신 페이지를 찾을 수 없습니다.
          </PageDescriptionNotFound>
          <MenuNotFound>
            <Button accent onClick={() => {}}>
              이전 페이지로 돌아가기
            </Button>
            <Button onClick={() => {}}>홈으로</Button>
          </MenuNotFound>
        </PageStyleNotFound>
      </PageNotFound>
    </>
  );
};
export default NotFound;

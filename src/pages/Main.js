import React from 'react';
import Appbar from '../components/common/Appbar';

import { useDispatch } from 'react-redux';
import { toggleDarkmode } from '../modules/option';

const Main = () => {
  const dispatch = useDispatch();
  const onClickToggleDarkmode = () => dispatch(toggleDarkmode());
  return (
    <>
      <Appbar cali title="알고하자" />
      <button onClick={onClickToggleDarkmode}>다크모드 테스트 버튼</button>
    </>
  );
};
export default Main;

// React core
import React from 'react';
// Style
import { SpinnerWrapper } from '../../styles/common/Spinner';
// Redux
import { useSelector } from 'react-redux';
// Spinner
import BarLoader from 'react-spinners/BarLoader';
import palette from '../../lib/palette';

const Spinner = () => {
  const darkmode = useSelector((state) => state.option.darkmode);
  return (
    <SpinnerWrapper>
      <BarLoader
        color={darkmode ? `${palette.gray[2]}` : `${palette.gray[8]}`}
      />
    </SpinnerWrapper>
  );
};

export default Spinner;

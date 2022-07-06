// React core
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Spinner
import BarLoader from 'react-spinners/BarLoader';
import palette from '../../lib/palette';

const Spinner = () => {
  const darkmode = useSelector((state) => state.option.darkmode);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8rem',
      }}
    >
      <BarLoader
        color={darkmode ? `${palette.gray[2]}` : `${palette.gray[8]}`}
      />
    </div>
  );
};

export default Spinner;

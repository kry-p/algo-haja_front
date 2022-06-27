/**
 * 토스트
 */
// React core
import React from 'react';
import styled from 'styled-components';
// React router
import { useSelector } from 'react-redux';
// Container
import { ToastContainer } from 'react-toastify';
// CSS
import 'react-toastify/dist/ReactToastify.css';

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: MinSans-Medium;
    line-height: 1.5rem;
  }
`;

const StyledToastContainer = () => {
  const darkmode = useSelector((state) => state.option.darkmode);
  return (
    <StyledContainer theme={darkmode ? 'dark' : 'light'} autoClose={2000} />
  );
};

export default StyledToastContainer;

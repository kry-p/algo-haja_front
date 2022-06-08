/*
 * App
 */
// React core
import React from 'react';
// React Router
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// 페이지
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import ProblemPage from './pages/ProblemPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// 전역 테마
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/theme';

import { AnimatePresence } from 'framer-motion';
import StyledToastContainer from './components/common/Toast';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/problem">
          <Route path=":problemId" element={<ProblemPage />} />
        </Route>
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Root = () => {
  const darkmode = useSelector((state) => state.option.darkmode);
  return (
    <>
      <GlobalStyle dark={darkmode} />
      <ThemeProvider theme={{ theme: darkmode ? 'dark' : 'light' }}>
        <StyledToastContainer />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Root;

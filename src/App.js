import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import ProblemPage from './pages/ProblemPage';
import TestPage from './pages/TestPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/theme';

const App = () => {
  const darkmode = useSelector((state) => state.option.darkmode);
  return (
    <>
      <GlobalStyle dark={darkmode} />
      <ThemeProvider theme={{ theme: darkmode ? 'dark' : 'light' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

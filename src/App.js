import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

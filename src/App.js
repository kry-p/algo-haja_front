import React, { useEffect, useState } from 'react';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/theme';

const App = () => {
  const option = useSelector((state) => state.option);
  const [currentGlobalTheme, setCurrentGlobalTheme] = useState('light');

  useEffect(() => {
    if (option.darkmode) {
      setCurrentGlobalTheme('dark');
    } else {
      setCurrentGlobalTheme('light');
    }
  }, [option]);

  return (
    <>
      <GlobalStyle dark={currentGlobalTheme === 'dark'} />
      <ThemeProvider theme={{ theme: currentGlobalTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="*" exact element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

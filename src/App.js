/**
 * App
 */
// React core
import React from 'react';
// React Router
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// framer-motion
import { AnimatePresence } from 'framer-motion';
// react-toastify
import StyledToastContainer from './components/common/Toast';
// 페이지
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import GuidePage from './pages/GuidePage';
import ProblemListPage from './pages/problem/ProblemListPage';
import ProblemDescriptionPage from './pages/problem/ProblemDescriptionPage';
import ProblemSolveSubmitPage from './pages/problem/ProblemSolveSubmitPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyInfoPage from './pages/MyInfoPage';
import UserdataModifyPage from './pages/UserdataModifyPage';
// import ProblemDashboardPage from './pages/problem/ProblemDashboardPage';
// 전역 테마
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/theme';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/problem">
          <Route path="/problem/list">
            <Route path=":type" element={<ProblemListPage />} />
            <Route path="" element={<Navigate to="/404" replace={true} />} />
          </Route>
          {/* <Route path="" element={<ProblemDashboardPage />} /> */}
          <Route path=":problemId" element={<ProblemDescriptionPage />} />
          <Route
            path="submit/:problemId"
            element={<ProblemSolveSubmitPage />}
          />
        </Route>
        <Route path="/mypage">
          <Route path="/mypage/modify" element={<UserdataModifyPage />} />
          <Route path="" element={<MyInfoPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const Root = () => {
  // Theme switching by styled-theming & React-redux
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

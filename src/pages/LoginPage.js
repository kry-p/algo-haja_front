/*
 * 로그인 페이지
 */
// React core
import React from 'react';
// Components
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};
export default LoginPage;

/*
 * 회원가입 페이지
 */
// React core
import React from 'react';
// Components
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};
export default RegisterPage;

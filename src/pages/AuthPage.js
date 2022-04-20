import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = ({ type }) => (
  <AuthTemplate>
    <AuthForm type={type} />
  </AuthTemplate>
);

export default LoginPage;

import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => (
  <AuthTemplate>
    <AuthForm type="register" />
  </AuthTemplate>
);

export default RegisterPage;

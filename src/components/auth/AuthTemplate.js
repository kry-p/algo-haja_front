/*
 * 회원가입 및 로그인 폼 템플릿
 */
import React from 'react';
import { AuthCardBlock } from '../common/Card';
import { AuthTemplateBlock } from '../../styles/common/Auth';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthCardBlock>{children}</AuthCardBlock>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

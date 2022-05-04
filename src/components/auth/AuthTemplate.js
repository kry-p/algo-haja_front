/*
 * 회원가입 및 로그인 폼 템플릿
 */
// React core
import React from 'react';
// Hooks
import useWindow from '../../lib/hooks/useWindow';
// Components
import { AuthCardBlock } from '../common/Card';
// Styles
import { AuthTemplateBlock } from '../../styles/common/Auth';

const AuthTemplate = ({ children }) => {
  // Hooks
  const window = useWindow();

  return (
    // 100vh 문제 해결용 inline styling
    <AuthTemplateBlock style={{ height: `calc(${window.height}px)` }}>
      <AuthCardBlock>{children}</AuthCardBlock>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

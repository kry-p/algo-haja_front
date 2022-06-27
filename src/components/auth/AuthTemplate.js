/**
 * 회원가입 및 로그인 폼 템플릿
 */
// React core
import React from 'react';
// Component
import { AuthCardBlock } from '../common/Card';
// Style
import { AuthTemplateBlock } from '../../styles/common/Auth';
// Hook
import useWindow from '../../lib/hooks/useWindow';

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

import React from 'react';
import { AuthTemplateBlock } from '../styles/common/Auth';

import { AuthCardBlock } from '../common/Card';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthCardBlock>{children}</AuthCardBlock>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

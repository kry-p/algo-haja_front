/**
 * 입력 창
 */
// React core
import React from 'react';
import styled from 'styled-components';
// Style
import Input from '../../styles/common/Input';
import { mainTextColor, objectLevelTwoColor } from '../../styles/theme';

export const LoginRegisterFormInput = styled(Input)`
  border-radius: 0;
  font-size: 0.9rem;
  width: 12rem;

  transition: all 0.5s ease-in-out;
  @media (min-width: 320px) {
    width: 14rem;
  }
`;

export const CodeBlock = styled.textarea`
  background: ${objectLevelTwoColor};
  color: ${mainTextColor};
  font-size: large;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  resize: none;
  padding: 1rem;
  font-family: D2Coding;
`;

export const CodeInput = ({ code, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CodeBlock
        value={code}
        rows={code.split(/\n/).length > 20 ? code.split(/\n/).length : 20}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

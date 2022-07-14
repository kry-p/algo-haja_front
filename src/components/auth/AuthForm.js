/**
 * 회원가입 및 로그인 폼
 */
// React core
import React from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// Component
import { Button, LogoButton } from '../common/Button';
import { LoginRegisterFormInput } from '../common/Input';
import { HoverToUnderlineButton } from '../common/Button';
import { Link } from '../common/Link';
// Style
import {
  AuthTopButtonWrapper,
  AuthContentBlock,
  AuthContentForm,
  AuthContentSuggest,
  AuthContentError,
} from '../../styles/common/Auth';
// Icon
import { IoArrowBackCircle } from '@react-icons/all-files/io5/IoArrowBackCircle';
// Constant
import { TITLE } from '../../lib/constants';

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  // Hooks
  const navigate = useNavigate();

  return (
    <AuthContentBlock>
      <AuthTopButtonWrapper>
        <HoverToUnderlineButton
          dense
          icon={<IoArrowBackCircle size={24} />}
          text="홈으로"
          onClick={() => navigate('/')}
        />
      </AuthTopButtonWrapper>
      <LogoButton title={TITLE} />
      <div>{type === 'login' ? '로그인' : '회원가입'}</div>
      <AuthContentForm onSubmit={onSubmit}>
        <LoginRegisterFormInput
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        {type === 'register' && (
          <LoginRegisterFormInput
            name="email"
            placeholder="e-mail"
            onChange={onChange}
            value={form.email}
          />
        )}
        <LoginRegisterFormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <LoginRegisterFormInput
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <AuthContentError
          error={!!error}
          style={{ height: `${!!error ? '2rem' : '0rem'}` }}
        >
          {error}
        </AuthContentError>
        <Button accent text={type === 'login' ? '로그인' : '가입하기'} />
      </AuthContentForm>
      <AuthContentSuggest>
        {type === 'login' ? (
          <>
            <span>계정이 필요하신가요?</span>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <>
            <span>이미 계정이 있나요?</span>
            <Link to="/login">로그인</Link>
          </>
        )}
      </AuthContentSuggest>
    </AuthContentBlock>
  );
};

export default AuthForm;

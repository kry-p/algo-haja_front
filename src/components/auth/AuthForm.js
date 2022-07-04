/**
 * 회원가입 및 로그인 폼
 */
// React core
import React from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { initializeForm } from '../../modules/auth';
// Component
import { Button, LogoButton, UnderlinedButton } from '../common/Button';
import { LoginRegisterFormInput } from '../common/Input';
import { HoverToUnderlineButton } from '../common/Button';
// Style
import {
  AuthFormBlock,
  SuggestBlock,
  ErrorMessage,
} from '../../styles/common/Auth';
// Icon
import { IoArrowBackCircle } from '@react-icons/all-files/io5/IoArrowBackCircle';
// Constant
import { TITLE } from '../../lib/constants';

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 폼 초기화 후 페이지 이동
  const onClickRegister = () => {
    dispatch(initializeForm('register'));
    navigate('/register');
  };
  const onClickLogin = () => {
    dispatch(initializeForm('login'));
    navigate('/login');
  };

  return (
    <AuthFormBlock>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
      >
        <HoverToUnderlineButton
          style={{ padding: '0.5rem 1rem 0.5rem 0rem' }}
          onClick={() => navigate('/')}
        >
          <IoArrowBackCircle size={24} />
          <div>홈으로</div>
        </HoverToUnderlineButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <LogoButton title={TITLE} />
      </div>
      <div>{type === 'login' ? '로그인' : '회원가입'}</div>
      <form
        style={{
          display: 'grid',
        }}
        onSubmit={onSubmit}
      >
        <div style={{ display: 'grid', gap: '0.25rem' }}>
          <LoginRegisterFormInput
            placeholder="아이디"
            name="username"
            onChange={onChange}
            value={form.username}
          />
          {type === 'register' && (
            <LoginRegisterFormInput
              placeholder="e-mail"
              name="email"
              onChange={onChange}
              value={form.email}
            />
          )}
          <LoginRegisterFormInput
            placeholder="비밀번호"
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' && (
            <LoginRegisterFormInput
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          )}
        </div>
        <ErrorMessage
          error={!!error}
          style={{ height: `${!!error ? '2rem' : '0rem'}` }}
        >
          {error}
        </ErrorMessage>
        <Button accent style={{ width: '100%' }}>
          {type === 'login' ? '로그인' : '가입하기'}
        </Button>
      </form>
      {type === 'login' ? (
        <SuggestBlock>
          계정이 필요하신가요?
          <UnderlinedButton onClick={onClickRegister}>
            회원가입
          </UnderlinedButton>
        </SuggestBlock>
      ) : (
        <SuggestBlock>
          이미 계정이 있나요?
          <UnderlinedButton onClick={onClickLogin}>로그인</UnderlinedButton>
        </SuggestBlock>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

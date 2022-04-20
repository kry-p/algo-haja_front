import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, LogoButton, UnderlinedButton } from '../common/Button';
import { LoginRegisterFormInput } from '../common/Input';
import { AuthFormBlock, SuggestBlock } from '../styles/common/Auth';

import { toggleAuthmode } from '../../modules/option';

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <AuthFormBlock>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <LogoButton title="알고하자" />
      </div>
      <div>{type === 'login' ? '로그인' : '회원가입'}</div>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <LoginRegisterFormInput placeholder="아이디" name="username" />
        <LoginRegisterFormInput
          placeholder="비밀번호"
          name="password"
          type="password"
        />
        {type === 'register' && (
          <LoginRegisterFormInput
            placeholder="비밀번호 확인"
            name="password"
            type="password"
          />
        )}
      </form>
      <Button accent style={{ width: '100%' }}>
        {type === 'login' ? '로그인' : '가입하기'}
      </Button>
      {type === 'login' ? (
        <SuggestBlock>
          계정이 필요하신가요?
          <UnderlinedButton onClick={() => dispatch(toggleAuthmode())}>
            회원가입
          </UnderlinedButton>
        </SuggestBlock>
      ) : (
        <SuggestBlock>
          이미 계정이 있나요?
          <UnderlinedButton onClick={() => dispatch(toggleAuthmode())}>
            로그인
          </UnderlinedButton>
        </SuggestBlock>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

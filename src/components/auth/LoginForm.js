/*
 * 로그인 폼
 */
// React core
import React, { useEffect, useState } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import { check } from '../../modules/user';
import { login } from '../../modules/auth';
// Components
import AuthForm from './AuthForm';

const LoginForm = () => {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State
  const [error, setError] = useState(null);
  // Redux state
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 입력 폼 값 변경
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };
  // Submit 버튼 클릭 시 (로그인)
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  // 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  // 인증 성공 여부 확인
  useEffect(() => {
    if (authError) {
      setError('ID와 비밀번호를 확인해 주세요.');
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // 토큰 저장
  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(
          'localStorage is not working. Please check if localStorage is enabled.'
        );
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;

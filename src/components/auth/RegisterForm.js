/*
 * 회원가입 폼
 */
// React core
import React, { useEffect, useState } from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
// Components
import AuthForm from './AuthForm';

const RegisterForm = () => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State
  const [error, setError] = useState(null);
  // Redux state
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 입력 폼 값 변경
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };
  // Submit 버튼 클릭 시 (로그인)
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes('')) {
      setError('모든 입력란을 작성해 주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호 확인이 올바르지 않습니다.');
      return;
    }
    dispatch(register({ username, password }));
  };

  // 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공 여부
  useEffect(() => {
    if (authError) {
      if (authError.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      setError('회원가입에 실패하였습니다.');
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
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;

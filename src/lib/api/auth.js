/*
 * 회원 인증
 */
import client from './client';

// 로그인
export const login = ({ username, email, password }) =>
  client.post('/api/auth/login', { username, email, password });

// 회원가입
export const register = ({ username, email, password }) =>
  client.post('/api/auth/register', { username, email, password });

// 토큰 체크
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

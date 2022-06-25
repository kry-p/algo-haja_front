/**
 * 문제 정보
 */
import client from './client';

// 문제 상세정보
export const readProblem = (problemId) =>
  client.get(`/api/problem/${problemId}`);

// 문제 정보 업데이트 요청
export const updateProblemInfo = ({ problemId }) => {
  client.post(`/api/problem/info`, { problemId });
};

// 사용자가 풀거나 시도한 문제 목록
export const getUserProblem = () => client.post(`/api/problem/list-user`);

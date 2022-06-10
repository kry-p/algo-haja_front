/**
 * 문제 정보
 */
import client from './client';

// 문제 상세정보
export const readProblem = (problemId) =>
  client.get(`/api/problem/${problemId}`);

// 문제 정보 업데이트 요청
export const updateProblemInfo = ({ problemId }) => {
  client.patch(`/api/problem/info`, { problemId });
};

export const getUserProblem = () => client.post(`/api/problem/list-user`);

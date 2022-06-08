/**
 * 문제 정보
 */
import client from './client';

// 문제 상세정보
export const readProblem = (problemId) =>
  client.get(`/api/problem/${problemId}`);

export const updateProblemInfo = ({ problemId }) => {
  client.patch(`/api/problem/info`, { problemId });
};

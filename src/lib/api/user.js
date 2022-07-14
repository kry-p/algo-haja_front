/**
 * 사용자 정보
 */
import client from './client';

// 사용자 정보 가져오기
export const readUserInfo = () => client.post(`/api/user/info`);

// 비밀번호 변경
export const changePassword = async ({
  password,
  newPassword,
  newPasswordConfirm,
}) => {
  await client.post(`/api/user/password`, {
    password,
    newPassword,
    newPasswordConfirm,
  });
};

// BOJ 연동정보 변경
export const changeBojId = async ({ password, bojId }) => {
  await client.patch(`/api/user/basic`, { password, bojId });
};

// Git 연동정보 변경
export const changeGitInfo = async ({
  password,
  repoUrl,
  ruleConstant,
  bojDir,
}) => {
  await client.patch(`/api/user/git`, {
    password,
    repoUrl,
    ruleConstant,
    bojDir,
  });
};

// React core
import React, { useState } from 'react';
// React-toastify
import { toast } from 'react-toastify';
// Component
import { Button } from '../../common/Button';
// Style
import Input from '../../../styles/common/Input';
import {
  Settings,
  SettingsTitle,
  SettingsSubtitle,
  SettingsItem,
  SettingsDescription,
  SubmitArea,
} from '../../../styles/page/Settings';
// URI validator
import { isUri } from 'valid-url';
// Path validator
import isValid from 'is-valid-path';
import { changeGitInfo } from '../../../lib/api/user';

const PersonalGit = ({ user }) => {
  const linked = user.gitRepoInformation.linked;
  const repoUrl = user.gitRepoInformation.repoUrl;
  const bojDir = user.gitRepoInformation.bojDir;
  const [form, setForm] = useState({
    repoUrl: linked ? repoUrl : '',
    bojDir: linked ? bojDir : '',
    password: '',
  });

  return (
    <Settings>
      <SettingsTitle>
        개인 Git 저장소
        <SettingsSubtitle>
          문제풀이가 저장된 Git 저장소와 연동할 수 있습니다.
        </SettingsSubtitle>
      </SettingsTitle>
      <SettingsItem>
        <div className="title">저장소 URL</div>
        <SettingsDescription xlarge>
          <Input
            value={form.repoUrl}
            onChange={(e) => setForm({ ...form, repoUrl: e.target.value })}
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsItem>
        <div className="title">디렉토리</div>
        <SettingsDescription xlarge>
          <Input
            value={form.bojDir}
            onChange={(e) => setForm({ ...form, bojDir: e.target.value })}
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsSubtitle>
        문제번호의 중복을 막기 위해 저지 사이트별로 분리한 경우 BOJ 문제의
        풀이가 저장된 경로를 입력합니다.
        <br />
        저장소 기준의 상대 경로로 입력하며, 기본값은 ./ (루트에서 모든 하위
        경로에 대해 검색)입니다.
        <br />
        예) ./baekjoon
      </SettingsSubtitle>
      <SettingsItem>
        <div className="title">알고하자 PW</div>
        <SettingsDescription medium>
          <Input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </SettingsDescription>
      </SettingsItem>
      <SubmitArea>
        <Button
          accent
          onClick={async () => {
            const { repoUrl, bojDir, password } = form;
            if (!isUri(repoUrl)) {
              toast.error('URL 형식이 올바르지 않습니다.');
              return;
            }
            if (!isValid(bojDir)) {
              toast.error('경로 형식이 올바르지 않습니다.');
              return;
            }
            if (password.length === 0) {
              toast.error('비밀번호를 입력하세요.');
              return;
            }
            try {
              await changeGitInfo({ repoUrl, ruleConstant: 1, bojDir });
              toast.info(
                'Git 저장소를 등록했습니다. 풀이 목록이 반영되기까지 시간이 걸릴 수 있습니다.'
              );
            } catch (err) {
              if (err.request.status == 400)
                toast.error('해당 Git 저장소를 찾을 수 없습니다.');
              else toast.error('Git 저장소를 등록하는 중 오류가 발생했습니다.');
            }
          }}
        >
          수정
        </Button>
      </SubmitArea>
    </Settings>
  );
};

export default PersonalGit;

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
import { changeBojId } from '../../../lib/api/user';
import { BOJID_REGEX } from '../../../lib/constants';

const Boj = ({ user }) => {
  const bojId = user.userData.bojId;
  const [form, setForm] = useState({
    bojId: bojId ? bojId : '',
    currentBojId: bojId ? bojId : '',
    password: '',
  });

  return (
    <Settings>
      <SettingsTitle>
        BOJ 연동
        <SettingsSubtitle>
          BOJ 계정을 링크할 수 있습니다. BOJ에서 연동되어 있을 경우
          solved.ac와는 자동으로 링크됩니다.
        </SettingsSubtitle>
      </SettingsTitle>
      <SettingsItem>
        <div className="title">BOJ ID</div>
        <SettingsDescription medium>
          <Input
            value={form.bojId}
            onChange={(e) => setForm({ ...form, bojId: e.target.value })}
          />
        </SettingsDescription>
      </SettingsItem>
      {bojId && (
        <SettingsSubtitle>
          {`현재 링크된 BOJ 계정은 ${form.currentBojId}입니다.`}
        </SettingsSubtitle>
      )}
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
            const { bojId, password } = form;
            if (bojId.length === 0 || password.length === 0) {
              toast.error('각 항목은 비워둘 수 없습니다.');
              return;
            }
            if (!BOJID_REGEX.test(bojId)) {
              toast.error(
                'ID 형식이 올바르지 않습니다. 3 ~ 20자의 영문, 숫자, 밑줄(_)만 허용됩니다.'
              );
            }
            try {
              await changeBojId({ password, bojId });
              toast.info(
                'BOJ ID를 업데이트했습니다. 기존에 등록된 푼 문제 정보가 새로운 계정의 정보로 대체됩니다.'
              );
              setForm({ ...form, currentBojId: bojId });
            } catch (err) {
              const errorCode = err.request.status;
              const errorMessage =
                errorCode === 400
                  ? '잘못된 요청입니다.'
                  : errorCode === 401
                  ? '비밀번호가 올바르지 않습니다.'
                  : '사용자 정보가 올바르지 않습니다. 관리자에게 문의해 주세요.';
              toast.error(errorMessage);
            }
          }}
        >
          수정
        </Button>
      </SubmitArea>
    </Settings>
  );
};

export default Boj;

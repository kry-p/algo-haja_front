// React core
import React, { useState } from 'react';
// React-toastify
import { toast } from 'react-toastify';
// Component
import { Button } from '../../../common/Button';
// Style
import Input from '../../../../styles/common/Input';
import {
  Settings,
  SettingsTitle,
  SettingsSubtitle,
  SettingsItem,
  SettingsDescription,
  Divider,
  SubmitArea,
} from '../../../../styles/page/Mypage';
// Icon
import { changePassword } from '../../../../lib/api/user';
// Constant
import { PASSWORD_REGEX } from '../../../../lib/constants';

const PrimitiveInfo = ({ user }) => {
  const isEmailVerified = user.isEmailVerified;
  const email = user.email;
  const [form, setForm] = useState({
    email: email ? email : '',
    previousPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  return (
    <Settings>
      <SettingsTitle>
        계정 기본 정보
        <SettingsSubtitle>
          메일 인증을 하거나 비밀번호를 변경할 수 있습니다.
        </SettingsSubtitle>
      </SettingsTitle>
      <SettingsItem>
        <div className="title">이메일</div>
        <SettingsDescription large>
          <Input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            disabled={form.email}
          />
          <Button
            accent={!isEmailVerified}
            disabled={isEmailVerified}
            onClick={() => toast.info('이메일 인증은 준비 중입니다.')}
            text={isEmailVerified ? '인증' : '인증'}
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsSubtitle>
        이메일 인증은 준비 중입니다.
        <br />
        인증이 완료되어야 비밀번호를 재설정할 수 있습니다.
      </SettingsSubtitle>
      <Divider />
      <SettingsItem>
        <div className="title">이전 비밀번호</div>
        <SettingsDescription medium>
          <Input
            type="password"
            value={form.previousPassword}
            onChange={(e) =>
              setForm({ ...form, previousPassword: e.target.value })
            }
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsItem>
        <div className="title">새 비밀번호</div>
        <SettingsDescription medium>
          <Input
            type="password"
            value={form.newPassword}
            onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsItem>
        <div className="title">비밀번호 확인</div>
        <SettingsDescription medium>
          <Input
            type="password"
            value={form.newPasswordConfirm}
            onChange={(e) =>
              setForm({ ...form, newPasswordConfirm: e.target.value })
            }
          />
        </SettingsDescription>
      </SettingsItem>
      <SettingsSubtitle>
        이전 비밀번호와 새 비밀번호를 입력하여 비밀번호를 변경할 수 있습니다.
      </SettingsSubtitle>
      <SubmitArea>
        <Button
          accent
          onClick={async () => {
            const { previousPassword, newPassword, newPasswordConfirm } = form;
            if (
              previousPassword.length === 0 ||
              newPassword.length === 0 ||
              newPasswordConfirm.length === 0
            ) {
              toast.error('비밀번호는 비워둘 수 없습니다.');
              return;
            }
            if (previousPassword === newPassword) {
              toast.error('새로운 비밀번호는 이전 비밀번호와 달라야 합니다.');
              return;
            }
            if (newPassword !== newPasswordConfirm) {
              toast.error('비밀번호 확인이 올바르지 않습니다.');
              return;
            }
            if (!PASSWORD_REGEX.test(newPassword)) {
              toast.error(
                '비밀번호는 영문, 숫자, 특수문자를 모두 포함, 8자 이상이어야 합니다.'
              );
              return;
            }
            try {
              await changePassword({
                password: previousPassword,
                newPassword,
                newPasswordConfirm,
              });
              toast.info(
                '비밀번호가 변경되었습니다. 다음 로그인부터는 변경된 비밀번호로 로그인할 수 있습니다.'
              );
              setForm({
                ...form,
                previousPassword: '',
                newPassword: '',
                newPasswordConfirm: '',
              });
            } catch (err) {
              const errorCode = err.request.status;
              const errorMessage =
                errorCode === 400
                  ? '비밀번호는 영문, 숫자, 특수문자를 모두 포함, 8자 이상이어야 합니다.'
                  : errorCode === 401
                  ? '기존 비밀번호가 올바르지 않습니다.'
                  : errorCode === 403
                  ? '테스트용 계정은 설정을 변경할 수 없습니다.'
                  : '사용자 정보가 올바르지 않습니다. 관리자에게 문의해 주세요.';
              toast.error(errorMessage);
            }
          }}
          text="수정"
        />
      </SubmitArea>
    </Settings>
  );
};

export default PrimitiveInfo;

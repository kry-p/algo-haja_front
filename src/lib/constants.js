// 타이틀
export const TITLE = '알고하자 α';

// 문제 풀이 여부
export const NO_TRY = 0;
export const TRIED = 1;
export const SOLVED = 2;

// 메뉴
export const MENU = [
  ['문제', '/problem/list/user', '풀거나 시도했던 문제를 확인합니다.'],
  ['그룹 (공사중)', '#', '그룹 멤버와 함께 문제를 해결합니다.'],
  ['가이드', '/guide', '알고하자를 사용하는 방법을 확인합니다.'],
  ['MY', '/mypage', '내 정보를 보거나 수정합니다.'],
];

// 검증 정규식
export const BOJID_REGEX = /^[\w+]{3,20}$/;
export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&;()+\-_=/~`[\]{}'".,])[A-Za-z\d@$!%*#?&;()+\-_=/~`[\]{}'".,]{8,}$/;

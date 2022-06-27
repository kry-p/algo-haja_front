/**
 * solved.ac 티어 관련
 */
const TIER = {
  ko: [
    '난이도 정보 없음',
    '브론즈',
    '실버',
    '골드',
    '플래티넘',
    '다이아몬드',
    '루비',
    '마스터',
  ],
  en: [
    'Unrated',
    'Bronze',
    'Sliver',
    'Gold',
    'Platinum',
    'Diamond',
    'Ruby',
    'Master',
  ],
};
const LEVEL = [5, 4, 3, 2, 1];
const BADGE_COLOR = [
  '#2D2D2D', // unrated
  '#AC5600', // bronze
  '#435F7A', // silver
  '#EC9A00', // gold
  '#27E2A4', // platinum
  '#00B4FC', // diamond
  '#FE0062', // ruby
  '#D186D1', // master
];

// 티어 색상
export const getSolvedacTierColor = (tierConstant) =>
  BADGE_COLOR[Math.ceil(tierConstant / 5)];

// 세부 레벨
export const getSolvedacTierLevel = (tierConstant) =>
  tierConstant == 0
    ? '?'
    : tierConstant == 31
    ? 'M'
    : LEVEL[(tierConstant - 1) % 5];

// 텍스트
export const getSolvedacTierText = (tierConstant, lang) => {
  const usingTierInfo = TIER[lang];

  switch (tierConstant) {
    case 0:
      return usingTierInfo[0];
    case 31:
      return usingTierInfo[7];
    default:
      return `${
        usingTierInfo[Math.ceil(tierConstant / 5)]
      } ${getSolvedacTierLevel(tierConstant)}`;
  }
};

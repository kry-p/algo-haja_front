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

export const getSolvedacTierColor = (tierConstant) => {
  return BADGE_COLOR[Math.ceil(tierConstant / 5)];
  // switch (rating) {
  //   case rating < 1 || rating > 31:
  //     return BADGE_COLOR.unrated;
  //   case rating < 6:
  //     return BADGE_COLOR.bronze;
  //   case rating < 11:
  //     return BADGE_COLOR.silver;
  //   case rating < 16:
  //     return BADGE_COLOR.gold;
  //   case rating < 21:
  //     return BADGE_COLOR.platinum;
  //   case rating < 26:
  //     return BADGE_COLOR.diamond;
  //   case rating < 31:
  //     return BADGE_COLOR.ruby;
  //   default:
  //     return BADGE_COLOR.master;
  // }
};

export const getSolvedacTierLevel = (tierConstant) =>
  tierConstant == 0
    ? '?'
    : tierConstant == 31
    ? 'M'
    : LEVEL[(tierConstant - 1) % 5];

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

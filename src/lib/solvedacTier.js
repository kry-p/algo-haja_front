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
const tierGenerator = (tierConstant, lang) => {
  const usingTierInfo = TIER[lang];

  switch (tierConstant) {
    case 0:
      return usingTierInfo[0];
    case 31:
      return usingTierInfo[7];
    default:
      return `${usingTierInfo[Math.ceil(tierConstant / 5)]} ${
        LEVEL[(tierConstant - 1) % 5]
      }`;
  }
};

export default tierGenerator;

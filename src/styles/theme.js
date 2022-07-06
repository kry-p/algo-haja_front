/**
 * Global theme colors
 */
import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styled-theming';
import palette from '../lib/palette';

/**
 * Object level
 */
export const objectLevelOneColor = theme('theme', {
  light: palette.gray[0],
  dark: palette.gray[9],
});

export const objectLevelTwoColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[8],
});

export const objectLevelThreeColor = theme('theme', {
  light: palette.gray[2],
  dark: palette.gray[7],
});

export const objectLevelFourColor = theme('theme', {
  light: palette.gray[3],
  dark: palette.gray[6],
});

/**
 * Text
 */
export const mainTextColor = theme('theme', {
  light: palette.gray[10],
  dark: palette.gray[4],
});

export const subTextColor = theme('theme', {
  light: palette.gray[6],
  dark: palette.gray[6],
});

export const errorMessageColor = theme('theme', {
  light: palette.red[6],
  dark: palette.red[4],
});

export const tableHeaderTextColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[4],
});

/**
 * UI element
 */
export const buttonColor = theme('theme', {
  light: css`
    color: ${palette.gray[1]};
    background-color: ${palette.gray[10]};

    &:hover {
      background-color: ${palette.gray[6]};
    }

    ${(props) =>
      props.accent &&
      css`
        background-color: ${palette.cyan[5]};
        &:hover {
          background-color: ${palette.cyan[4]};
        }
      `}
  `,
  dark: css`
    color: ${palette.gray[1]};
    background-color: ${palette.gray[8]};

    &:hover {
      background-color: ${palette.gray[7]};
    }

    ${(props) =>
      props.accent &&
      css`
        background-color: ${palette.cyan[8]};
        &:hover {
          background-color: ${palette.cyan[7]};
        }
      `}
  `,
});

export const accentColor = theme('theme', {
  light: css`
    background-color: ${palette.cyan[2]};
    &:hover {
      background-color: ${palette.cyan[1]};
    }
  `,
  dark: css`
    background-color: ${palette.cyan[7]};
    &:hover {
      background-color: ${palette.cyan[9]};
    }
  `,
});

export const footerColor = theme('theme', {
  light: palette.gray[2],
  dark: palette.gray[9],
});

export const badgeColor = theme('theme', {
  light: css`
    background-color: ${palette.gray[6]};

    ${(props) =>
      props.trying &&
      css`
        background-color: ${palette.red[4]};
      `}

    ${(props) =>
      props.solved &&
      css`
        background-color: ${palette.green[5]};
      `}
  `,
  dark: css`
    background-color: ${palette.gray[8]};

    ${(props) =>
      props.trying &&
      css`
        background-color: ${palette.red[6]};
      `}

    ${(props) =>
      props.solved &&
      css`
        background-color: ${palette.green[7]};
      `}
  `,
});

/**
 * Background
 */
export const backgroundColor = theme('theme', {
  light: palette.gray[0],
  dark: palette.gray[10],
});

export const tableHeaderBackgroundColor = theme('theme', {
  light: palette.cyan[6],
  dark: palette.gray[8],
});

export const tableOddItemBackgroundColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[9],
});

export const authCardBackgroundColor = theme('theme', {
  light: css`
    background: rgba(248, 249, 250, 0.7);
  `,
  dark: css`
    background: rgba(43, 48, 53, 0.9);
  `,
});

/**
 * Special items
 */
export const headlineBackgroundFilter = theme('theme', {
  light: css`
    filter: contrast(70%) brightness(100%);
  `,
  dark: css`
    filter: brightness(50%);
  `,
});

export const resultBadgeColor = theme('theme', {
  light: css`
    ${(props) =>
      props.success &&
      css`
        background-color: ${palette.green[3]};
      `}
    ${(props) =>
      props.failure &&
      css`
        background-color: ${palette.red[3]};
      `}
  `,
  dark: css`
    ${(props) =>
      props.success &&
      css`
        background-color: ${palette.green[7]};
      `}
    ${(props) =>
      props.failure &&
      css`
        background-color: ${palette.red[6]};
      `}
  `,
});

export const codeHighlightColor = theme('theme', {
  // atom-one-light & atom-one-dark theme
  light: css`
    background: ${palette.gray[2]};
    line-height: normal;
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #383a42;
      white-space: pre;
      background: ${palette.gray[2]};
    }

    .hljs-comment,
    .hljs-quote {
      color: #a0a1a7;
      font-style: italic;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #a626a4;
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e45649;
    }

    .hljs-literal {
      color: #0184bb;
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: #50a14f;
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
      color: #c18401;
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #986801;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #4078f2;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    .hljs-link {
      text-decoration: underline;
    }
  `,
  dark: css`
    background: ${palette.gray[8]};
    line-height: normal;
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #abb2bf;
      background: ${palette.gray[8]};
    }

    .hljs-comment,
    .hljs-quote {
      color: #5c6370;
      font-style: italic;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #c678dd;
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e06c75;
    }

    .hljs-literal {
      color: #56b6c2;
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: #98c379;
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
      color: #e6c07b;
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #d19a66;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #61aeee;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    .hljs-link {
      text-decoration: underline;
    }
  `,
});

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "Yeongdo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/Yeongdo/Yeongdo.woff2") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: 'D2Coding';
    src: url('https://cdn.jsdelivr.net/gh/Joungkyun/font-d2coding@1.3.2/D2Coding.woff2')
      format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard-ExtraLight";
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff2') format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2');
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Pretendard-Regular, -apple-system, sans-serif;
    text-rendering: optimizeLegibility;
    background: ${objectLevelOneColor};
    color: ${(props) => (props.dark ? palette.gray[1] : palette.gray[10])};
    transition: background-color 0.3s ease-in-out;
  }

  button {
    font-family: Pretendard-Regular;
    color: ${(props) => (props.dark ? palette.gray[1] : palette.gray[10])};
    transition: background-color 0.3s ease-in-out;
  }

  div {
    transition: background-color 0.3s ease-in-out;
  }

  a {
    color: ${subTextColor};
  }

  input:focus {
    outline: none;
  }
  
  textarea:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    transition: 0.3s;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

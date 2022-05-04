/*
 * 전역 테마 컬러
 */
import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styled-theming';
import palette from '../lib/palette';

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

export const headlineBackgroundFilter = theme('theme', {
  light: css`
    filter: contrast(70%) brightness(100%);
  `,
  dark: css`
    filter: brightness(50%);
  `,
});

export const backgroundColor = theme('theme', {
  light: palette.gray[0],
  dark: palette.gray[10],
});

export const tableHeaderBackgroundColor = theme('theme', {
  light: palette.cyan[6],
  dark: palette.gray[8],
});

export const tableHeaderTextColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[4],
});

export const tableOddItemBackgroundColor = theme('theme', {
  light: palette.gray[1],
  dark: palette.gray[9],
});

export const footerColor = theme('theme', {
  light: palette.gray[2],
  dark: palette.gray[9],
});

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

export const authCardBackgroundColor = theme('theme', {
  light: css`
    background: rgba(248, 249, 250, 0.7);
  `,
  dark: css`
    background: rgba(43, 48, 53, 0.9);
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
        background-color: ${palette.cyan[5]};
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
        background-color: ${palette.cyan[7]};
      `}
  `,
});

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

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "Yeongdo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "MinSans-Thin";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Thin.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "MinSans-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: 'D2Coding';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff')
      format('woff');
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: MinSans-Medium, -apple-system, sans-serif;
    text-rendering: optimizeLegibility;
    background-color: ${(props) =>
      props.dark ? palette.gray[10] : palette.gray[0]};
    color: ${(props) => (props.dark ? palette.gray[1] : palette.gray[10])};
  }

  button {
    font-family: MinSans-Medium;
    color: ${(props) => (props.dark ? palette.gray[1] : palette.gray[10])};
    transition: background-color 0.3s ease-in-out;
  }

  div {
    transition: background-color 0.3s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
  }

  input {
    font-family: MinSans-Medium;
  }

  img {
    transition: 0.3s;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

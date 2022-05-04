/*
 * 푸터
 */
// React core
import React from 'react';
// Component
import { Link } from './Link';
// Styles
import styled from 'styled-components';
import { footerColor } from '../../styles/theme';
import { Logo } from '../../styles/common/Button';

const StyledFooter = styled.div`
  display: fixed;
  bottom: 0;
  width: 100%;
  height: 16rem;

  background-color: ${footerColor};
  box-shadow: 0rem 0rem 0.25rem 0.125rem rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          fontSize: '0.9rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '14rem',
            width: '80%',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}
        >
          <Logo style={{ padding: 0 }}>알고하자</Logo>
          <span style={{ fontFamily: 'MinSans-Thin' }}>
            ⓒ 2022. kry-p <Link href="https://github.com/kry-p">GitHub</Link>
          </span>
          <span>
            Baekjoon Online Judge는 주식회사{' '}
            <Link href="https://startlink.io/">스타트링크</Link>의 상표입니다.
          </span>
          <span>
            이 웹사이트에 적용된 글꼴은 아래와 같습니다.
            <br />
            영도체 - 영도문화도시센터
            <br />
            민산스 - Kim Jinseong
            <br />
            D2 Coding - 네이버
          </span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

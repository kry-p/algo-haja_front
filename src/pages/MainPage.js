import React from 'react';
import Appbar from '../components/common/Appbar';

import styled from 'styled-components';

import { ContentArea, SafeArea } from '../styles/common/Area';
import Footer from '../components/common/Footer';
import { headlineBackgroundFilter, mainTextColor } from '../styles/theme';
import { ArticleTitle, ArticleWrapper } from '../styles/common/Article';

import { BsArrowRight } from 'react-icons/bs';
import { SolvedacRatingBadge } from '../components/common/Misc';
import { RawButton } from '../components/common/Button';

const MainHeadlineBackground = styled.div`
  ${headlineBackgroundFilter}
  position: absolute;

  width: 100vw;
  height: 75vh;
  background: url(/resources/image/bg.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 62.5%;
`;

const MainHeadline = styled.div`
  width: 100vw;
  height: 75vh;
`;

const MainHeadlineDescription = styled.div`
  color: ${mainTextColor};
  z-index: 1;

  width: 70%;
  padding: 2rem;
  font-size: 1.1rem;

  @media (min-width: 384px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    width: calc(1024px * 0.7);
  }
`;

const MainHeadlineTitle = styled.div`
  font-size: 3rem;
  color: ${mainTextColor};
  z-index: 1;

  display: grid;
  gap: 1rem;

  @media (min-width: 384px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    font-size: 5rem;

    div:first-child {
      grid-column: 1 / span 2;
    }
  }
`;
const MainPage = () => {
  return (
    <>
      <Appbar title="알고하자" fullPage />
      <MainHeadline>
        <MainHeadlineBackground />
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '1fr 12rem 1fr',
            height: '100%',
            justifyItems: 'center',
          }}
        >
          <div></div>
          <MainHeadlineTitle>
            <div>알고리즘.</div>
            <div>함께하면,</div>
            <div>더 즐거워요.</div>
          </MainHeadlineTitle>
          <MainHeadlineDescription>
            <span>
              알고하자는 Baekjoon Online Judge에서 푼 문제를 되돌아보고, 그룹
              단위의 문제풀이를 할 수 있게 도와주는 프로젝트입니다.
            </span>
          </MainHeadlineDescription>
        </div>
      </MainHeadline>
      <ContentArea>
        <SafeArea>
          <div
            style={{
              backgroundSize: 'cover',
              padding: '2rem',
              display: 'grid',
              gap: '4rem',
            }}
          >
            <div>
              <ArticleTitle>내가 푼 문제, 어떻게 풀었더라?</ArticleTitle>
              <div
                style={{
                  paddingLeft: '0.8rem',
                  lineHeight: '150%',
                  fontFamily: 'MinSans-Thin',
                }}
              >
                <span>
                  풀었던 문제, 그냥 넘기고 후에 "뭐였더라?" 하시지는 않나요?
                  <br />
                  문제풀이 Git 저장소를 등록하고 지금까지 풀었던 문제를
                  리마인드하세요.
                </span>
              </div>
              <RawButton
                style={{ padding: '1.5rem 0.75rem', fontSize: '1rem' }}
              >
                <BsArrowRight />
                <div style={{ paddingLeft: '1rem' }}>내가 푼 문제 보기</div>
              </RawButton>
            </div>
            <div>
              <ArticleTitle>스터디 그룹</ArticleTitle>
              <div
                style={{
                  paddingLeft: '0.8rem',
                  fontFamily: 'MinSans-Thin',
                  lineHeight: '150%',
                }}
              >
                <span>
                  스터디 그룹을 운영할 수 있어요.
                  <br />
                  그룹 단위의 문제풀이를 수행하여 실력을 함께 키워보세요.
                </span>
              </div>
              <RawButton
                style={{ padding: '1.5rem 0.75rem', fontSize: '1rem' }}
              >
                <BsArrowRight />
                <div style={{ paddingLeft: '1rem' }}>그룹 만들기</div>
              </RawButton>
            </div>
          </div>
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default MainPage;

/*
 * 랜딩 페이지
 */
// React core
import React from 'react';
// Components
import { ArticleTitle } from '../styles/common/Article';
import { HoverToUnderlineButton } from '../components/common/Button';
import Footer from '../components/common/Footer';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
import {
  MainHeadlineBackground,
  MainHeadline,
  MainHeadlineTitle,
  MainHeadlineDescription,
} from '../styles/page/Main';
// Icon
import { BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import animation from '../styles/animation/animation';

const MainPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <AppbarContainer title="알고하자" fullPage />
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
      >
        <MainHeadline>
          <MainHeadlineBackground />
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
                    풀었던 문제, 다시 풀 때 "뭐였더라?" 하시지는 않나요?
                    <br />
                    문제풀이 Git 저장소를 등록하고 지금까지 풀었던 문제를
                    리마인드하세요.
                  </span>
                </div>
                <HoverToUnderlineButton
                  style={{ padding: '1.5rem 0.75rem', fontSize: '1rem' }}
                >
                  <BsArrowRight />
                  <div style={{ paddingLeft: '1rem' }}>내가 푼 문제 보기</div>
                </HoverToUnderlineButton>
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
                <HoverToUnderlineButton
                  style={{ padding: '1.5rem 0.75rem', fontSize: '1rem' }}
                >
                  <BsArrowRight />
                  <div style={{ paddingLeft: '1rem' }}>그룹 만들기</div>
                </HoverToUnderlineButton>
              </div>
            </div>
          </SafeArea>
        </ContentArea>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};
export default MainPage;

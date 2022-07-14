/**
 * 랜딩 페이지
 */
// React core
import React from 'react';
// React router
import { useNavigate } from 'react-router-dom';
// Framer-motion
import { motion, AnimatePresence } from 'framer-motion';
// React-toastify
import { toast } from 'react-toastify';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Component
import {
  ArticleParagraphDescription,
  ArticleTitle,
} from '../styles/common/Article';
import { HoverToUnderlineButton } from '../components/common/Button';
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';
import { LayoutDummy } from '../styles/common/Misc';
import {
  HeadlineBackground,
  HeadlineWrapper,
  HeadlineTitle,
  HeadlineDescription,
  CTAWrapper,
  CTA,
} from '../styles/page/Main';
import animation from '../styles/animation/animation';
// Icon
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
// Constant
import { TITLE } from '../lib/constants';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <AppbarContainer title={TITLE} fullPage />
        <motion.div
          key="main"
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
        >
          <HeadlineWrapper>
            <HeadlineBackground />
            <LayoutDummy />
            <HeadlineTitle>
              <div>알고리즘.</div>
              <div>함께하면,</div>
              <div>더 즐거워요.</div>
            </HeadlineTitle>
            <HeadlineDescription>
              알고하자는 Baekjoon Online Judge에서 푼 문제를 되돌아보고, 그룹
              단위의 문제풀이를 할 수 있게 도와주는 프로젝트입니다.
            </HeadlineDescription>
          </HeadlineWrapper>
          <ContentArea ignoreMinHeight>
            <SafeArea>
              <CTAWrapper>
                <CTA>
                  <ArticleTitle>내가 푼 문제, 어떻게 풀었더라?</ArticleTitle>
                  <ArticleParagraphDescription>
                    풀었던 문제, 다시 풀 때 "뭐였더라?" 하시지는 않나요?
                    <br />
                    문제풀이 Git 저장소를 등록하고 지금까지 풀었던 문제를
                    리마인드하세요.
                  </ArticleParagraphDescription>
                  <HoverToUnderlineButton
                    dense
                    text="내가 푼 문제 보기"
                    icon={<IoArrowForward />}
                    onClick={() => navigate('/problem/list/user')}
                  />
                </CTA>
                <CTA>
                  <ArticleTitle>스터디 그룹 (공사중)</ArticleTitle>
                  <ArticleParagraphDescription>
                    스터디 그룹을 운영할 수 있어요.
                    <br />
                    그룹 단위의 문제풀이를 수행하여 실력을 함께 키워보세요.
                  </ArticleParagraphDescription>
                  <HoverToUnderlineButton
                    dense
                    text="그룹 만들기"
                    icon={<IoArrowForward />}
                    onClick={() => toast.info('서비스 준비 중입니다.')}
                  />
                </CTA>
              </CTAWrapper>
            </SafeArea>
          </ContentArea>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default MainPage;

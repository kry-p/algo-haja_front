/*
 * 테스트용 페이지
 * 각종 컴포넌트를 만들고 의도한 대로 작동하는지 테스트하는 페이지입니다.
 *
 * SafeArea 안에 테스트하고자 하는 요소를 삽입하면 됩니다.
 */
// React core
import React from 'react';
// Container
import AppbarContainer from '../containers/AppbarContainer';
// Components
import { ProblemTable } from '../components/common/Table';
import Footer from '../components/common/Footer';
// Styles
import { ContentArea, SafeArea } from '../styles/common/Area';

const tableItems = [];
for (let i = 0; i < 99; i++)
  tableItems.push({
    tier: i % 32,
    problemNumber: 1000 * (i + 1),
    problemName: `문제 제목 ${i + 1}`,
    tag: ['수학', '다이나믹 프로그래밍', '정수론'],
    groupSolved: i % 3 == 0 ? 'Solved' : i % 3 == 1 ? 'Trying' : 'No try',
    userSolved: 'No try',
  });

const TestPage = () => {
  return (
    <>
      <AppbarContainer title="알고하자" />
      <ContentArea>
        <SafeArea>
          <ProblemTable title="전체 문제 목록" data={tableItems} />
        </SafeArea>
      </ContentArea>
      <Footer />
    </>
  );
};
export default TestPage;

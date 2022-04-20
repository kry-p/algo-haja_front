import React from 'react';
import Appbar from '../components/common/Appbar';
import StyledArticle from '../components/common/Article';

import { ContentArea, SafeArea } from '../components/common/Area';
import { ProblemCard } from '../components/common/Card';

const MainPage = () => {
  return (
    <>
      <Appbar title="알고하자" />
      <ContentArea>
        <SafeArea>
          <StyledArticle
            title="이번 주의 문제예요."
            contents={[
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={1}
              />,
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={2}
              />,
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={3}
              />,
            ]}
          />
          <StyledArticle
            title="다른 팀원들은 이런 문제를 해결했어요."
            contents={[
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={1}
              />,

              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={2}
              />,
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={3}
              />,
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={4}
              />,
              <ProblemCard
                title="문제 제목"
                solved
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ante vitae rhoncus porttitor. Vivamus vitae auctor metus. Cras a lorem at libero posuere placerat sit amet quis lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas gravida magna turpis, a elementum nunc tempor non. Aenean imperdiet nibh sed ultrices tincidunt. Sed iaculis mi mi, et vulputate odio ultrices sit amet. Pellentesque tristique nisl nec blandit molestie."
                categories={['문제 유형 1', '문제 유형 2', '문제 유형 3']}
                stars={5}
              />,
            ]}
          />
        </SafeArea>
      </ContentArea>
    </>
  );
};
export default MainPage;

import React, { Fragment, useState } from 'react';

import { MdArrowDropDownCircle } from 'react-icons/md';

import {
  ProblemTableItem,
  ProblemTableHeader,
  CombinedTableItem,
} from '../../styles/common/Table';

import { SolvedBadge, RoundedCornerBlock, SolvedacRatingBadge } from './Misc';
import { TableItemLink } from './Link';
import { IconButton, RawButton } from './Button';
import { ArticleTitle, TableArticleWrapper } from '../../styles/common/Article';

export const ProblemTable = ({ title, data }) => {
  return (
    <TableArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <RoundedCornerBlock>
        <ProblemTableHeader>
          <div />
          <div />
          <div className="header" style={{ gridColumn: '4 / span 2' }}>
            풀이 여부
          </div>
        </ProblemTableHeader>
        <ProblemTableHeader>
          <div>#</div>
          <div>제목</div>
          <div>태그</div>
          <div>그룹</div>
          <div>사용자</div>
        </ProblemTableHeader>
        {data.length === 0 ? (
          <ProblemTableItem>
            <CombinedTableItem>문제가 없습니다.</CombinedTableItem>
          </ProblemTableItem>
        ) : (
          data.map((attribute, index) => {
            const [taglistOpen, setTaglistOpen] = useState(false);
            return (
              <Fragment key={index}>
                <ProblemTableItem odd={index % 2 != 0}>
                  <div
                    style={{
                      width: '80%',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'space-evenly',
                      borderRadius: '0',
                    }}
                  >
                    <SolvedacRatingBadge rating={attribute.tier} />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '0.5rem',
                      }}
                    >
                      <TableItemLink
                        href={`https://acmicpc.net/problem/${attribute.problemNumber}`}
                      >
                        {attribute.problemNumber}
                      </TableItemLink>
                    </div>
                  </div>
                  <div>
                    <TableItemLink
                      href={`https://acmicpc.net/problem/${attribute.problemNumber}`}
                    >
                      {attribute.problemName}
                    </TableItemLink>
                  </div>
                  <div>
                    <RawButton
                      style={{ padding: '0' }}
                      onClick={() => setTaglistOpen(!taglistOpen)}
                    >
                      <MdArrowDropDownCircle size={20} />
                    </RawButton>
                  </div>
                  <div>
                    <SolvedBadge
                      solved={attribute.groupSolved === 'Solved'}
                      trying={attribute.groupSolved === 'Trying'}
                    >
                      {attribute.groupSolved}
                    </SolvedBadge>
                  </div>
                  <div>
                    <SolvedBadge
                      solved={attribute.userSolved === 'Solved'}
                      trying={attribute.userSolved === 'Trying'}
                    >
                      {attribute.userSolved}
                    </SolvedBadge>
                  </div>
                </ProblemTableItem>
                {!!attribute.tag && (
                  <ProblemTableItem
                    odd={index % 2 != 0}
                    disabled={!taglistOpen}
                  >
                    <CombinedTableItem>
                      {attribute.tag.map((item) => (
                        <CardBadge key={item}>{item}</CardBadge>
                      ))}
                    </CombinedTableItem>
                  </ProblemTableItem>
                )}
              </Fragment>
            );
          })
        )}
      </RoundedCornerBlock>
    </TableArticleWrapper>
  );
};

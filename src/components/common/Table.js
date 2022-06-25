/*
 * 테이블
 */
// React core
import React, { Fragment, useState } from 'react';
// Components
import { SolvedBadge, RoundedCornerBlock, SolvedacRatingBadge } from './Misc';
import { TableItemLink } from './Link';
import { CardBadge } from './Card';
// Styles
import {
  ProblemTableItem,
  ProblemTableHeader,
  CombinedTableItem,
} from '../../styles/common/Table';
import { ArticleTitle, TableArticleWrapper } from '../../styles/common/Article';

import { SOLVED, TRIED } from '../../lib/constants';

import { HoverToUnderlineButton, PaginationButton } from './Button';
import {
  BsArrowLeft,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

// import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Pagination } from './Pagination';

// 문제 테이블
export const ProblemTable = ({ title, data, loading, error }) => {
  // const [select, setSelect] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const LIMIT = 20;

  // const handleChange = ({ value }) => {
  //   setSelect(value);
  // };

  if (error) {
    if (error.response && error.response.status == 404) {
      return <div>오류 발생!</div>;
    }
  }

  if (loading || !data) {
    return <div>로딩 중</div>;
  }

  const options =
    data.length > 0
      ? data[0].solved.group.map((item, idx) => ({
          value: idx,
          label: item[0],
        }))
      : {};
  const isGroup = options.length > 0;

  return (
    <>
      <TableArticleWrapper>
        <div>
          <HoverToUnderlineButton onClick={() => navigate(-1)}>
            <BsArrowLeft size={20} />
            <div>이전으로 돌아가기</div>
          </HoverToUnderlineButton>
        </div>
        <ArticleTitle>{title}</ArticleTitle>
        {/* 그룹 기능 구현 시 활성화 */}
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '1rem 0rem',
          }}
        >
          {isGroup && (
            <>
              <div style={{ paddingRight: '1rem' }}>그룹 선택</div>
              <Select
                options={options}
                value={options.find((option) => option.value === select)}
                placeholder="그룹"
                onChange={handleChange}
              />
            </>
          )}
        </div> */}
        <RoundedCornerBlock>
          <ProblemTableHeader>
            <div />
            <div />
            <div className="header" style={{ gridColumn: '3 / span 2' }}>
              풀이 여부
            </div>
          </ProblemTableHeader>
          <ProblemTableHeader>
            <div>#</div>
            <div>제목</div>
            <div>그룹</div>
            <div>사용자</div>
          </ProblemTableHeader>
          {data.length === 0 ? (
            <ProblemTableItem>
              <CombinedTableItem>문제가 없습니다.</CombinedTableItem>
            </ProblemTableItem>
          ) : (
            data
              .slice(page * LIMIT, (page + 1) * LIMIT)
              .map((attribute, index) => {
                return (
                  <Fragment key={index}>
                    <ProblemTableItem odd={index % 2 != 0}>
                      <div
                        style={{
                          width: '65%',
                          display: 'flex',
                          alignContent: 'center',
                          justifyContent: 'space-between',
                          borderRadius: '0',
                        }}
                      >
                        <SolvedacRatingBadge rating={attribute.solvedacTier} />
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '0.5rem',
                          }}
                        >
                          <TableItemLink
                            href={`/problem/${attribute.problemId}`}
                          >
                            {attribute.problemId}
                          </TableItemLink>
                        </div>
                      </div>
                      <div>
                        <TableItemLink href={`/problem/${attribute.problemId}`}>
                          {attribute.problemName}
                        </TableItemLink>
                      </div>
                      <div>
                        {/* 그룹 기능 구현 시 활성화 */}
                        {/* <SolvedBadge
                        solved={
                          isGroup
                            ? attribute.solved.group[select][1] === SOLVED
                            : false
                        }
                        trying={
                          isGroup
                            ? attribute.solved.group[select][1] === TRIED
                            : false
                        }
                      >
                        {isGroup
                          ? attribute.solved.group[select][1] === SOLVED
                            ? 'Solved'
                            : attribute.solved.group[select][1] === TRIED
                            ? 'Trying'
                            : 'No try'
                          : 'N / A'}
                      </SolvedBadge> */}
                        <SolvedBadge solved={false} trying={false}>
                          N / A
                        </SolvedBadge>
                      </div>
                      <div>
                        <SolvedBadge
                          solved={attribute.solved.user === SOLVED}
                          trying={attribute.solved.user === TRIED}
                        >
                          {attribute.solved.user === SOLVED
                            ? 'Solved'
                            : attribute.solved.user === TRIED
                            ? 'Trying'
                            : 'No try'}
                        </SolvedBadge>
                      </div>
                    </ProblemTableItem>
                    {!!attribute.tags && (
                      <ProblemTableItem odd={index % 2 != 0} disabled={false}>
                        <CombinedTableItem>
                          {attribute.tags.ko.map((item) => (
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
        <Pagination>
          <PaginationButton
            onClick={() => {
              if (page > 0) setPage(page - 1);
            }}
          >
            <BsArrowLeftShort />
          </PaginationButton>
          {[...new Array(Math.floor(data.length / LIMIT) + 1)]
            .slice(Math.floor(page / 10) * 10, Math.floor(page / 10) * 10 + 10)
            .map((item, index) => (
              <PaginationButton
                key={index}
                onClick={() => setPage(Math.floor(page / 10) * 10 + index)}
                enabled={Math.floor(page / 10) * 10 + index === page}
              >
                {Math.floor(page / 10) * 10 + index + 1}
              </PaginationButton>
            ))}
          <PaginationButton
            onClick={() => {
              if (page < Math.floor(data.length / LIMIT)) setPage(page + 1);
            }}
          >
            <BsArrowRightShort />
          </PaginationButton>
        </Pagination>
      </TableArticleWrapper>
    </>
  );
};

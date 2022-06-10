/**
 * Table
 */
import styled, { css } from 'styled-components';
import {
  tableOddItemBackgroundColor,
  tableHeaderBackgroundColor,
  tableHeaderTextColor,
} from '../../styles/theme';

const TableItem = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 3rem;

  transition: height 0.25s ease-in-out;
  user-select: none;
  ${(props) =>
    props.odd &&
    css`
      background: ${tableOddItemBackgroundColor};
    `}

  ${(props) =>
    props.disabled &&
    css`
      height: 0;
      div {
        height: 0;
      }
    `}

  div {
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const TableHeader = styled(TableItem)`
  height: 2.5rem;
  background: ${tableHeaderBackgroundColor};
  color: ${tableHeaderTextColor};
`;

export const ProblemTableHeader = styled(TableHeader)`
  grid-template-columns: 6rem auto 4rem 4rem;

  @media (min-width: 384px) {
    grid-template-columns: 8rem auto 4rem 4rem;
  }
`;

export const ProblemTableItem = styled(TableItem)`
  grid-template-columns: 6rem auto 4rem 4rem;

  @media (min-width: 384px) {
    grid-template-columns: 8rem auto 4rem 4rem;
  }
`;

export const CombinedTableItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: clip;
  grid-column: 1 / span 5;
`;

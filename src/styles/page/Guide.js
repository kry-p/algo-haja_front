/**
 * 가이드 페이지 스타일
 */
import styled from 'styled-components';

// Wrapper for guide paragraph
export const GuideWrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  padding: 2rem;
  line-height: 1.5rem;
`;

// Main title
export const GuideParagraphMainTitle = styled.h1`
  font-size: xx-large;
`;

export const GuideParagraphMainSubtitle = styled.h4`
  font-size: large;
`;

// Content
export const GuideParagraphTitle = styled.h2`
  font-size: x-large;
`;

export const GuideParagraphDescription = styled.h3`
  font-size: medium;
`;

// List
export const GuideParagraphUnorderedList = styled.ul`
  padding-left: 1rem;

  line-height: 1.5rem;
  list-style-type: disc;
`;

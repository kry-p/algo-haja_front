import styled from 'styled-components';

export const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthFormBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  gap: 1rem;
`;

export const SuggestBlock = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

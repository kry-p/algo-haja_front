import React, { useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${FadeIn} 0.15s ease-in;
  transition: opacity 0.15s ease-out;

  z-index: 10;
`;

const Dummy = styled.div``;

const Modal = ({ children, onClose }) => {
  const modalCard = useRef();
  const modal = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalCard.current && !modalCard.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalCard]);
  return (
    <ModalBlock ref={modal}>
      <Dummy />
      <div ref={modalCard}>{children}</div>
      <Dummy />
    </ModalBlock>
  );
};

export default Modal;

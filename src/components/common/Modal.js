/*
 * 모달
 */
// React core
import React, { useRef, useEffect } from 'react';
// Style
import styled from 'styled-components';
// Component
import { ModalBlock } from '../../styles/common/Modal';

const Dummy = styled.div``;
const Modal = ({ children, onClose }) => {
  const modalCard = useRef();
  const modal = useRef();

  // 모달 외부 클릭 감지
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

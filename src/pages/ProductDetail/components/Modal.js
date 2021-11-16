import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            {children}
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: -0px;
  top: -0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 525px;
  background: #fff;
  color: #000;
  border-radius: 10px;
`;

const CloseModalButton = styled(MdClose)`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;

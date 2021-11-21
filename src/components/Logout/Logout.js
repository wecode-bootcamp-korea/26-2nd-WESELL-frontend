import React from 'react';
import styled from 'styled-components';

const LogoutModal = ({ modalToggle, clearToken }) => {
  return (
    <ModalContainer>
      <ToggleBackground onClick={modalToggle} />
      <Modal>
        떠나기 전 드로우는 필수
        <PictureBox>
          <PictureTag alt="디브넣을까고민" src="/#" />
        </PictureBox>
        <ButtonBox>
          <ModalButton onClick={clearToken}>네</ModalButton>
          <ModalButton onClick={modalToggle}>아니오</ModalButton>
        </ButtonBox>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ToggleBackground = styled.div`
  display: flex;
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 90%;
  background-color: lightgray;
`;

const PictureBox = styled.div`
  display: flex;
`;

const PictureTag = styled.img`
  position: absolute;
  justify-content: center;
  width: 200px;
  height: auto;
  margin-left: 100px;
  padding-top: 20px;
  border-radius: 5px;
`;
const Modal = styled.div`
  position: absolute;
  z-index: 998;
  width: 400px;
  height: 300px;
  padding-top: 30px;
  border-radius: 10px;
  text-align: center;
  font-weight: bolder;
  font-size: 25px;
  background: white;
`;

const ButtonBox = styled.div`
  padding-top: 165px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 10px;
`;

const ModalButton = styled.button`
  width: 40%;
  height: 55px;
  margin-right: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: bolder;
  background-color: black;
  color: white;
`;

export default LogoutModal;

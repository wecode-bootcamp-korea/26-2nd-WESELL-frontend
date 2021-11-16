import React from 'react';
import styled from 'styled-components';

export default function SizeSelectModalStyling({
  sizeSelectButtonClick,
  detailPageDataSize,
  setShowModal,
  showModal,
}) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal ? (
        <SizeModalContent>
          <Title>사이즈</Title>
          <ButtonWrapper>
            {detailPageDataSize &&
              detailPageDataSize.map(({ id, size, lowest_price }) => {
                return (
                  <Button
                    onClick={e => {
                      closeModal(e);
                      sizeSelectButtonClick(size, lowest_price);
                    }}
                    // onclick={closeModal}
                    key={id}
                  >
                    <Size>{size}</Size>
                    <Price>{lowest_price}</Price>
                  </Button>
                );
              })}
          </ButtonWrapper>
        </SizeModalContent>
      ) : null}
    </div>
  );
}

const SizeModalContent = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
const Title = styled.div`
  margin: 15px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 5px;
  margin-bottom: 5px;
  border: 1px solid #d3d3d3;

  border-radius: 10px;
  background-color: #fff;
`;

const Size = styled.span`
  display: block;
  font-weight: 700px;
`;

const Price = styled.span`
  color: red;
`;

import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductCardWrap = () => {
  const [cardList, setCardList] = useState([]);
  const [shownIndex, setShownIndex] = useState(4);

  function showMore() {
    setShownIndex(shownIndex + 4);
  }

  useEffect(() => {
    fetch('/data/ProductCardList.json')
      .then(res => res.json())
      .then(data => {
        setCardList(data.result.product);
      });
  }, []);

  return (
    <Container>
      {cardList.slice(0, shownIndex).map(card => (
        <ProductCard key={card.id} cards={card} />
      ))}
      {shownIndex <= cardList.length && (
        <ShowMoreBtn onClick={showMore}>더보기</ShowMoreBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 50px;
  margin: 30px 50px;
`;

const ShowMoreBtn = styled.button`
  position: absolute;
  right: 50%;
  bottom: -30px;
  width: 100px;
  height: 40px;
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
`;

export default ProductCardWrap;

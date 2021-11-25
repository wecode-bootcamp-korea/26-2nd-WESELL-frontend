import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCardMain from './ProductCardMain';
import { API } from '../../config';

export default function ProductCardWrap({ sort }) {
  const [cardList, setCardList] = useState([]);
  const [shownIndex, setShownIndex] = useState(4);

  function showMore() {
    setShownIndex(shownIndex + 4);
  }

  useEffect(() => {
    fetch(`${API.sortBy}${sort}`)
      .then(res => res.json())
      .then(data => {
        setCardList(data.products.productslist);
      });
  }, [sort]);

  return (
    <Container>
      {cardList.slice(0, shownIndex).map(card => (
        <ProductCardMain key={card.id} cards={card} />
      ))}
      {shownIndex < cardList.length && (
        <ShowMoreBtn onClick={showMore}>더보기</ShowMoreBtn>
      )}
    </Container>
  );
}

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

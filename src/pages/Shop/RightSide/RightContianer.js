import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { GiElectric } from 'react-icons/gi';
import { RiArrowUpDownLine } from 'react-icons/ri';

function ProductListContianer() {
  const [productCardinfo, setproductCardinfo] = useState(null);

  useEffect(() => {
    fetch('/data/RightContainer.json')
      .then(res => res.json())
      .then(data => {
        setproductCardinfo(data.result.product);
      });
  }, []);

  return (
    <WholeWrapper>
      <QuickPopular>
        <QuickBtn>
          <ElecImoticon>
            <GiElectric />
          </ElecImoticon>
          빠른배송
        </QuickBtn>{' '}
        <PopularBtn>
          인기순
          <RiArrowUpDownLine />
        </PopularBtn>
      </QuickPopular>{' '}
      <RightSide>
        {productCardinfo &&
          productCardinfo.map(card => (
            <ProductCard
              key={card.id}
              img={card.image_url}
              brand={card.brand}
              engname={card.en_name}
              krname={card.ko_name}
              price={card.buy_now_price}
              fast_shipping={card.fast_shipping}
            />
          ))}
      </RightSide>
    </WholeWrapper>
  );
}

export default ProductListContianer;

const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 30px 20px;
`;
const QuickPopular = styled.div`
  display: flex;
  justify-content: space-between;
`;
const QuickBtn = styled.button`
  display: flex;
  width: 78 px;
  height: 28 px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;

const PopularBtn = styled.button`
  display: flex;
  width: 78 px;
  height: 28 px;
  background-color: white;
  border: none;
  border-radius: 10 px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
const ElecImoticon = styled.span`
  color: green;
`;

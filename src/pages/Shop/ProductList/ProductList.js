import { React, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from 'styled-components';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { GiElectric } from 'react-icons/gi';
import { RiArrowUpDownLine } from 'react-icons/ri';
import SortingBox from './SortingBox/SortingBox';

export default function ProductList() {
  const [productCardinfo, setproductCardinfo] = useState([]);
  const [openSortCategory, setopenSortCategory] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isSortRelease, setSortRelease] = useState(false);
  const [isReversereleased, setReversereleased] = useState(false);
  const [isDirectPrice, setDirectPrice] = useState(false);
  const [isReverseDirectPrice, setReverseDirectPrice] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const fastShipping = () => {
    setActive(!isActive);
    isActive ? navigate('?fastshipping=True') : navigate('');
  };

  const sortCategoryOpen = () => {
    setopenSortCategory(!openSortCategory);
  };

  const sortQuickRelease = () => {
    setSortRelease(!isSortRelease);
    isSortRelease ? navigate('?sort=release_date') : navigate('');
  };

  const sortReverseRelease = () => {
    setReversereleased(!isReversereleased);
    isReversereleased ? navigate('?sort=-release_date') : navigate('');
  };

  const directPrice = () => {
    setDirectPrice(!isDirectPrice);
    isDirectPrice ? navigate('?sort=price') : navigate('');
  };

  const reverseDirectPrice = () => {
    setReverseDirectPrice(!isReverseDirectPrice);
    isReverseDirectPrice ? navigate('?sort=price') : navigate('');
  };
  useEffect(() => {
    fetch(`http://10.58.3.37:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setproductCardinfo(data.products.productslist);
      });
  }, [location]);

  return (
    <WholeWrapper>
      <QuickPopular>
        <QuickBtn onClick={fastShipping}>
          <ElecImoticon>
            <GiElectric />
          </ElecImoticon>
          빠른배송
        </QuickBtn>
        <WrapperBox>
          <PopularBtn onClick={sortCategoryOpen}>
            모든배송
            <RiArrowUpDownLine />
          </PopularBtn>
          {!openSortCategory && (
            <SortingBox
              released={sortQuickRelease}
              reverseReleased={sortReverseRelease}
              directPrice={directPrice}
              reversePrice={reverseDirectPrice}
            />
          )}
        </WrapperBox>
      </QuickPopular>
      <RightSide>
        {productCardinfo.map(card => (
          <ProductCard key={card.id} cardlist={card} />
        ))}
      </RightSide>
    </WholeWrapper>
  );
}

const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
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
  position: relative;
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

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

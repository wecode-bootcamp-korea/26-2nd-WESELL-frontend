import { React } from 'react';
import styled from 'styled-components';
import MainSlider from './MainSlider/MainSlider';
import ProductCardTitle from '../../components/ProductCard/ProductCardTitle';
import ProductCardWrap from '../../components/ProductCard/ProductCardWrap';
import Advertisement from './Advertisement/Advertisement';
import AdvertisementList from './Advertisement/AdvertisementList';

const adList = AdvertisementList.product;

export default function Main() {
  return (
    <Container>
      <MainSlider />
      <ProductCardTitle title="Just Dropped" subtitle="발매 상품" />
      <ProductCardWrap url="/" />
      <Advertisement
        imageUrl={adList[0].image_url}
        title={adList[0].title}
        description={adList[0].description}
      />
      <ProductCardTitle title="Most Popular" subtitle="인기 상품" />
      <ProductCardWrap url="/" />
      <Advertisement
        imageUrl={adList[1].image_url}
        title={adList[1].title}
        description={adList[1].description}
      />
    </Container>
  );
}

const Container = styled.div`
  border-top: 0.5px solid gray;
`;

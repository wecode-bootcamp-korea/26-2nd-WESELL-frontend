import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import RecentSearch from './RecentSearch';
import SearchByBrand from './SearchByBrand';

const SearchBar = ({ searchToggle }) => {
  const [keyword, setKeyword] = useState('');
  const [keywordList, setKeywordList] = useState([]);
  const navigate = useNavigate();

  const inputKeyword = e => {
    setKeyword(e.target.value);
  };

  const storeKeyword = e => {
    if (e.key === 'Enter') {
      setKeywordList([...keywordList, keyword]);
      setKeyword('');
      navigate(`/products?keyword=${keyword}`);
    }
  };

  const resetKeyword = () => {
    setKeyword('');
    setKeywordList([]);
  };

  return (
    <Container>
      <InputSearchWrap>
        <InputSearch
          placeholder="브랜드명, 모델명, 모델번호 등"
          onChange={inputKeyword}
          onKeyPress={storeKeyword}
          value={keyword}
        />
        <Cancel onClick={searchToggle}>취소</Cancel>
      </InputSearchWrap>
      <RecentSearch keywordList={keywordList} reset={resetKeyword} />
      <SearchByBrand />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 30px;
  background-color: white;
  z-index: 999;
  border-bottom: 1px solid gray;
`;

const InputSearchWrap = styled.div`
  margin: 10px 0px;
`;

const InputSearch = styled.input`
  width: 700px;
  height: 40px;
  padding: 0px 20px;
  color: rgb(34, 34, 34);
  background-color: #f4f4f4;
  border: none;
  font-size: 14px;
`;

const Cancel = styled.span`
  margin: 0px 10px;
  font-size: 14px;
  cursor: pointer;
`;

export default SearchBar;

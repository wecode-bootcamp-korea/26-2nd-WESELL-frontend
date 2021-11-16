import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import Option from './FliterOption/Option';

function FilterOptionContainer() {
  const [filterOptions, setFilterOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const filterBrand = e => {
    if (!location.search) {
      navigate(`?keyword=${e.target.name}`);
    } else {
      navigate('/products');
    }
  };

  useEffect(() => {
    fetch(`http://10.58.3.37:8000${location.pathname + location.search}`)
      .then(res => res.json())
      .then(category => {
        setFilteredData(category.filterOptions);
      });

    fetch('/data/ShopCategoryDate.json')
      .then(res => res.json())
      .then(category => {
        setFilterOptions(category.filterOptions);
      });
  }, [location.search, filteredData]);

  return (
    <div>
      <FilterText>필터</FilterText>
      {filterOptions.map((button, idx) => (
        <OptionWrapper key={idx}>
          <Option
            brandId={button.detailCategorylist.id}
            mainCategory={button.maincategory}
            subCategory={button.subcategory}
            subdetailCategory={button.detailCategorylist}
            filterBrand={filterBrand}
          />
        </OptionWrapper>
      ))}
    </div>
  );
}

export default FilterOptionContainer;

const OptionWrapper = styled.ul`
  min-width: 200px;
`;

const FilterText = styled.div`
  margin-bottom: 10px;
`;

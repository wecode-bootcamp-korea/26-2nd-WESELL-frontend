import styled from 'styled-components';

function SubOption({ subDetail, id, filterBrand }) {
  return (
    <InsideDetailList>
      {subDetail.map((list, idx) => (
        <ListWrpper key={idx}>
          <CategoryCheck
            onClick={filterBrand}
            type="checkbox"
            brandRecognize={id}
            name={list.brandlist}
          />
          {list.brandlist}
        </ListWrpper>
      ))}
    </InsideDetailList>
  );
}

export default SubOption;

const InsideDetailList = styled.li`
  margin-top: 10px;
`;

const CategoryCheck = styled.input`
  cursor: pointer;
`;

const ListWrpper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px 0;
`;

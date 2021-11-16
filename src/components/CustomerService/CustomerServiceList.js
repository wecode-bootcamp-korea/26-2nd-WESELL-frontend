import React from 'react';
import styled from 'styled-components';

const UpperFooterList = ({ title, list }) => {
  return (
    <Container>
      <ListTitle>{title}</ListTitle>
      {list.map(link => {
        return <Li key={link.id}>{link.name}</Li>;
      })}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;
  margin: 0px 50px;
`;

const ListTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Li = styled.li`
  margin: 20px 0;
  color: gray;
  font-size: 14px;
`;

export default UpperFooterList;

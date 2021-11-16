import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

const options = ['230', '240', '250', '260', '270'];

// https://medium.com/the-andela-way/custom-select-dropdown-in-react-1758c1f6f537
export default function DropDownMenu({ setCurSize, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setCurSize(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader
          // style={{ border: `${type === 'MarketPrice' ? 'none' : ''}` }}
          onClick={toggling}
        >
          {selectedOption || '230'}
          <FaRegArrowAltCircleDown className="faIcon" />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}

const Main = styled('div')`
  font-family: sans-serif;
`;

const DropDownContainer = styled('div')`
  width: 100px;
`;

const DropDownHeader = styled('div')`
  display: flex;
  margin-bottom: 5px;
  height: 33px;
  padding: 0.69em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 13px;
  color: #222;
  border: 1px solid #ebebeb;
  border-radius: 12px;

  .faIcon {
    position: absolute;
    margin-left: 65px;
  }
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  position: absolute;
  padding-left: 1em;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  width: 130px;
  background-color: white;
  color: #222;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

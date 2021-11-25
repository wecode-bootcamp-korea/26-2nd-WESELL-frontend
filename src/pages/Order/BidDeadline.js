import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const daysList = [
  { id: 1, day: 1 },
  { id: 2, day: 3 },
  { id: 3, day: 7 },
  { id: 4, day: 30 },
  { id: 5, day: 60 },
];

export default function BidDeadline() {
  const [daysLeft, setDaysLeft] = useState(30);

  const changeDeadline = e => {
    setDaysLeft(e.target.name);
  };

  return (
    <Container>
      <Title>입찰 마감기한</Title>
      <Deadline>{daysLeft}일</Deadline>
      <DaysLeftWrap>
        {daysList.map(day => {
          return (
            <DaysLeft
              key={day.id}
              name={day.day}
              onClick={changeDeadline}
              selected={day.day === daysLeft}
            >
              {day.day}일
            </DaysLeft>
          );
        })}
      </DaysLeftWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Deadline = styled.div``;

const DaysLeftWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DaysLeft = styled.button`
  text-align: center;
  width: 110px;
  height: 42px;
  padding: 13px 0;
  margin: 10px 5px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  &:focus {
    border: 1px solid black;
    font-weight: bold;
  }
`;

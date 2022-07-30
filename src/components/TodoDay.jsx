import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import styled from 'styled-components';

const TodoDay = ({ todoList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://worldtimeapi.org/api/timezone/Asia/Seoul')
      .then((res) => setData(res.data));
  }, []);

  const month = dayjs(data.datetime).format('MMMM');
  const day = dayjs(data.datetime).format('dddd');

  return (
    <Container>
      <Wrap>
        <div>
          <span className="blod">{day},</span> <span>{data.week_number}th</span>
        </div>
        <p>{todoList.length} Tasks</p>
      </Wrap>
      <Wrap>
        <p className="month">{month}</p>
        <Btn>CLEAR LIST</Btn>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: #b1b3b5 1px solid;
  padding: 30px;
  background-color: #f3f3f5;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #6677fb;
  font-size: 30px;

  margin-top: 5px;
  & .blod {
    font-weight: 700;
  }
  & p {
    margin: 0;
    color: #b6b1cf;
    font-weight: 600;
    font-size: 16px;
  }
  & .month {
    font-size: 20px;
  }
`;

const Btn = styled.button`
  padding: 8px;

  border: none;
  border-radius: 5px;
  background-color: #fa6263;

  color: #fff;
  font-weight: 600;
`;

export default TodoDay;

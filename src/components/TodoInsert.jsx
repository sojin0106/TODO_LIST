import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const TodoInsert = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    if (text === '') {
      alert('내용을 입력해주세요!');
    } else {
      const nextTodoList = todoList.concat({
        id: todoList.length,
        text,
        checked: false,
        time: time,
      });
      setTodoList(nextTodoList);
      setText('');
    }
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClickAddButton();
    }
  };

  const time = dayjs(new Date()).format('hh:mm A');

  useEffect(() => {}, [todoList]);

  return (
    <Wrap>
      <Btn onClick={onClickAddButton}>+</Btn>
      <Input
        type="text"
        value={text}
        placeholder="Type your task"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      ></Input>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  height: 60px;
  padding: 10px 30px;
  border-bottom: #ebebeb 1px solid;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0;
  font-size: 18px;
  ::placeholder {
    color: #b1aecf;
    font-size: 18px;
  }
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  border: none;
  background-color: #fff;
  font-size: 40px;
  color: #b1aecf;
  padding: 0;
  margin-right: 20px;
`;

export default TodoInsert;

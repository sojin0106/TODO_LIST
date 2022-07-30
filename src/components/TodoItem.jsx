import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  return (
    <Wrap>
      <List>
        <input
          type="checkbox"
          checked={todoItem.checked}
          onChange={onChangeCheckbox}
        />
        <span className={`item ${todoItem.checked ? 'item-checked' : ''}`}>
          {todoItem.text}
        </span>
      </List>
      <span className="time">{todoItem.time}</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  & .time {
    color: #adadad;
    font-weight: 600;
    font-size: 15px;
  }
`;

const List = styled.li`
  list-style: none;
  input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    accent-color: #fa6263;
    margin-right: 20px;
    vertical-align: middle;
  }
  span {
    font-weight: 600;
    font-size: 15px;
    color: #8b869d;
    &.item-checked {
      text-decoration: line-through;
      color: #868e96;
    }
  }
`;

export default TodoItem;

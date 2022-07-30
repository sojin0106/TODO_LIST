import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      <List>
        {todoList &&
          todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
      </List>
    </div>
  );
};

const List = styled.ul`
  padding: 0 30px;
`;

export default TodoList;

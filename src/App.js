import './App.css';
import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoDay from './components/TodoDay';
import styled from 'styled-components';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Container>
      <Wrap>
        <div>
          <TodoDay setTodoList={setTodoList} todoList={todoList} />
          <TodoInsert
            todoList={todoList}
            setTodoList={setTodoList}
          ></TodoInsert>
          <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
        </div>
        <Footer>
          <p>
            Inspired by <span>Ennio Dyveli</span>
          </p>
        </Footer>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  height: 1200px;
  background-color: #5c60e9;
  padding-top: 100px;
`;
const Wrap = styled.div`
  width: 450px;
  height: 600px;
  margin: auto;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: fixed;
  height: 50px;
  margin: 20px auto;
  & p {
    font-size: 14px;
    font-weight: 600;

    color: #9497a1;
  }
  & span {
    color: #fb8389;
  }
`;

export default App;

import React from "react";
import { Item } from "./index";
import styled from "styled-components";

const TodoList = ({ amTodos, pmTodos, evTodos }) => {
  return (
    <ListBox>
      <h1>未完了</h1>
      <div>
        <h2>午前中</h2>
        <ul>
          {amTodos.map(amTodo => <Item key={amTodo.id} content={amTodo.content} id={amTodo.id} type='am' />)}
        </ul>
      </div>
      <div>
        <h2>午後中</h2>
        <ul>
          {pmTodos.map(pmTodo => <Item key={pmTodo.id} content={pmTodo.content} id={pmTodo.id} type='pm' />)}
        </ul>
      </div>
      <div>
        <h2>夜中</h2>
        <ul>
          {evTodos.map(evTodo => <Item key={evTodo.id} content={evTodo.content} id={evTodo.id} type='ev' />)}
        </ul>
      </div>
    </ListBox>
  )
}

export default TodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`
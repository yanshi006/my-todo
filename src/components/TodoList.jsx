import React from "react";
import { Item } from "./index";
import styled from "styled-components";


const TodoList = ({ todos, deleteTodos, addFinishTodos }) => {

  return (
    <>
      <ListBox>
        <h1>未完了</h1>
        <div>
          <h2>午前中</h2>
          <ul>
            {
              todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)
            }
          </ul>
        </div>
        <div>
          <h2>午後中</h2>
          <ul>
            {
              todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)
            }
          </ul>
        </div>
        <div>
          <h2>夜中</h2>
          <ul>
            {
              todos.map(todo => <Item key={todo.id} content={todo.content} id={todo.id} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />)
            }
          </ul>
        </div>
      </ListBox>
    </>
  )
}

export default TodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`

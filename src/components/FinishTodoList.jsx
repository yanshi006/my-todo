import React from "react";
import { FinishItem } from "./index";
import styled from "styled-components";

const FinishTodoList = ({ finishTodos, returnTodo, finishDeleteTodos }) => {

  return (
    <>
      <ListBox>
        <h1>完了済み</h1>
        <ul>
          {
            finishTodos.map(finishTodo => <FinishItem key={finishTodo.id} content={finishTodo.content} id={finishTodo.id} returnTodo={returnTodo} finishDeleteTodos={finishDeleteTodos} />)
          }
        </ul>
      </ListBox>
    </>
  )
}

export default FinishTodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`

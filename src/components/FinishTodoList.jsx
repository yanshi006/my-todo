import React from "react";
import { FinishItem } from "./index";
import styled from "styled-components";

const FinishTodoList = ({ amFinishTodos, pmFinishTodos, evFinishTodos }) => {
  return (
    <ListBox>
      <h1>完了済み</h1>
      <div>
        <h2>午前中</h2>
        <ul>
          {amFinishTodos.map(amFinishTodo => <FinishItem key={amFinishTodo.id} content={amFinishTodo.content} id={amFinishTodo.id} type='finishAm' />)}
        </ul>
      </div>
      <div>
        <h2>午後中</h2>
        <ul>
          {pmFinishTodos.map(pmFinishTodo => <FinishItem key={pmFinishTodo.id} content={pmFinishTodo.content} id={pmFinishTodo.id} type='finishPm' />)}
        </ul>
      </div>
      <div>
        <h2>夜中</h2>
        <ul>
          {evFinishTodos.map(finishTodo => <FinishItem key={finishTodo.id} content={finishTodo.content} id={finishTodo.id} type='finishEv' />)}
        </ul>
      </div>
    </ListBox>
  )
}

export default FinishTodoList;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`
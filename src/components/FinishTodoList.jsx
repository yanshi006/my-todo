import React, { useContext } from "react";
import { FinishItem, ListTitle, ListSubTitle } from "./index";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const FinishTodoList = ({ amFinishTodos, pmFinishTodos, evFinishTodos }) => {

  const { useStyles } = useContext(AppContext);
  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Perfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {amFinishTodos.map(amFinishTodo => <FinishItem key={amFinishTodo.id} content={amFinishTodo.content} id={amFinishTodo.id} type='finishAm' />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {pmFinishTodos.map(pmFinishTodo => <FinishItem key={pmFinishTodo.id} content={pmFinishTodo.content} id={pmFinishTodo.id} type='finishPm' />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
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
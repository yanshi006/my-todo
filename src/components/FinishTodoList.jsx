import React from "react";
import { FinishItem, ListTitle, ListSubTitle } from "./index";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  amButton: {
    color: theme.status.am,
  },
  pmButton: {
    color: theme.status.pm
  },
  evButton: {
    color: theme.status.ev
  }
}));


const FinishTodoList = ({ returnAmTodo, returnPmTodo, returnEvTodo, finishDeleteAmTodos, finishDeletePmTodos, finishDeleteEvTodos, amFinishTodos, pmFinishTodos, evFinishTodos }) => {

  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Perfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {amFinishTodos.map(amFinishTodo => <FinishItem key={amFinishTodo.id} content={amFinishTodo.content} id={amFinishTodo.id} type='finishAm' returnAmTodo={returnAmTodo} finishDeleteAmTodos={finishDeleteAmTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {pmFinishTodos.map(pmFinishTodo => <FinishItem key={pmFinishTodo.id} content={pmFinishTodo.content} id={pmFinishTodo.id} type='finishPm' returnPmTodo={returnPmTodo} finishDeletePmTodos={finishDeletePmTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
        <ul>
          {evFinishTodos.map(finishTodo => <FinishItem key={finishTodo.id} content={finishTodo.content} id={finishTodo.id} type='finishEv' returnEvTodo={returnEvTodo} finishDeleteEvTodos={finishDeleteEvTodos} />)}
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
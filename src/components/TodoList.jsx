import React from "react";
import { Item, ListTitle, ListSubTitle } from "./index";
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


const TodoList = ({ deleteAmTodos, deletePmTodos, deleteEvTodos, addAmFinishTodos, addPmFinishTodos, addEvFinishTodos,  amTodos, pmTodos, evTodos }) => {

  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Imperfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {amTodos.map(amTodo => <Item key={amTodo.id} content={amTodo.content} id={amTodo.id} type='am' deleteAmTodos={deleteAmTodos} addAmFinishTodos={addAmFinishTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {pmTodos.map(pmTodo => <Item key={pmTodo.id} content={pmTodo.content} id={pmTodo.id} type='pm' deletePmTodos={deletePmTodos} addPmFinishTodos={addPmFinishTodos} />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
        <ul>
          {evTodos.map(evTodo => <Item key={evTodo.id} content={evTodo.content} id={evTodo.id} type='ev' deleteEvTodos={deleteEvTodos} addEvFinishTodos={addEvFinishTodos} />)}
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
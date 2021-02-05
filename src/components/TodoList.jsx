import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Item, ListTitle, ListSubTitle } from "./index";
import styled from "styled-components";

const TodoList = ({ amTodos, pmTodos, evTodos }) => {

  const { useStyles } = useContext(AppContext);
  const classes = useStyles();

  return (
    <ListBox>
      <ListTitle label='Imperfect' />
      <div>
        <ListSubTitle color={classes.amButton} label='a.m.' />
        <ul>
          {amTodos.map(amTodo => <Item key={amTodo.id} content={amTodo.content} id={amTodo.id} type='am' />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.pmButton} label='p.m.' />
        <ul>
          {pmTodos.map(pmTodo => <Item key={pmTodo.id} content={pmTodo.content} id={pmTodo.id} type='pm' />)}
        </ul>
      </div>
      <div>
        <ListSubTitle color={classes.evButton} label='night' />
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
import React, { useState, useCallback } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./components/index";
import styled from "styled-components";
import shortid from "shortid";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);

  const addTodos = useCallback(content => {
    setTodos([
      ...todos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setTodos, todos])

  const addFinishTodos = (id) => {
    // setTodos(
    //   todos.filter(todo => todo.id !== id)
    // )
    deleteTodos(id);
    const compTodo = todos.find(todo => todo.id === id);
    setFinishTodos([
      ...finishTodos, compTodo
    ])
  }

  const returnTodo = (id) => {
    finishDeleteTodos(id);
    const resTodo = finishTodos.find(finishtodo => finishtodo.id === id);
    setTodos([
      ...todos, resTodo
    ])
  }


  const deleteTodos = useCallback(id => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }, [setTodos, todos])

  const finishDeleteTodos = useCallback(id => {
    setFinishTodos(
      finishTodos.filter(finishTodo => finishTodo.id !== id)
    )
  }, [setFinishTodos, finishTodos])


  return (
    <>
      <Container>
        <h1>TodoApp</h1>
        <InputForm addTodos={addTodos} />
        <Today />
      </Container>
      <ListContainer>
        <TodoList todos={todos} deleteTodos={deleteTodos} addFinishTodos={addFinishTodos} />
        <FinishTodoList finishTodos={finishTodos} returnTodo={returnTodo} finishDeleteTodos={finishDeleteTodos} />
      </ListContainer>
    </>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`
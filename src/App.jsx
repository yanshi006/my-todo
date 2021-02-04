import React, { useState, useCallback } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./components/index";
import { AppProvider } from "./AppContext";
import styled from "styled-components";
import shortid from "shortid";

const App = () => {

  const [amTodos, setAmTodos] = useState([]);
  const [pmTodos, setPmTodos] = useState([]);
  const [evTodos, setEvTodos] = useState([]);
  const [amFinishTodos, setAmFinishTodos] = useState([]);
  const [pmFinishTodos, setPmFinishTodos] = useState([]);
  const [evFinishTodos, setEvFinishTodos] = useState([]);

  const addAmTodos = useCallback(content => {
    setAmTodos([
      ...amTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setAmTodos, amTodos])

  const addPmTodos = useCallback(content => {
    setPmTodos([
      ...pmTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setPmTodos, pmTodos])

  const addEvTodos = useCallback(content => {
    setEvTodos([
      ...evTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setEvTodos, evTodos])

  return (
    <>
      <AppProvider amTodos={amTodos} setAmTodos={setAmTodos} pmTodos={pmTodos} setPmTodos={setPmTodos} evTodos={evTodos} setEvTodos={setEvTodos} amFinishTodos={amFinishTodos} setAmFinishTodos={setAmFinishTodos} pmFinishTodos={pmFinishTodos} setPmFinishTodos={setPmFinishTodos} evFinishTodos={evFinishTodos} setEvFinishTodos={setEvFinishTodos} >
        <Container>
          <h1>TodoApp</h1>
          <InputForm addAmTodos={addAmTodos} addPmTodos={addPmTodos} addEvTodos={addEvTodos} />
          <Today />
        </Container>
        <ListContainer>
          <TodoList amTodos={amTodos} pmTodos={pmTodos} evTodos={evTodos} />
          <FinishTodoList amFinishTodos={amFinishTodos} pmFinishTodos={pmFinishTodos} evFinishTodos={evFinishTodos} />
        </ListContainer>
      </AppProvider>
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
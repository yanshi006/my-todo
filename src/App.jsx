import React, { useState, useCallback } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./components/index";
import { AppProvider } from "./AppContext";
import styled from "styled-components";
import shortid from "shortid";

const App = () => {

  // const [todos, setTodos] = useState([]);
  const [amTodos, setAmTodos] = useState([]);
  const [pmTodos, setPmTodos] = useState([]);
  const [evTodos, setEvTodos] = useState([]);

  const [amFinishTodos, setAmFinishTodos] = useState([]);
  const [pmFinishTodos, setPmFinishTodos] = useState([]);
  const [evFinishTodos, setEvFinishTodos] = useState([]);

  //ok
  const addAmTodos = useCallback(content => {
    setAmTodos([
      ...amTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setAmTodos, amTodos])

  //ok
  const addPmTodos = useCallback(content => {
    setPmTodos([
      ...pmTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setPmTodos, pmTodos])
  //ok

  const addEvTodos = useCallback(content => {
    setEvTodos([
      ...evTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setEvTodos, evTodos])

  //////////////////////////////////////////////////
  //ok
  const addAmFinishTodos = (id) => {
    deleteAmTodos(id);
    const compAmTodo = amTodos.find(amTodo => amTodo.id === id);
    //どっちの書き方のが良いのか
    const amArrray = amFinishTodos;
    amArrray.push(compAmTodo);
    setAmFinishTodos(amArrray);
  }
  //ok
  const addPmFinishTodos = (id) => {
    deletePmTodos(id);
    //どっちの書き方のが良いのか
    const compPmTodo = pmTodos.find(pmTodo => pmTodo.id === id);
    setPmFinishTodos([
      ...pmFinishTodos, compPmTodo
    ])
  }
  //ok
  const addEvFinishTodos = (id) => {
    deleteEvTodos(id);
    const compEvTodo = evTodos.find(evTodo => evTodo.id === id);
    setEvFinishTodos([
      ...evFinishTodos, compEvTodo
    ])
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //ok
  const returnAmTodo = (id) => {
    finishDeleteAmTodos(id);
    const resAmTodo = amFinishTodos.find(amFinishtodo => amFinishtodo.id === id);
    setAmTodos([
      ...amTodos, resAmTodo
    ])
  }

  const returnPmTodo = (id) => {
    finishDeletePmTodos(id);
    const resPmTodo = pmFinishTodos.find(pmFinishtodo => pmFinishtodo.id === id);
    setPmTodos([
      ...pmTodos, resPmTodo
    ])
  }

  const returnEvTodo = (id) => {
    finishDeleteEvTodos(id);
    const resEvTodo = evFinishTodos.find(evFinishtodo => evFinishtodo.id === id);
    setEvTodos([
      ...evTodos, resEvTodo
    ])
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //ok
  const deleteAmTodos = useCallback(id => {
    setAmTodos(
      amTodos.filter(amTodo => amTodo.id !== id)
    )
  }, [setAmTodos, amTodos])
  //ok
  const deletePmTodos = useCallback(id => {
    setPmTodos(
      pmTodos.filter(pmTodo => pmTodo.id !== id)
    )
  }, [setPmTodos, pmTodos])
  //ok
  const deleteEvTodos = useCallback(id => {
    setEvTodos(
      evTodos.filter(evTodo => evTodo.id !== id)
    )
  }, [setEvTodos, evTodos])
  ///////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  //ok
  const finishDeleteAmTodos = useCallback(id => {
    setAmFinishTodos(
      amFinishTodos.filter(amFinishTodo => amFinishTodo.id !== id)
    )
  }, [setAmFinishTodos, amFinishTodos])

  //ok
  const finishDeletePmTodos = useCallback(id => {
    setPmFinishTodos(
      pmFinishTodos.filter(pmFinishTodo => pmFinishTodo.id !== id)
    )
  }, [setPmFinishTodos, pmFinishTodos])

  //ok
  const finishDeleteEvTodos = useCallback(id => {
    setEvFinishTodos(
      evFinishTodos.filter(evFinishTodo => evFinishTodo.id !== id)
    )
  }, [setEvFinishTodos, evFinishTodos])
  ////////////////////////////////////////////////////

  return (
    <>
      <AppProvider>
        <Container>
          <h1>TodoApp</h1>
          <InputForm addAmTodos={addAmTodos} addPmTodos={addPmTodos} addEvTodos={addEvTodos} />
          <Today />
        </Container>
        <ListContainer>
          <TodoList amTodos={amTodos} pmTodos={pmTodos} evTodos={evTodos} deleteAmTodos={deleteAmTodos} deletePmTodos={deletePmTodos} deleteEvTodos={deleteEvTodos} addAmFinishTodos={addAmFinishTodos} addPmFinishTodos={addPmFinishTodos} addEvFinishTodos={addEvFinishTodos} />

          <FinishTodoList amFinishTodos={amFinishTodos} pmFinishTodos={pmFinishTodos} evFinishTodos={evFinishTodos} returnAmTodo={returnAmTodo} returnPmTodo={returnPmTodo} returnEvTodo={returnEvTodo} finishDeleteAmTodos={finishDeleteAmTodos} finishDeletePmTodos={finishDeletePmTodos} finishDeleteEvTodos={finishDeleteEvTodos} />
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
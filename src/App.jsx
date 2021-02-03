import React, { useState, useCallback } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./components/index";
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

  // const addTodos = useCallback(content => {
  //   setTodos([
  //     ...todos, {
  //       content: content,
  //       id: shortid.generate()
  //     }
  //   ])
  // }, [setTodos, todos])

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

  // const addFinishTodos = (id) => {
  //   // setTodos(
  //   //   todos.filter(todo => todo.id !== id)
  //   // )
  //   // deleteTodos(id);
  //   const compTodo = todos.find(todo => todo.id === id);
  //   setFinishTodos([
  //     ...finishTodos, compTodo
  //   ])
  // }
  //ok
  const addAmFinishTodos = (id) => {
    // setTodos(
    //   todos.filter(todo => todo.id !== id)
    // )
    // deleteTodos(id);
    const compAmTodo = amTodos.find(amTodo => amTodo.id === id);
    setAmFinishTodos([
      ...amFinishTodos, compAmTodo
    ])
  }
  //ok
  const addPmFinishTodos = (id) => {
    // setTodos(
    //   todos.filter(todo => todo.id !== id)
    // )
    // deleteTodos(id);
    const compPmTodo = pmTodos.find(pmTodo => pmTodo.id === id);
    setPmFinishTodos([
      ...pmFinishTodos, compPmTodo
    ])
  }
  //ok
  const addEvFinishTodos = (id) => {
    // setTodos(
    //   todos.filter(todo => todo.id !== id)
    // )
    // deleteTodos(id);
    const compEvTodo = evTodos.find(evTodo => evTodo.id === id);
    setEvFinishTodos([
      ...evFinishTodos, compEvTodo
    ])
  }

  //戻すボタンが押された時
  // const returnTodo = (id) => {
  //   finishDeleteTodos(id);
  //   const resTodo = finishTodos.find(finishtodo => finishtodo.id === id);
  //   setTodos([
  //     ...todos, resTodo
  //   ])
  // }
  //ok
  const returnAmTodo = (id) => {
    amFinishDeleteTodos(id);
    const resAmTodo = amFinishTodos.find(amFinishtodo => amFinishtodo.id === id);
    setAmTodos([
      ...amTodos, resAmTodo
    ])
  }

  const returnPmTodo = (id) => {
    pmFinishDeleteTodos(id);
    const resPmTodo = pmFinishTodos.find(pmFinishtodo => pmFinishtodo.id === id);
    setPmTodos([
      ...pmTodos, resPmTodo
    ])
  }

  const returnEvTodo = (id) => {
    evFinishDeleteTodos(id);
    const resEvTodo = evFinishTodos.find(evFinishtodo => evFinishtodo.id === id);
    setEvTodos([
      ...evTodos, resEvTodo
    ])
  }


  // const deleteTodos = useCallback(id => {
  //   setTodos(
  //     todos.filter(todo => todo.id !== id)
  //   )
  // }, [setTodos, todos])
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


  // const finishDeleteTodos = useCallback(id => {
  //   setFinishTodos(
  //     finishTodos.filter(finishTodo => finishTodo.id !== id)
  //   )
  // }, [setFinishTodos, finishTodos])
  //ok
  const amFinishDeleteTodos = useCallback(id => {
    setAmFinishTodos(
      amFinishTodos.filter(amFinishTodo => amFinishTodo.id !== id)
    )
  }, [setAmFinishTodos, amFinishTodos])

  //ok
  const pmFinishDeleteTodos = useCallback(id => {
    setPmFinishTodos(
      pmFinishTodos.filter(pmFinishTodo => pmFinishTodo.id !== id)
    )
  }, [setPmFinishTodos, pmFinishTodos])

  //ok
  const evFinishDeleteTodos = useCallback(id => {
    setEvFinishTodos(
      evFinishTodos.filter(evFinishTodo => evFinishTodo.id !== id)
    )
  }, [setEvFinishTodos, evFinishTodos])


  return (
    <>
      <Container>
        <h1>TodoApp</h1>
        <InputForm addAmTodos={addAmTodos} addPmTodos={addPmTodos} addEvTodos={addEvTodos} />
        <Today />
      </Container>
      <ListContainer>
        <TodoList amTodos={amTodos} pmTodos={pmTodos} evTodos={evTodos} deleteAmTodos={deleteAmTodos} deletePmTodos={deletePmTodos} deleteEvTodos={deleteEvTodos} addAmFinishTodos={addAmFinishTodos} addPmFinishTodos={addPmFinishTodos} addEvFinishTodos={addEvFinishTodos} />
        <FinishTodoList amFinishTodos={amFinishTodos} pmFinishTodos={pmFinishTodos} evFinishTodos={evFinishTodos} returnAmTodo={returnAmTodo} returnPmTodo={returnPmTodo} returnEvTodo={returnEvTodo} amFinishDeleteTodos={amFinishDeleteTodos} pmFinishDeleteTodos={pmFinishDeleteTodos} evFinishDeleteTodos={evFinishDeleteTodos} />
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
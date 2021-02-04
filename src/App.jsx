import React, { useState, useCallback } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./components/index";
import { AppProvider } from "./AppContext";
import styled from "styled-components";
import shortid from "shortid";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#aaaaaa'
    }
  },
  status: {
    am: '#03dffc',
    pm: '#03fc35',
    ev: '#c603fc'
  }
});

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
      <ThemeProvider theme={theme}>
        <AppProvider amTodos={amTodos} setAmTodos={setAmTodos} pmTodos={pmTodos} setPmTodos={setPmTodos} evTodos={evTodos} setEvTodos={setEvTodos} amFinishTodos={amFinishTodos} setAmFinishTodos={setAmFinishTodos} pmFinishTodos={pmFinishTodos} setPmFinishTodos={setPmFinishTodos} evFinishTodos={evFinishTodos} setEvFinishTodos={setEvFinishTodos} >
          <Container>
            <Title>TodoApp</Title>
            <InputForm addAmTodos={addAmTodos} addPmTodos={addPmTodos} addEvTodos={addEvTodos} />
            <Today />
          </Container>
          <ListContainer>
            <TodoList amTodos={amTodos} pmTodos={pmTodos} evTodos={evTodos} />
            <FinishTodoList amFinishTodos={amFinishTodos} pmFinishTodos={pmFinishTodos} evFinishTodos={evFinishTodos} />
          </ListContainer>
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App;

const Title = styled.h1`
  font-family: serif;
  font-size: 40px;
  color: #aaa;
  letter-spacing: 1px;
`

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
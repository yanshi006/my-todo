import React, { useState, useCallback, useEffect } from "react";
import { InputForm, Today, TodoList, FinishTodoList } from "./index";
import styled from "styled-components";
import shortid from "shortid";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from "../config/Firebase";
import "firebase/firestore";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333'
    }
  },
  status: {
    am: '#03dffc',
    pm: '#03fc35',
    ev: '#c603fc'
  },
  typography: {
    fontFamily: 'serif',
  },
});

const TodoApp = () => {
  const [amTodos, setAmTodos] = useState([]);
  const [pmTodos, setPmTodos] = useState([]);
  const [evTodos, setEvTodos] = useState([]);
  const [amFinishTodos, setAmFinishTodos] = useState([]);
  const [pmFinishTodos, setPmFinishTodos] = useState([]);
  const [evFinishTodos, setEvFinishTodos] = useState([]);

  // const db = firebase.firestore();

  // // 最初のレンダリングでfirebaseからデータを取得している。
  // useEffect(() => {
  //     const fireAmTodo = db.collection('TodoList').doc('am').get();
  //     const firePmTodo = db.collection('TodoList').doc('pm').get();
  //     const fireEvTodo = db.collection('TodoList').doc('ev').get();
  //     const fireAmFinishTodo = db.collection('FinishTodoList').doc('finishAm').get();
  //     const firePmFinishTodo = db.collection('FinishTodoList').doc('finishPm').get();
  //     const fireEvFinishTodo = db.collection('FinishTodoList').doc('finishEv').get();

      // setAmTodos(fireAmTodo.data().tasks);
      // setPmTodos(firePmTodo.data().tasks);
      // setEvTodos(fireEvTodo.data().tasks);
      // setAmFinishTodos(fireAmFinishTodo.data().tasks);
      // setPmFinishTodos(firePmFinishTodo.data().tasks);
      // setEvFinishTodos(fireEvFinishTodo.data().tasks);
      // console.log(fireAmTodo)
  //     fireAmTodo.then(doc => {
  //       console.log(doc.data())
  //     })
  // }, [db])

          // todoListが変更したら
  // useEffect(() => {
  //   db.collection('TodoList').doc('am').update(amTodos)
  //   db.collection('TodoList').doc('pm').update(pmTodos)
  //   db.collection('TodoList').doc('ev').update(evTodos)
  // }, [db, amTodos,pmTodos,evTodos])
  //         // finishTodoListが変更したら
  // useEffect(() => {
  //   db.collection('FinishTodoList').doc('finishAm').update(amFinishTodos)
  //   db.collection('FinishTodoList').doc('finishPm').update(pmFinishTodos)
  //   db.collection('FinishTodoList').doc('finishEv').update(evFinishTodos)
  // }, [db, amFinishTodos, pmFinishTodos, evFinishTodos])
  // console.log(amTodos)

  //a.m.エリアに入力値を追加する
  const addAmTodos = useCallback(content => {
    setAmTodos([
      ...amTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setAmTodos, amTodos])
  //p.m.エリアに入力値を追加する
  const addPmTodos = useCallback(content => {
    setPmTodos([
      ...pmTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setPmTodos, pmTodos])
  //nightエリアに入力値を追加する
  const addEvTodos = useCallback(content => {
    setEvTodos([
      ...evTodos, {
        content: content,
        id: shortid.generate()
      }
    ])
  }, [setEvTodos, evTodos])

  //TodoListの削除ボタンが押された時の関数
  //午前
  const deleteAmTodos = useCallback(id => {
    setAmTodos(
      amTodos.filter(amTodo => amTodo.id !== id)
    )
  }, [setAmTodos, amTodos]);

  //午後
  const deletePmTodos = useCallback(id => {
    setPmTodos(
      pmTodos.filter(pmTodo => pmTodo.id !== id)
    )
  }, [setPmTodos, pmTodos]);

  //夜
  const deleteEvTodos = useCallback(id => {
    setEvTodos(
      evTodos.filter(evTodo => evTodo.id !== id)
    )
  }, [setEvTodos, evTodos]);

  //FinishTodoListの削除ボタンが押された時の関数
  //午前
  const finishDeleteAmTodos = useCallback(id => {
    setAmFinishTodos(
      amFinishTodos.filter(amFinishTodo => amFinishTodo.id !== id)
    )
  }, [setAmFinishTodos, amFinishTodos]);

  //午後
  const finishDeletePmTodos = useCallback(id => {
    setPmFinishTodos(
      pmFinishTodos.filter(pmFinishTodo => pmFinishTodo.id !== id)
    )
  }, [setPmFinishTodos, pmFinishTodos]);

  //夜
  const finishDeleteEvTodos = useCallback(id => {
    setEvFinishTodos(
      evFinishTodos.filter(evFinishTodo => evFinishTodo.id !== id)
    )
  }, [setEvFinishTodos, evFinishTodos]);

  //完了ボタンが押された時の関数
  //午前
  const addAmFinishTodos = useCallback(id => {
    deleteAmTodos(id);
    const compAmTodo = amTodos.find(amTodo => amTodo.id === id);
    //どっちの書き方のが良いのか
    const amArrray = amFinishTodos;
    amArrray.push(compAmTodo);
    setAmFinishTodos(amArrray);
  }, [deleteAmTodos, amFinishTodos, amTodos, setAmFinishTodos]);

  //午後
  const addPmFinishTodos = useCallback(id => {
    deletePmTodos(id);
    //どっちの書き方のが良いのか
    const compPmTodo = pmTodos.find(pmTodo => pmTodo.id === id);
    setPmFinishTodos([
      ...pmFinishTodos, compPmTodo
    ])
  }, [deletePmTodos, pmFinishTodos, pmTodos, setPmFinishTodos]);

  //夜
  const addEvFinishTodos = useCallback(id => {
    deleteEvTodos(id);
    const compEvTodo = evTodos.find(evTodo => evTodo.id === id);
    setEvFinishTodos([
      ...evFinishTodos, compEvTodo
    ])
  }, [deleteEvTodos, evFinishTodos, evTodos, setEvFinishTodos]);

    //戻すボタンが押された時の関数
  //午前
  const returnAmTodo = useCallback(id => {
    finishDeleteAmTodos(id);
    const resAmTodo = amFinishTodos.find(amFinishtodo => amFinishtodo.id === id);
    setAmTodos([
      ...amTodos, resAmTodo
    ])
  }, [finishDeleteAmTodos, amFinishTodos, amTodos, setAmTodos]);

  //午後
  const returnPmTodo = useCallback(id => {
    finishDeletePmTodos(id);
    const resPmTodo = pmFinishTodos.find(pmFinishtodo => pmFinishtodo.id === id);
    setPmTodos([
      ...pmTodos, resPmTodo
    ])
  }, [finishDeletePmTodos, pmFinishTodos, pmTodos, setPmTodos]);

  //夜
  const returnEvTodo = useCallback(id => {
    finishDeleteEvTodos(id);
    const resEvTodo = evFinishTodos.find(evFinishtodo => evFinishtodo.id === id);
    setEvTodos([
      ...evTodos, resEvTodo
    ])
  }, [finishDeleteEvTodos, evFinishTodos, evTodos, setEvTodos]);

  return (
    <>
      <ThemeProvider theme={theme}>
          <Container>
            <Title>TodoApp</Title>
            <InputForm addAmTodos={addAmTodos} addPmTodos={addPmTodos} addEvTodos={addEvTodos} />
            <Today />
          </Container>
          <ListContainer>
            <TodoList deleteAmTodos={deleteAmTodos} deletePmTodos={deletePmTodos} deleteEvTodos={deleteEvTodos} addAmFinishTodos={addAmFinishTodos} addPmFinishTodos={addPmFinishTodos} addEvFinishTodos={addEvFinishTodos} amTodos={amTodos} pmTodos={pmTodos} evTodos={evTodos} />
            <FinishTodoList returnAmTodo={returnAmTodo} returnPmTodo={returnPmTodo} returnEvTodo={returnEvTodo} finishDeleteAmTodos={finishDeleteAmTodos} finishDeletePmTodos={finishDeletePmTodos} finishDeleteEvTodos={finishDeleteEvTodos} amFinishTodos={amFinishTodos} pmFinishTodos={pmFinishTodos} evFinishTodos={evFinishTodos} />
          </ListContainer>
      </ThemeProvider>
    </>
  )
}

export default TodoApp;

const Title = styled.h1`
  font-family: serif;
  font-size: 40px;
  color: #333;
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
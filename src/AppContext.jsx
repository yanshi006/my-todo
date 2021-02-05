import React, { createContext, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";

const AppContext = createContext();

const AppProvider = ({ children, amTodos, setAmTodos, pmTodos, setPmTodos, evTodos, setEvTodos, amFinishTodos, setAmFinishTodos, pmFinishTodos, setPmFinishTodos, evFinishTodos, setEvFinishTodos }) => {
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

  //共通のmakeStyles
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

  return (
    <AppContext.Provider value={{
      deleteAmTodos,
      deletePmTodos,
      deleteEvTodos,
      finishDeleteAmTodos,
      finishDeletePmTodos,
      finishDeleteEvTodos,
      addAmFinishTodos,
      addPmFinishTodos,
      addEvFinishTodos,
      returnAmTodo,
      returnPmTodo,
      returnEvTodo,
      useStyles
    }}>
      {children}
    </AppContext.Provider>
  )
};

export {
  AppContext,
  AppProvider
};
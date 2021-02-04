import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { ItemFiled } from "./index";

const FinishItem = ({ content, id, type }) => {

  const { returnAmTodo, returnPmTodo, returnEvTodo, finishDeleteAmTodos, finishDeletePmTodos, finishDeleteEvTodos } = useContext(AppContext);

  switch (type) {
    case `finishAm`:
      return (
        <ItemFiled
          label={content}
          type='submit'
          firstValue='削除'
          secondValue='戻す'
          firstOnClick={() => finishDeleteAmTodos(id)}
          secondOnClick={() => returnAmTodo(id)}
        />
      )
    case 'finishPm':
      return (
        <ItemFiled
          label={content}
          type='submit'
          firstValue='削除'
          secondValue='戻す'
          firstOnClick={() => finishDeletePmTodos(id)}
          secondOnClick={() => returnPmTodo(id)}
        />
      )
    case 'finishEv':
      return (
        <ItemFiled
          label={content}
          type='submit'
          firstValue='削除'
          secondValue='戻す'
          firstOnClick={() => finishDeleteEvTodos(id)}
          secondOnClick={() => returnEvTodo(id)}
        />
      )
    default:
      return type
  }
}

export default FinishItem;
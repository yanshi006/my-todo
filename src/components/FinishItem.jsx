import React from "react";
import { ItemFiled } from "./index";

const FinishItem = ({ content, id, returnAmTodo, returnPmTodo, returnEvTodo, finishDeleteAmTodos, finishDeletePmTodos, finishDeleteEvTodos, type }) => {

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
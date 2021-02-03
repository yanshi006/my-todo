import React from "react";

const FinishItem = ({ content, id, returnTodo, finishDeleteTodos }) => {
  return (
    <li>
      <span>{content}</span>
      <input type="submit" value='削除' onClick={() => finishDeleteTodos(id)} />
      <input type="submit" value='戻す' onClick={() => returnTodo(id)} />
    </li>
  )
}

export default FinishItem;
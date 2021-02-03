import React from "react";

const Item = ({ content, deleteTodos, id, addFinishTodos }) => {
  return (
    <li>
      <span>{content}</span>
      <input type="submit" value='削除' onClick={() => deleteTodos(id)} />
      <input type="submit" value='完了' onClick={() => addFinishTodos(id)} />
    </li>
  )
}

export default Item;
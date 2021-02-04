import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { ItemFiled } from "./index";

const Item = ({ content, id, type }) => {

  const { deleteAmTodos, deletePmTodos, deleteEvTodos, addAmFinishTodos, addPmFinishTodos, addEvFinishTodos } = useContext(AppContext);

  const [text, setText] = useState('');

  switch (type) {
    case 'am':
      return (
        <ItemFiled
          label={content}
          type='submit'
          // firstValue='削除'
          secondValue='finish'
          firstOnClick={() => deleteAmTodos(id)}
          secondOnClick={() => addAmFinishTodos(id)}
          thirdValue={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    case 'pm':
      return (
        <ItemFiled
          label={content}
          type='submit'
          // firstValue='削除'
          secondValue='finish'
          firstOnClick={() => deletePmTodos(id)}
          secondOnClick={() => addPmFinishTodos(id)}
          thirdValue={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    case 'ev':
      return (
        <ItemFiled
          label={content}
          type='submit'
          // firstValue='削除'
          secondValue='finish'
          firstOnClick={() => deleteEvTodos(id)}
          secondOnClick={() => addEvFinishTodos(id)}
          thirdValue={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    default:
      return type
  }
}

export default Item;
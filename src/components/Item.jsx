import React, { useState } from "react";
// import { AppContext } from "../AppContext";
import { ItemFiled } from "./index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pmButton: {
    backgroundColor: '#88FF01',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#A0FF33'
    }
  },
});

const Item = ({ content, id, type, deleteAmTodos, deletePmTodos, deleteEvTodos, addAmFinishTodos, addPmFinishTodos, addEvFinishTodos }) => {

  const classes = useStyles();

  // const { deleteAmTodos, deletePmTodos, deleteEvTodos, addAmFinishTodos, addPmFinishTodos, addEvFinishTodos } = useContext(AppContext);

  const [text, setText] = useState('');

  switch (type) {
    case 'am':
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.pmButton}
          text='Perfect'
          firstOnClick={() => deleteAmTodos(id)}
          secondOnClick={() => addAmFinishTodos(id)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    case 'pm':
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.pmButton}
          text='Perfect'
          firstOnClick={() => deletePmTodos(id)}
          secondOnClick={() => addPmFinishTodos(id)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    case 'ev':
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.pmButton}
          text='Perfect'
          firstOnClick={() => deleteEvTodos(id)}
          secondOnClick={() => addEvFinishTodos(id)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )
    default:
      return type
  }
}

export default Item;
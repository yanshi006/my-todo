import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { ItemFiled } from "./index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  amButton: {
    backgroundColor: '#9CA592' ,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#ADBC9D'
    }
  },
});

const FinishItem = ({ content, id, type }) => {

  const classes = useStyles();

  const { returnAmTodo, returnPmTodo, returnEvTodo, finishDeleteAmTodos, finishDeletePmTodos, finishDeleteEvTodos } = useContext(AppContext);

  switch (type) {
    case `finishAm`:
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.amButton}
          text='Imperfect'
          firstOnClick={() => finishDeleteAmTodos(id)}
          secondOnClick={() => returnAmTodo(id)}
        />
      )
    case 'finishPm':
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.amButton}
          text='Imperfect'
          firstOnClick={() => finishDeletePmTodos(id)}
          secondOnClick={() => returnPmTodo(id)}
        />
      )
    case 'finishEv':
      return (
        <ItemFiled
          label={content}
          type='submit'
          color={classes.amButton}
          text='Imperfect'
          firstOnClick={() => finishDeleteEvTodos(id)}
          secondOnClick={() => returnEvTodo(id)}
        />
      )
    default:
      return type
  }
}

export default FinishItem;